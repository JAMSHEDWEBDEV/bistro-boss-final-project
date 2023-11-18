import { FaBook, FaEnvelope, FaHome, FaList, FaSearch, FaUser, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
// import useCart from "../../hooks/useCart";

const Dashboard = () => {
    // const [cart] = useCart();

    // const [isAdmin] = useAdmin();
    const isAdmin = true;

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-300">
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminHome">
                                    <FaHome></FaHome>
                                    Admin Home</NavLink>
                            </li>
                            <li className="my-5">
                                <NavLink to="/dashboard/addItems">
                                    <FaUtensils></FaUtensils>
                                    Add Items</NavLink>
                            </li>
                            <li className="my-2">
                                <NavLink to="/dashboard/manageItems">
                                    <FaList></FaList>
                                    Manage Items</NavLink>
                            </li>
                            <li className="my-2">
                                <NavLink to="/dashboard/manageBooking">
                                    <FaBook></FaBook>
                                    Manage Bookings</NavLink>
                            </li>
                            <li className="my-2">
                                <NavLink to="/dashboard/users">
                                    <FaUser></FaUser>
                                    All Users</NavLink>
                            </li>
                        </>
                            :
                            <>
                                {/* share navlinks  */}
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
                                <li>
                                    <NavLink to="/order/contact">
                                        <FaEnvelope></FaEnvelope>
                                        Contact</NavLink>
                                </li>
                            </>
                    }
                    {/* share navlinks  */}
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
                            <li>
                                <NavLink to="/order/contact">
                                    <FaEnvelope></FaEnvelope>
                                    Contact</NavLink>
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