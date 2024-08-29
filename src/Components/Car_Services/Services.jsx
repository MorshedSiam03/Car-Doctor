import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);
  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    fetch("https://car-doctor-server-eosin-sigma.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const displayedServices = showMore ? services : services.slice(0, 6);

  return (
    <>
      <div className="text-center">
        <p className="font-bold text-2xl text-[#FF3811]">Service</p>
        <h1 className="font-bold text-4xl md:text-5xl">Our Service Area</h1>
        <p className="p-4">
          The majority have suffered alteration in some form, by injected
          humour, or words which look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        {displayedServices.map((service) => (
          <div key={service.id}>
            <div className="rounded-xl bg-base-100  dark:bg-[#151515] p-7 shadow-xl">
              <figure>
                <img
                  src={service.img}
                  className=" h-60 rounded-xl"
                  alt="Service"
                />
              </figure>
              <div className="flex justify-between items-end">
                <div>
                  <h2 className="text-3xl font-bold my-3">{service.title}</h2>
                  <h2 className="text-2xl text-[#FF3811] font-semibold">
                    <span>Price: $</span>
                    {service.price}
                  </h2>
                </div>
                <div>
                  <Link to={`/Services/${service._id}`}>
                    <img
                      src="https://raw.githubusercontent.com/MorshedSiam03/Car-Doctor/2c0f959bf870fb627c5ec1b9fad6e6888e227b6c/src/assets/OrangeAro.svg"
                      className="w-8"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-10">
        <button
          onClick={() => setShowMore(!showMore)}
          className=" p-3 rounded-md font-semibold bg-transparent dark:bg-transparent dark:text-[#ff3811] border-2 border-[#ff3811] text-[#ff3811] dark:hover:bg-[#ff3811] dark:hover:text-white dark:hover:border-[#ff3811] hover:bg-[#ff3811] hover:text-white hover:border-[#ff3811]"
        >
          {showMore ? "Show Less" : "More Services"}
        </button>
      </div>
    </>
  );
};

export default Services;
