import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const AddReview = () => {
    const {user} = useContext(AuthContext);
  
    const handleAddReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = user?.displayName;
    const email = user?.email;
    const image = user?.photoURL;
    const rating = form.rating.value;
    const reviewText = form.reviewText.value;

    const review = {name, email, image, rating, reviewText };
    console.log(review);

    fetch('https://car-doctor-server-eosin-sigma.vercel.app/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your review has been submitted",
            showConfirmButton: false,
            timer: 1500
          });
          form.reset();
        }
      });
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Add Your Review</h2>
      <div className="mx-auto bg-gray-100 dark:bg-[#151515] p-6 rounded-lg shadow-lg">
      <div className="mb-4 flex items-center gap-2">
            <div>
                <img className="rounded-full" src={user?.photoURL} alt="" />
            </div>
            <div>
            <h1 className="block dark:text-white text-gray-700 text-2xl font-bold" htmlFor="name">
            {user?.displayName}
            </h1>
            <p>{user?.email}</p>
            </div>
          </div>
        <form onSubmit={handleAddReview}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="rating">
              Rating
            </label>
            <input
              type="number"
              name="rating"
              placeholder="Rating (1-5)"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none dark:bg-gray-300 focus:border-blue-500"
              min="1"
              max="5"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="reviewText">
              Review
            </label>
            <textarea
              name="reviewText"
              placeholder="Write your review here..."
              className="w-full px-3 h-40 py-2 border rounded-lg focus:outline-none dark:bg-gray-300 focus:border-blue-500"
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#ff3811] w-full btn text-white rounded-lg hover:bg-green-700 focus:outline-none"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
