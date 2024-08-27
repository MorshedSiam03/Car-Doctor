import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Team = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("https://car-doctor-server-eosin-sigma.vercel.app//teams")
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, []);

  return (
    <div>
      <div className="flex flex-col mt-40 items-center justify-center h-full">
        <p className="font-bold text-3xl text-[#FF3811]">Team</p>
        <h1 className="text-4xl md:text-5xl lg:w-2/3 md:w-4/5 font-bold text-center">
          Meet Our Team
        </h1>
        <p className="p-4 text-center text-gray-500">
          The majority have suffered alteration in some form, by injected
          humour, or randomised  words which do not look even slightly
          believable.
        </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        // centeredSlides={true}
        pagination={{
          
        }}
        navigation={true}
        // initialSlide={1} // Start from slide 2
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {teams.map((team) => (
          <SwiperSlide key={team.id}>
            <div className="rounded-xl mb-10 bg-base-100 p-8 shadow-xl">
              <figure>
                <img
                  src={team.img}
                  className="rounded-lg mx-auto w-full"
                  alt="Team Member"
                />
              </figure>
              <div className="flex justify-center">
                <div>
                  <h2 className="text-3xl flex justify-center font-bold mt-3 my-1">
                    {team.name}
                  </h2>
                  <h2 className="text-xl flex justify-center text-gray-500 font-semibold">
                    {team.expertise}
                  </h2>
                </div>
              </div>
              <div className="flex justify-center gap-3 mt-2">
                <img src="https://raw.githubusercontent.com/MorshedSiam03/Car-Doctor/2c0f959bf870fb627c5ec1b9fad6e6888e227b6c/src/assets/icons/Group%204889.svg" alt="" />
                <img src="https://raw.githubusercontent.com/MorshedSiam03/Car-Doctor/2c0f959bf870fb627c5ec1b9fad6e6888e227b6c/src/assets/icons/Group%204892.svg" alt="" />
                <img src="https://raw.githubusercontent.com/MorshedSiam03/Car-Doctor/2c0f959bf870fb627c5ec1b9fad6e6888e227b6c/src/assets/icons/Group%204891.svg" alt="" />
                <img src="https://raw.githubusercontent.com/MorshedSiam03/Car-Doctor/2c0f959bf870fb627c5ec1b9fad6e6888e227b6c/src/assets/icons/Group%204893.svg" alt="" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Team;
