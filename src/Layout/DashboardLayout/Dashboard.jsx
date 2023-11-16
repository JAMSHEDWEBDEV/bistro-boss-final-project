import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-300">
                <ul className="menu p-4">
                    <li>
                        <NavLink to="/dashboard/userHome">
                        <FaHome></FaHome>
                        User Home</NavLink>
                    </li>
                    <li className="my-5">
                        <NavLink to="/dashboard/reservation">
                        <FaCalendar></FaCalendar>
                        Reservation</NavLink>
                    </li>
                    <li className="my-2">
                        <NavLink to="/dashboard/review">
                        <FaAd></FaAd>
                        Add Review</NavLink>
                    </li>
                    <li className="my-2">
                        <NavLink to="/dashboard/booking">
                        <FaList></FaList>
                        My booking</NavLink>
                    </li>
                    <li className="my-2">
                        <NavLink to="/dashboard/cart">
                        <FaShoppingCart></FaShoppingCart>
                        My Cart ({cart.length})</NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                        <FaHome></FaHome>
                         Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/Salads">
                        <FaSearch></FaSearch>
                         menu</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;