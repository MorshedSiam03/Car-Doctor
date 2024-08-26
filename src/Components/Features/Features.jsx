const Features = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-full">
        <p className="font-bold text-xl text-[#FF3811]">Core Features</p>
        <h1 className="text-4xl lg:w-2/3 md:w-4/5 font-bold text-center">
          Why Choose Us
        </h1>
        <p className="pt-4 pb-4 text-center text-gray-500">
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-6 gap-2 mx-20 mb-10">
      <div className="p-4 rounded-lg border-2  size-36 flex flex-col items-center ">
          <img
            src="/src/assets/icons/group.svg"
            className="size-20"
            alt="Expert Team Icon"
          />
          <h1 className="font-bold">Expert Team</h1>
        </div>
        <div className="p-2 py-4 rounded-lg  bg-[#FF3811] text-white size-36 flex flex-col items-center ">
          <img
            src="/src/assets/icons/Group 38729.svg"
            className="size-20"
            alt="Expert Team Icon"
          />
          <h1 className="font-semibold mt-2">Timely Delivery</h1>
        </div>
        <div className="p-4 rounded-lg border-2  size-36 flex flex-col items-center ">
          <img
            src="/src/assets/icons/person.svg"
            className="size-20"
            alt="Expert Team Icon"
          />
          <h1 className="font-bold mt-2">24/7 Support</h1>
        </div>
        <div className="p-2 py-4 rounded-lg border-2  size-36 flex flex-col items-center ">
          <img
            src="/src/assets/icons/Wrench.svg"
            className="size-20"
            alt="Expert Team Icon"
          />
          <h1 className="font-bold mt-2">Best Equipment</h1>
        </div>
        <div className="p-2 py-4 rounded-lg border-2  size-36 flex flex-col items-center ">
          <img
            src="/src/assets/icons/check.svg"
            className="size-20"
            alt="Expert Team Icon"
          />
          <h1 className="font-bold mt-2">100% Guaranty</h1>
        </div>
        <div className="p-2 py-4 rounded-lg border-2  size-36 flex flex-col items-center ">
          <img
            src="/src/assets/icons/deliveryt.svg"
            className="size-20"
            alt="Expert Team Icon"
          />
          <h1 className="font-bold mt-2">Timely Delivery</h1>
        </div>
      </div>
    </div>
  );
};

export default Features;
