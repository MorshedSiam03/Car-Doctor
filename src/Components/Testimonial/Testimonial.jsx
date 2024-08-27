import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <div className="flex flex-col mt-40 items-center justify-center h-full">
        <p className="font-bold text-xl text-[#FF3811]">Testimonial</p>
        <h1 className="text-4xl lg:w-2/3 md:w-4/5 font-bold text-center">
          What Customer Says
        </h1>
        <p className="p-4 text-center text-gray-500">
          The majority have suffered alteration in some form, by injected humour,
          or randomised words which do not look even slightly believable.
        </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="mb-20"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide  key={review.id}>
            <div className="bg-white p-10 lg:h-72 mb-10 rounded-lg shadow-lg">
              <div className="flex items-center">
                <img
                  src={review.image}
                  className="rounded-full size-20"
                  alt={review.name}
                />
                <div className="ml-4">
                  <h3 className="text-2xl font-bold">{review.name}</h3>
                  <p className="text-yellow-500 text-3xl mb-4">
                    {"★".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </p>
                </div>
                <img
                  src="/src/assets/icons/quote.svg"
                  className="size-12 ml-auto opacity-40"
                  alt="Quote"
                />
              </div>
              <p className="text-gray-700 mt-2 p-2">{review.reviewText}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
