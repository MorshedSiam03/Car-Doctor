import { useContext } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { AuthContext } from "../../Provider/AuthProvider";

const NavBar = () => {
  const { user, Logout } = useContext(AuthContext);

  const handleLogout = () => {
    Logout()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Products">Product</Link>
      </li>
      <li>
        <Link to="/Services">Service</Link>
      </li>
      {user?.email && (
        <li>
          <Link to="/MyOrders">My Orders</Link>
        </li>
      )}
      <li>
        {/* Smooth scroll to the About section */}
        <HashLink smooth to="#About">About</HashLink>
      </li>
      <li>
        {/* Smooth scroll to the Contact section */}
        <HashLink smooth to="#Contact">Contact</HashLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar my-3 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content my-1 bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <a className="">
            <img
              src="https://raw.githubusercontent.com/MorshedSiam03/Car-Doctor/57322f13fb6eed60c434ac2a6dec9aa5c55d33cd/src/assets/icons/logo.svg"
              className="w-16 cursor-auto lg:w-20"
              alt="Logo"
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1 px-1">{navItems}</ul>
        </div>
        <div className="navbar-end gap-2">
          {user?.email ? (
            <>
              <Link
                onClick={handleLogout}
                className="hover:underline text-gray-600"
              >
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link to="/Login" className="hover:underline text-gray-600">
                SignIn
              </Link>
              <h1 className="font-extralight">|</h1>
              <Link to="/SignUp" className="hover:underline text-gray-600">
                SignUp
              </Link>
            </>
          )}
          <a className="btn bg-transparent text-[#FF3811] border-2 border-[#FF3811] hover:bg-[#FF3811] hover:border-0 hover:text-white hover:font-semibold">
            Appointment
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
