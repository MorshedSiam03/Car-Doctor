import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyOrderRow from "./MyOrderRow";
import Swal from "sweetalert2";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  const url = `https://car-doctor-server-eosin-sigma.vercel.app/Orders?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // Additional filtering on the client side
        const filteredOrders = data.filter(order => order.email === user?.email);
        setOrders(filteredOrders);
      });
  }, [url, user?.email]);

  const handleConfirm = id => {
    fetch(`https://car-doctor-server-eosin-sigma.vercel.app/Orders/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'Confirm' })
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          const remaining = orders.filter(order => order._id !== id);
          const updated = orders.find(order => order._id === id);
          updated.status = 'Confirm';
          setOrders([updated, ...remaining]);
        }
      });
  };

  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://car-doctor-server-eosin-sigma.vercel.app/Orders/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              const remainingOrders = orders.filter(order => order._id !== id);
              setOrders(remainingOrders);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="relative mb-5">
        <div className="absolute rounded-xl h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <h2 className="text-white font-bold my-10 text-4xl lg:text-7xl md:my-24 lg:my-32 mx-10">
            Order Details
          </h2>
        </div>
        <img
          src="https://raw.githubusercontent.com/MorshedSiam03/Car-Doctor/main/src/assets/images/checkout/checkout.png"
          alt="Checkout"
          className="w-full h-40 md:h-full"
        />
        <div className="absolute bottom-0 mx-12 md:mx-[260px] lg:mx-[470px]">
          <div className="w-80 h-0 border-b-[50px] border-[#FF3811] border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent">
            <div className="absolute inset-x-0 bottom-0 text-center text-white transform mb-3">
              <h1 className="text-xl">Home/MyOrders</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-lg md:text-xl dark:text-white">
              <th>Action</th>
              <th>Service</th>
              <th className=" hidden md:block" >Customer</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <MyOrderRow
                key={order._id}
                order={order}
                handleDelete={handleDelete}
                handleConfirm={handleConfirm}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
