import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";

const Login = () => { 
    const {Login, googleLogin} = useContext(AuthContext);
    const [showPass, setShowPass] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        Login(email, password)
        .then(result=>{
            console.log(result.user);
        })
        .catch((error) => {
            console.error(error);
            setErrorMessage(error.message);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Invalid Email or Password",
            });
          });     
    };

    const handleGoogleLogin = () => {
        googleLogin()
        .then(result=>{
          console.log(result.user);
          navigate(location?.state ? location.state : "/");
        })
        .catch();
      };

  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-col md:flex-row">
          <div className="mx-10 hidden md:block">
            <img src="https://raw.githubusercontent.com/MorshedSiam03/Car-Doctor/2c0f959bf870fb627c5ec1b9fad6e6888e227b6c/src/assets/images/login/login.svg" alt="" />
          </div>
          <div className="card bg-base-100 dark:bg-[#151515] w-full p-5 md:max-w-sm lg:max-w-md border-2">
            <form onSubmit={handleLogin} className="card-body dark:text-gray-100">
                <h1 className=" text-2xl font-semibold text-center" >Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-gray-100 font-bold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-gray-100 font-bold">Password</span>
                </label>
                <div>
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered w-full"
                  required
                />
                <label
                  className="absolute ml-[-30px] py-3 text-xl"
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? <FaEye /> : <FaEyeSlash />}
                </label>
                </div>
                {errorMessage && (
                  <p className="text-red-600 mt-2 text-sm">
                    {" "}
                    {errorMessage.split("Firebase:")}{" "}
                  </p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt dark:text-gray-100 link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control">
                <button className="btn bg-[#ff3811] dark:bg-[#ff3811] text-white">Sign In</button>
              </div>
              <div className=" text-center">
                <p className="text-[15px]" >Or Sign In With</p>
                <div className="flex justify-center my-5 gap-3">
                    <img src="https://raw.githubusercontent.com/MorshedSiam03/Car-Doctor/2c0f959bf870fb627c5ec1b9fad6e6888e227b6c/src/assets/icons/bx_bxl-facebook.svg" className="p-3 btn rounded-full bg-slate-200" alt="" />
                    <img src="https://raw.githubusercontent.com/MorshedSiam03/Car-Doctor/2c0f959bf870fb627c5ec1b9fad6e6888e227b6c/src/assets/icons/bx_bxl-linkedin.svg" className="p-3 btn rounded-full bg-slate-200" alt="" />
                    <img onClick={handleGoogleLogin} src="https://raw.githubusercontent.com/MorshedSiam03/Car-Doctor/2c0f959bf870fb627c5ec1b9fad6e6888e227b6c/src/assets/icons/google%201.svg" className="p-3 btn rounded-full bg-slate-200" alt="" />
                </div>
                <p>Do not Have an account? <Link to={`/SignUp`} className=" underline hover:font-semibold text-[#ff3811]">Sign Up</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
