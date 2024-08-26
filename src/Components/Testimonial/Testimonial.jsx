import { useEffect, useState } from "react";

const Testimonial = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/reviews")
        .then((res) => res.json())
        .then((data) => setReviews(data));
    }, []);

    return (
        <div>
            <div className="flex flex-col items-center justify-center h-full">
            <p className="font-bold text-xl text-[#FF3811]">Testimonial</p>
            <h1 className="text-4xl lg:w-2/3 md:w-4/5 font-bold text-center">What Customer Says</h1>
            <p className="pt-4 pb-4 text-center text-gray-500">
            The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable.             </p>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-10">
            {reviews.map((reviews) => (
          <div key={reviews.id} className="bg-white p-6 rounded-lg shadow-lg mb-5" >
           <div className="flex items-center">
            <div>
                <img src={reviews.image} className="rounded-full size-20" alt="" />
            </div>
           <div>
           <h3 className="text-2xl  font-bold">{reviews.name}</h3>
            <p className="text-yellow-500 text-3xl mb-4">
              {'★'.repeat(reviews.rating)}
              {'☆'.repeat(5 - reviews.rating)}
            </p>
           </div>
           <div>
            <img src="/src/assets/icons/quote.svg" className="size-12 ml-60 opacity-40" alt="" />
           </div>
           </div>
            <p className="text-gray-700 mt-2 p-2">{reviews.reviewText}</p>
          </div>
        ))}
            </div>
        
        </div>
    );
};

export default Testimonial;