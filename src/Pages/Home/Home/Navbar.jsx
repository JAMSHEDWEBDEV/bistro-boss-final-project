import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../hooks/useCart";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();

    const Navlinks = <>
        <NavLink to="/"><li><a>Home</a></li></NavLink>
        <NavLink><li><a>Contact Us</a></li></NavLink>
        <NavLink><li><a>Dashboard</a></li></NavLink>
        <NavLink to="/menu"><li><a>Our Menu</a></li></NavLink>
        <NavLink to="/order/Salads"><li><a>Our Shop</a></li></NavLink>
        <NavLink to="/dashboard/cart">
            <button className="btn">
                <FaShoppingCart className="text-2xl" />
                <div className="badge badge-secondary">+{cart.length}</div>
            </button>
        </NavLink>
    </>

    const handleLogOut = () => {
        logOut()
            .then(result => console.log(result.user))
            .catch(error => console.error(error))
    }

    return (
        <>
            <div className="navbar text-white max-w-6xl bg-black fixed z-10 px-12 py-4 opacity-30 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-box">
                            {Navlinks}
                        </ul>
                    </div>
                    <a className="font-bold"><span className="uppercase">Bistro Boss</span>
                        <p className="text-xs">RESTAURANT</p>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <p className="mr-2">{user.displayName}</p>
                            <div className="h-[100px] w-[100px]"><img src={user.photoURL} alt="profile" /></div>
                            <button onClick={handleLogOut}>Logout</button>
                        </> :
                            <>
                                <Link to="/login"><button className="btn btn-ghost">Login</button></Link>
                            </>
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;