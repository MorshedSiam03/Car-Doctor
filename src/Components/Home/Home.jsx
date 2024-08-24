import About from "../About/About";
import Banner from "../Banner.jsx/Banner";
import Services from "../Car_Services/Services";
import Contact from "../Contact/Contact";
import Features from "../Features/Features";
import PopularProducts from "../Products/PopularProducts";
import Team from "../Team/Team";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Contact></Contact>
            <PopularProducts></PopularProducts>
            <Team></Team>
            <Features></Features>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;