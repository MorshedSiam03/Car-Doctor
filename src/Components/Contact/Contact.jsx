const Contact = () => {
    return (
        <div id="Contact" className="w-full my-20 md:py-12 lg:py-20 bg-black lg:h-60 rounded-lg grid grid-cols-3 gap-4 md:gap-0 p-6 md:p-2 lg:p-24">
            <div className="md:flex justify-center">
                <div className="">
                    <img src="/src/assets/icons/Group 32.svg" className="py-2 flex " alt="" />
                </div>
                <div className="text-white md:pl-2">
                    <p className=" md:text-sm mt-1">We are open monday-friday</p>
                    <h1 className=" text-lg lg:text-2xl font-bold">7:00 am - 9:00 pm</h1>
                </div>
            </div>
            <div className="md:flex justify-center">
                <div className="">
                    <img src="/src/assets/icons/Group 34.svg" className="py-2" alt="" />
                </div>
                <div className="text-white  md:pl-2">
                    <p>Have a question?</p>
                    <h1 className="text-lg lg:text-2xl font-bold">+2546 251 2658</h1>
                </div>
            </div>
            <div className="md:flex justify-center">
                <div className="">
                    <img src="/src/assets/icons/Group 35.svg" className="py-2" alt="" />
                </div>
                <div className="text-white  md:pl-2">
                    <p>Need a repair? our address</p>
                    <h1 className="text-lg lg:text-2xl font-bold">Liza Street, New York</h1>
                </div>
            </div>

            
            
        </div>
    );
};

export default Contact;