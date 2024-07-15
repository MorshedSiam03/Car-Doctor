import { Link } from "react-router-dom";

const NavBar = () => {
    const navItems = <>
    <li><Link>Home</Link></li>
    <li><Link>About</Link></li>
    <li><Link>Service</Link></li>
    <li><Link>Blog</Link></li>
    <li><Link>Contact</Link></li>
    </>
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <a className="">
            <img src="/src/assets/icons/logo.svg" className="w-16 cursor-auto lg:w-20" alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-transparent text-[#FF3811] border-2 border-[#FF3811] hover:bg-[#FF3811] hover:border-0 hover:text-white hover:font-semibold">Appointment</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
