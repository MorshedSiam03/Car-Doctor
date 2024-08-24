const Contact = () => {
    return (
        <div className="w-full my-20 bg-black h-60 rounded-lg grid grid-cols-3 p-24">
            <div className="flex justify-center">
                <div className="">
                    <img src="/src/assets/icons/Group 32.svg" className="py-2" alt="" />
                </div>
                <div className="text-white pl-2">
                    <p>We are open monday-friday</p>
                    <h1 className="text-2xl font-bold">7:00 am - 9:00 pm</h1>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="">
                    <img src="/src/assets/icons/Group 34.svg" className="py-2" alt="" />
                </div>
                <div className="text-white pl-2">
                    <p>Have a question?</p>
                    <h1 className="text-2xl font-bold">+2546 251 2658</h1>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="">
                    <img src="/src/assets/icons/Group 35.svg" className="py-2" alt="" />
                </div>
                <div className="text-white pl-2">
                    <p>Need a repair? our address</p>
                    <h1 className="text-2xl font-bold">Liza Street, New York</h1>
                </div>
            </div>

            
            
        </div>
    );
};

export default Contact;