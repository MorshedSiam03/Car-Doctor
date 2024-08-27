import { useState } from 'react';
import Swal from 'sweetalert2';

const AddService = () => {
  const [facilities, setFacilities] = useState([{ name: '', details: '' }]);

  // Handle input changes for the facilities
  const handleFacilityChange = (index, e) => {
    const { name, value } = e.target;
    const newFacilities = [...facilities];
    newFacilities[index][name] = value;
    setFacilities(newFacilities);
  };

  // Add a new facility input field
  const handleAddFacility = () => {
    setFacilities([...facilities, { name: '', details: '' }]);
  };

  // Remove a facility input field
  const handleRemoveFacility = (index) => {
    const newFacilities = facilities.filter((_, i) => i !== index);
    setFacilities(newFacilities);
  };

  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    const type = form.type.value;
    const img = form.img.value;
    const description = form.description.value;
    const service = {
      title, 
      price, 
      type, 
      img, 
      description, 
      facility: facilities };
    console.log(service);

    fetch('https://car-doctor-server-eosin-sigma.vercel.app//services', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
          Swal.fire({
          position: "center",
          icon: "success",
          title: "Your Service is Added",
          showConfirmButton: false,
          timer: 1500
        });
        form.reset();
      }
      else {
          Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
              footer: '<a href="#">Why do I have this issue?</a>'
            });
      }
      });
  };

  return (
    <div>
      <div className="relative mb-5">
        <div className=" absolute rounded-xl h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <h2 className="text-white font-bold md:text-4xl lg:text-6xl md:my-24 lg:my-32 mx-10">
            Add New Service
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
              <h1 className="text-xl">Home/Service</h1>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="p-24 my-20 bg-base-200 rounded-lg">
          <div className="">
            <div className="w-full">
              <form onSubmit={handleAddService} className="">
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="form-control">
                    <input
                      type="text"
                      name="title"
                      placeholder="Service Name"
                      className="input"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="number"
                      name="price"
                      placeholder="Service Price"
                      className="input"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      name="type"
                      placeholder="Service Type"
                      className="input"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      name="img"
                      placeholder="Service Image Link"
                      className="input"
                      required
                    />
                  </div>
                  <div className="form-control col-span-2">
                    <textarea
                      placeholder="Service Description"
                      name="description"
                      className="textarea textarea-lg h-52 w-full"
                    ></textarea>
                  </div>
                </div>

                <h3 className="mt-5 mb-2 text-lg font-semibold">Facilities</h3>
                {facilities.map((facility, index) => (
                  <div key={index} className="grid md:grid-cols-2 gap-3 mb-3">
                    <div className="form-control">
                      <input
                        type="text"
                        name="name"
                        placeholder="Facility Name"
                        className="input"
                        value={facility.name}
                        onChange={(e) => handleFacilityChange(index, e)}
                        required
                      />
                    </div>
                    <div className="form-control">
                      <input
                        type="text"
                        name="details"
                        placeholder="Facility Details"
                        className="input"
                        value={facility.details}
                        onChange={(e) => handleFacilityChange(index, e)}
                        required
                      />
                    </div>
                    <div className="form-control col-span-2 px-60">
                      <button
                        type="button"
                        className="btn bg-red-600 text-white mt-2"
                        onClick={() => handleRemoveFacility(index)}
                      >
                        Remove Facility
                      </button>
                    </div>
                  </div>
                ))}
                <div className="form-control mt-3 px-60">
                  <button
                    type="button"
                    className="btn bg-green-600 text-white"
                    onClick={handleAddFacility}
                  >
                    Add Another Facility
                  </button>
                </div>

                <div className="form-control mt-5">
                  <button className="btn bg-[#FF3811] text-white">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
