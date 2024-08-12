
const AddService = () => {
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
              <form className="">
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="Service Name"
                      className="input"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="Service Price"
                      className="input"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="Service Type"
                      className="input"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="Product Type"
                      className="input"
                      required
                    />
                  </div>
                  <div className="form-control col-span-2">
                    <textarea
                      placeholder="Service Description"
                      className="textarea textarea-lg h-52 w-full"
                    ></textarea>
                  </div>
                </div>
                <div className="form-control mt-3">
                  <button className="btn bg-[#FF3811] text-white">Submit</button>
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