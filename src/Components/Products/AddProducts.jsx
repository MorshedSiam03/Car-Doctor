import Swal from "sweetalert2";

const AddProducts = () => {

    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const price = form.price.value;
        const type = form.type.value;
        const img = form.img.value;
        const description = form.description.value;
        const product = {
          title, 
          price, 
          type, 
          img, 
          description, 
          };
        console.log(product);
    
        fetch('https://car-doctor-server-eosin-sigma.vercel.app//products', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(product),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                position: "center",
                icon: "success",
                title: "Your Product is Added",
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
            Add New Products
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
              <h1 className="text-xl">Home/Products</h1>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="p-24 my-20 bg-base-200 rounded-lg">
          <div className="">
            <div className="w-full">
              <form onSubmit={handleAddProduct} className="">
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="form-control">
                    <input
                      type="text"
                      name="title"
                      placeholder="Product Name"
                      className="input"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="number"
                      name="price"
                      placeholder="Product Price"
                      className="input"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      name="type"
                      placeholder="Product Type"
                      className="input"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      name="img"
                      placeholder="Product Image Link"
                      className="input"
                      required
                    />
                  </div>
                  <div className="form-control col-span-2">
                    <textarea
                      placeholder="Product Description"
                      name="description"
                      className="textarea textarea-lg h-52 w-full"
                    ></textarea>
                  </div>
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

export default AddProducts;