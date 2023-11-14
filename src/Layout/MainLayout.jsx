import { Outlet,useLocation } from "react-router-dom";
import Navbar from "../Pages/Home/Home/Navbar";
import Footer from "../Pages/Footer/Footer";

const MainLayout = () => {

    const location = useLocation();
    const isLogin = location.pathname.includes('login') || location.pathname.includes('register');

    return (
        <div className="max-w-6xl mx-auto">
            { isLogin || <Navbar></Navbar>}
            <Outlet></Outlet>
            { isLogin || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;