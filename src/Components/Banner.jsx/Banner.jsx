const Banner = () => {
  return (
    <>
      <div className="carousel mx-1 h-[60vh] lg:h-[80vh] font-Inter rounded-lg">
        <div id="slide5" className="carousel-item relative w-full  ">
          <img
            src="https://raw.githubusercontent.com/MorshedSiam03/Car-Doctor/main/src/assets/images/banner/5.jpg"
            className="w-full h-[60vh] lg:h-[80vh]"
          />
          <div className="absolute  h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white">
            <h1 className="text-4xl md:text-7xl w-3/4 md:w-3/4 lg:w-1/2 pl-12 md:pl-24 pt-20 md:pt-28 font-semibold">Affordable Price For Car Servicing</h1>
            <p className="text-sm md:text-lg lg:text-xl w-3/4 md:w-2/3 lg:w-1/2 pl-12 md:pl-24 pt-3 md:pt-7">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="pl-12 md:pl-24 pt-3 md:pt-7">
            <button className="px-2 py-2 md:px-4 md:py-3 rounded-md border-2 text-white dark:text-[#ff3811] hover:font-semibold dark:hover:bg-[#ff3811] dark:hover:text-white dark:bg-transparent border-[#FF3811] bg-[#FF3811]">Discover More</button>
            <button className="px-2 py-2 md:px-4 md:py-3 text-white rounded-md dark:bg-transparent border-2 hover:font-semibold bg-transparent mx-5">Latest Project</button>
            </div>
          </div>
          </div>
          <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0 ">
            <a href="#slide4" className="btn btn-circle hover:border-0 text-white bg-transparent hover:bg-[#FF3811] hover:outline-0  mx-2">
              <img src="https://raw.githubusercontent.com/MorshedSiam03/Car-Doctor/main/src/assets/icons/Vector.png" alt="" />
            </a>
            <a href="#slide1" className="btn btn-circle hover:border-0 text-white bg-transparent hover:bg-[#FF3811]">
            <img src="https://raw.githubusercontent.com/MorshedSiam03/Car-Doctor/main/src/assets/icons/Vector%202.png
              " alt="" />
            </a>
          </div>
        </div>
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://raw.githubusercontent.com/MorshedSiam03/Car-Doctor/main/src/assets/images/banner/1.jpg"
            className="w-full h-[60vh] lg:h-[80vh]"
          />
          <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0 ">
            <a href="#slide5" className="btn btn-circle hover:border-0 text-white bg-transparent hover:bg-[#FF3811] hover:outline-0  mx-2">
              <img src="https://raw.githubusercontent.com/MorshedSiam03/Car-Doctor/main/src/assets/icons/Vector.png
              " alt="" />
            </a>
            <a href="#slide2" className="btn btn-circle hover:border-0 text-white bg-transparent hover:bg-[#FF3811]">
            <img src="https://raw.githubusercontent.com/MorshedSiam03/Car-Doctor/main/src/assets/icons/Vector%202.png
              " alt="" />
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://raw.githubusercontent.com/MorshedSiam03/Car-Doctor/main/src/assets/images/banner/2.jpg"
            className="w-full h-[60vh] lg:h-[80vh]"
          />
          <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0 ">
            <a href="#slide1" className="btn btn-circle mx-2 hover:border-0 text-white bg-transparent hover:bg-[#FF3811]">
            <img src="https://raw.githubusercontent.com/MorshedSiam03/Car-Doctor/main/src/assets/icons/Vector.png
              " alt="" />
            </a>
            <a href="#slide3" className="btn btn-circle hover:border-0 text-white bg-transparent hover:bg-[#FF3811]">
            <img src="https://raw.githubusercontent.com/MorshedSiam03/Car-Doctor/main/src/assets/icons/Vector%202.png
              " alt="" />
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://raw.githubusercontent.com/MorshedSiam03/Car-Doctor/main/src/assets/images/banner/3.jpg"
            className="w-full h-[60vh] lg:h-[80vh]"
          />
          <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0 ">
            <a href="#slide2" className="btn btn-circle mx-2 hover:border-0 text-white bg-transparent hover:bg-[#FF3811]">
            <img src="https://raw.githubusercontent.com/MorshedSiam03/Car-Doctor/main/src/assets/icons/Vector.png
              " alt="" />
            </a>
            <a href="#slide4" className="btn btn-circle hover:border-0  text-white bg-transparent hover:bg-[#FF3811]">
            <img src="https://raw.githubusercontent.com/MorshedSiam03/Car-Doctor/main/src/assets/icons/Vector%202.png
              " alt="" />
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://raw.githubusercontent.com/MorshedSiam03/Car-Doctor/main/src/assets/images/banner/4.jpg"
            className="w-full h-[60vh] lg:h-[80vh]"
          />
          <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0 ">
            <a href="#slide3" className="btn btn-circle mx-2 hover:border-0 text-white bg-transparent hover:bg-[#FF3811]">
            <img src="https://raw.githubusercontent.com/MorshedSiam03/Car-Doctor/main/src/assets/icons/Vector.png
              " alt="" />
            </a>
            <a href="#slide5" className="btn btn-circle hover:border-0 text-white bg-transparent hover:bg-[#FF3811]">
            <img src="https://raw.githubusercontent.com/MorshedSiam03/Car-Doctor/main/src/assets/icons/Vector%202.png
              " alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
