import { Link, useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const service = useLoaderData();
  return (
    <div className="container mx-auto">
      <div className="relative mb-5">
        <div className="absolute rounded-xl h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <h2 className="text-white font-bold text-4xl md:text-5xl lg:text-7xl my-12 md:my-20 lg:my-32 mx-5 md:mx-10">
            Service Details
          </h2>
        </div>
        <img
          src="/src/assets/images/checkout/checkout.png"
          alt="Checkout"
          className="w-full h-40 md:h-full"
        />
        <div className="absolute bottom-0 mx-12 md:mx-[260px] lg:mx-[470px]">
          <div className="w-80 h-0 border-b-[50px] border-[#FF3811] border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent">
            <div className="absolute inset-x-0 bottom-0 text-center text-white transform mb-3">
              <h1 className="text-xl">Home/Service Details</h1>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------------------------- */}

      <div className="grid md:grid-cols-3 gap-3 lg:gap-5">
        <div className="md:col-span-2">
          <figure>
            <img
              src={service.img}
              className="w-full rounded-xl"
              alt="Service"
            />
          </figure>
          <h1 className="text-5xl font-bold my-8">{service.title}</h1>
          <p className="text-lg text-justify">{service.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            {service.facility.map((facility, index) => (
              <div
                key={index}
                className="bg-slate-100 border-t-4 border-[#FF3811] rounded-xl p-5"
              >
                <h2 className="text-3xl my-2 font-bold">{facility.name}</h2>
                <p className="text-lg text-gray-500 my-2">{facility.details}</p>
              </div>
            ))}
          </div>
          <p className="text-lg text-justify">{service.description}</p>
          <h1 className="text-5xl font-bold my-8">3 Simple Steps to Process</h1>
          <p className="text-lg text-justify">{service.description}</p>

          <div className="grid md:grid-cols-3 gap-2 lg:gap-3 my-5">
            <div className="p-4 lg:p-10 border-2 flex flex-col items-center justify-center rounded-xl">
              <div className="rounded-full text-white w-24 h-24 flex justify-center items-center bg-[#ffd9d1cf] ">
                <div className="rounded-full text-white font-bold w-16 h-16 flex justify-center items-center bg-[#FF3811]">
                  01
                </div>
              </div>
              <div className="text-center">
                <h1 className="font-bold text-2xl my-5">STEP ONE</h1>
                <p className="text-lg text-gray-500 my-2">
                  It uses a dictionary of over 200.
                </p>
              </div>
            </div>
            <div className="p-4 lg:p-10 border-2 flex flex-col items-center justify-center rounded-xl">
              <div className="rounded-full text-white w-24 h-24 flex justify-center items-center bg-[#ffd9d1cf] ">
                <div className="rounded-full text-white font-bold w-16 h-16 flex justify-center items-center bg-[#FF3811]">
                  02
                </div>
              </div>
              <div className="text-center">
                <h1 className="font-bold text-2xl my-5">STEP TWO</h1>
                <p className="text-lg text-gray-500 my-2">
                  It uses a dictionary of over 200.
                </p>
              </div>
            </div>
            <div className="p-4 lg:p-10 border-2 flex flex-col items-center justify-center rounded-xl">
              <div className="rounded-full text-white w-24 h-24 flex justify-center items-center bg-[#ffd9d1cf] ">
                <div className="rounded-full text-white font-bold w-16 h-16 flex justify-center items-center bg-[#FF3811]">
                  03
                </div>
              </div>
              <div className="text-center">
                <h1 className="font-bold text-2xl my-5">STEP THREE</h1>
                <p className="text-lg text-gray-500 my-2">
                  It uses a dictionary of over 200.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="relative my-2">
            <img
              src="/src/assets/images/banner/2.jpg"
              className="w-full rounded-lg h-[50vh]"
              alt="Banner"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/src/assets/icons/PlayBtn.svg"
                className="w-32 h-32"
                alt="Play Button"
              />
            </div>
          </div> */}

          <iframe
            className="w-full h-[35vh] lg:h-[70vh] my-5 rounded-xl"
            src="https://www.youtube.com/embed/ZgLJdKn31BE?si=SZ805_cCbiMReOir"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        {/* Left Bar */}
        <div>
          <div className="flex flex-col rounded-xl p-10 md:p-2 lg:p-10 bg-[#F3F3F3]">
            <h1 className="font-bold text-3xl">Services</h1>
            <button className="btn flex justify-between font-semibold text-xl md:text-lg lg:text-xl bg-white my-3 hover:bg-[#ff3811] hover:text-white">
              Full Car Repair <img src="/src/assets/OrangeAro.svg" alt="" />{" "}
            </button>
            <button className="btn flex justify-between font-semibold text-xl md:text-lg lg:text-xl bg-white my-2 hover:bg-[#ff3811] hover:text-white">
              Engine Repair <img src="/src/assets/OrangeAro.svg" alt="" />{" "}
            </button>
            <button className="btn flex justify-between font-semibold text-xl md:text-lg lg:text-xl bg-white my-2 hover:bg-[#ff3811] hover:text-white">
              Automatic Service <img src="/src/assets/OrangeAro.svg" alt="" />{" "}
            </button>
            <button className="btn flex justify-between font-semibold text-xl md:text-lg lg:text-xl bg-white my-2 hover:bg-[#ff3811] hover:text-white">
              Engine Oil Change <img src="/src/assets/OrangeAro.svg" alt="" />{" "}
            </button>
            <button className="btn flex justify-between font-semibold text-xl md:text-lg lg:text-xl bg-white my-2 hover:bg-[#ff3811] hover:text-white">
              Battery Change <img src="/src/assets/OrangeAro.svg" alt="" />{" "}
            </button>
          </div>

          <div className="bg-black p-10 md:p-4 lg:p-10 my-5 rounded-xl ">
            <h1 className="text-white text-3xl font-bold">Download</h1>
            <div className="flex justify-between my-5">
              <div className="flex gap-3">
                <img src="/src/assets/icons/Doc.svg" alt="" />
                <div className="text-white">
                  <h1 className="text-lg font-semibold">Our Brochure</h1>
                  <p className="text-gray-400 hover:underline">Download</p>
                </div>
              </div>
              <button className="btn bg-[#ff3811] border-0">
                <img src="/src/assets/icons/Vector 2.png" alt="" />
              </button>
            </div>
            <div className="flex justify-between mt-4">
              <div className="flex gap-3">
                <img src="/src/assets/icons/Doc.svg" alt="" />
                <div className="text-white">
                  <h1 className="text-lg font-semibold">Company Details</h1>
                  <p className="text-gray-400 hover:underline">Download</p>
                </div>
              </div>
              <button className="btn bg-[#ff3811] border-0">
                <img src="/src/assets/icons/Vector 2.png" alt="" />
              </button>
            </div>
          </div>

          <div className=" bg-black p-12 md:py-10 md:px-4 lg:p-12 pb-20 flex flex-col items-center justify-center  rounded-xl">
            <img src="/src/assets/LogoFooter.svg" className="w-40" alt="" />
            <h1 className=" text-white text-2xl font-semibold text-center my-5">
              Need Help? We Are Here To Help You
            </h1>
            <div className="w-full p-5 bg-white text-center rounded-xl relative">
              <h1 className="font-bold text-2xl">
                <span className="text-[#FF3811]">Car Doctor</span> Special
              </h1>
              <p className="font-semibold text-lg text-gray-400">
                Save up to <span className="text-[#FF3811]">60% off</span>
              </p>
              <button className="btn absolute left-24 md:left-12 lg:left-24 border-0  bg-[#ff3811] text-lg lg:text-lg   text-white font-semibold">
                Get A Quote
              </button>
            </div>
          </div>

          <h1 className="font-bold text-3xl my-6">Price ${service.price}</h1>

          <Link to={`/Checkout/${service._id}`}>
            <button className="btn mb-10 bg-[#ff3811] text-white text-lg hover:border-[#ff3811] hover:border-2 hover:bg-white hover:text-[#ff3811] w-full">
              Process Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
