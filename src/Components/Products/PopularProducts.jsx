import { useEffect, useState } from "react";

const PopularProducts = () => {
  const [products, setProducts] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    fetch("https://car-doctor-server-eosin-sigma.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const displayedProducts = showMore ? products : products.slice(0, 6);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-full">
        <p className="font-bold text-2xl text-[#FF3811]">Popular Products</p>
        <h1 className="text-4xl md:text-5xl lg:w-2/3 md:w-4/5 font-bold text-center">
          Browse Our Products
        </h1>
        <p className="p-4 text-center text-gray-500">
          The majority have suffered alteration in some form, by injected humour, 
          or randomised words which do not look even slightly believable.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        {displayedProducts.map((product) => (
          <div key={product.id}>
            <div className="rounded-xl bg-base-100 p-8 dark:bg-[#151515] shadow-xl">
              <figure>
                <img
                  src={product.img}
                  className="h-80 rounded-xl p-12 mx-auto w-full bg-slate-200"
                  alt="Product"
                />
              </figure>
              <div className="flex justify-center">
                <div>
                  <div className="flex justify-center mt-2">
                    <p className="text-yellow-500 text-3xl">
                      {"★".repeat(product.rating)}
                      {"☆".repeat(5 - product.rating)}
                    </p>
                  </div>
                  <h2 className="text-3xl flex justify-center font-bold my-1">
                    {product.title}
                  </h2>
                  <h2 className="text-2xl flex justify-center text-[#FF3811] font-semibold">
                    <span>Price: $</span>
                    {product.price}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center my-10">
        <button
          onClick={() => setShowMore(!showMore)}
          className="mt-4 p-3 rounded-md font-semibold dark:text-[#ff3811] bg-transparent dark:bg-transparent border-2 border-[#ff3811] text-[#ff3811] hover:bg-[#ff3811] hover:text-white hover:border-[#ff3811] dark:hover:bg-[#ff3811] dark:hover:text-white dark:hover:border-[#ff3811]"
        >
          {showMore ? "Show Less" : "More Products"}
        </button>
      </div>
    </>
  );
};

export default PopularProducts;
