import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const PopularProducts = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-full">
        <p className="font-bold text-2xl text-[#FF3811]">Popular Products</p>
        <h1 className="text-4xl md:text-5xl lg:w-2/3 md:w-4/5 font-bold text-center">
          Browse Our Products
        </h1>
        <p className="p-4 text-center text-gray-500">
          The majority have suffered alteration in some form, by injected
          humour, or randomised  words which do not look even slightly
          believable.{" "}
        </p>
      </div>

     
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        {products.map((products) => (
          <div key={products.id}>
            <div className="rounded-xl bg-base-100 p-8  shadow-xl">
              <figure>
                <img
                  src={products.img}
                // src="/src/assets/images/products/1.png"
                  className="h-80 rounded-xl p-12 mx-auto w-full bg-slate-200 "
                  alt="Service"
                />
              </figure>
              <div className="flex justify-center">
                <div>
                <div className="flex justify-center mt-5 my-3 gap-2 ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                </div>
                  <h2 className="text-3xl flex justify-center font-bold my-1">{products.title}</h2>
                  <h2 className="text-2xl flex justify-center text-[#FF3811] font-semibold">
                    <span>Price: $</span>
                    {products.price}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mb-10">
        <button className="mt-4 p-3 rounded-md font-semibold  bg-transparent border-2 border-[#ff3811] text-[#ff3811] hover:bg-[#ff3811] hover:text-white hover:border-[#ff3811]">
          More Products
        </button>
      </div>
    </>
  );
};

export default PopularProducts;
