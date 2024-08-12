import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Checkout = () => {
  const service = useLoaderData();
  const {user} = useContext(AuthContext);

  const handleCheckout = e =>{
    e.preventDefault();
    const form = e.target;
    const FName = form.FName.value;
    const LName = form.LName.value;
    const Phone = form.Phone.value;
    const email = user?.email;
    const Massage = form.Massage.value;
    const order = {
        CustomerName: FName, 
        LName,
        ServiceId: service._id,
        ServiceName: service.title,
        Price: service.price,
        img: service.img,
        email, 
        Phone, 
        Massage
    };
    console.log(order);

    fetch('http://localhost:5000/orders',{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(order)

    })
    .then(res => res.json())
    .then(data =>{
        console.log(data);
    })
  }

  return (
    <div>
      <div className="relative mb-5">
        <div className=" absolute rounded-xl h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <h2 className="text-white font-bold md:text-4xl lg:text-7xl md:my-24 lg:my-32 mx-10">
            Checkout
          </h2>
        </div>
        <img
          src="/src/assets/images/checkout/checkout.png"
          alt="Checkout"
          className="w-full"
        />
        <div className="absolute bottom-0 md:mx-[260px] lg:mx-[470px]">
          <div className="w-80 h-0 border-b-[50px] border-[#FF3811] border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent">
            <div className="absolute inset-x-0 bottom-0 text-center text-white transform mb-3">
              <h1 className="text-xl">Home/Checkout</h1>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="p-24 my-20 bg-base-200 rounded-lg">
          <div className="">
            <div className="flex justify-between font-bold text-2xl mb-5 " >
                <h1>Service Name: {service.title}</h1>
                <h1>Due Amount: {'$ '+ service.price}</h1>
            </div>
            <div className="w-full">
              <form onSubmit={handleCheckout} className="">
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="form-control">
                    <input
                      type="text"
                      name="FName"
                      defaultValue={user?.displayName}
                      placeholder="First Name"
                      className="input"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      name="LName"
                      placeholder="Last Name"
                      className="input"
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      name="Phone"
                      placeholder="Your Phone"
                      className="input"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="email"
                      name="email"
                      defaultValue={user?.email}
                      placeholder="Your Email"
                      className="input"
                      required
                    />
                  </div>
                  <div className="form-control col-span-2">
                    <textarea
                      placeholder="Your Massage"
                      name="Massage"
                      className="textarea textarea-lg h-52 w-full"
                    ></textarea>
                  </div>
                </div>
                <div className="form-control mt-3">
                  <button className="btn bg-[#FF3811] text-white">Order Confirm</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
