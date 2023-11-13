import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Home/Navbar";
import Footer from "../Pages/Footer/Footer";

const MainLayout = () => {

    

    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;