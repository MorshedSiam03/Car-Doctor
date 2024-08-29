import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const Main = () => {
    ScrollToTop();
    return (
        <>
        <div className="max-w-7xl mx-auto font-Inter">
            <NavBar></NavBar>
            <Outlet></Outlet>   
        </div>
        <Footer></Footer>
        </>
    );
};

export default Main;