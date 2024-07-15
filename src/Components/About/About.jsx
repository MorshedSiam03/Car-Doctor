import 'animate.css';

const About = () => {
    return (
      <>
        <div className="hero mb-40 mt-12 font-Inter">
          <div className="hero-content flex-col gap-36 md:gap-y-48 lg:gap-0 lg:flex-row">
            <div className="lg:w-1/2 relative">
              <div className="relative left-[-30px] md:left-[-60px] lg:left-20 w-[43vh] h-[50vh] md:w-[50vh] md:h-[55vh]">
                <img
                  src="https://raw.githubusercontent.com/MorshedSiam03/Car-Doctor/main/src/assets/images/about_us/person.jpg"
                  className="w-ful h-full object-cover rounded-lg"
                  alt="Person"
                />
              </div>
              <div className="absolute w-[35vh] h-[40vh] md:w-[40vh] md:h-[40vh] right-[-30px] md:right-[-60px] lg:right-20 border-8 border-white transform -translate-y-2/3 overflow-hidden rounded-lg shadow-2xl">
                <img
                  src="https://raw.githubusercontent.com/MorshedSiam03/Car-Doctor/main/src/assets/images/about_us/parts.jpg"
                  className="w-full h-full object-cover "
                  alt="Parts"
                />
              </div>
            </div>
            <div className="md:w-2/3 lg:w-1/2 animate__animated animate__fadeInRight">
              <p className="font-bold text-2xl text-[#FF3811]">About Us</p>
              <h1 className="text-5xl lg:w-2/3 md:w-4/5 font-bold">We are qualified & of experience in this field</h1>
              <p className="pt-6 pb-3">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. 
              </p>
              <p className="pb-6">
              the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. 
              </p>
              <button className="p-4 rounded-md text-white bg-[#FF3811]">Get More Info</button>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default About;
  