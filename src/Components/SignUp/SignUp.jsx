import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const SignUp = () => {
    const { createUser, googleLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = {name, email, password}
        console.log(user);

        createUser(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user)
        })
        .then(error => console.log(error))
    }

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
            <form onSubmit={handleSignUp} className="card-body dark:text-gray-100">
                <h1 className=" text-2xl font-semibold text-center" >Register</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-gray-100 font-bold">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-3">
                <button className="btn bg-[#ff3811] dark:bg-[#ff3811]  text-white">Sign Up</button>
              </div>
              <div className=" text-center">
                <p className="text-[15px]" >Or Sign In With</p>
                <div className="flex justify-center my-5 gap-3">
                    <img src="https://raw.githubusercontent.com/MorshedSiam03/Car-Doctor/2c0f959bf870fb627c5ec1b9fad6e6888e227b6c/src/assets/icons/bx_bxl-facebook.svg" className="p-3 btn rounded-full bg-slate-200" alt="" />
                    <img src="https://raw.githubusercontent.com/MorshedSiam03/Car-Doctor/2c0f959bf870fb627c5ec1b9fad6e6888e227b6c/src/assets/icons/bx_bxl-linkedin.svg" className="p-3 btn rounded-full bg-slate-200" alt="" />
                    <img onClick={handleGoogleLogin} src="https://raw.githubusercontent.com/MorshedSiam03/Car-Doctor/2c0f959bf870fb627c5ec1b9fad6e6888e227b6c/src/assets/icons/google%201.svg" className="p-3 btn rounded-full bg-slate-200" alt="" />
                </div>
                <p>Already Have an account? <Link to={`/Login`} className=" underline hover:font-semibold text-[#ff3811]">Sign In</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default SignUp;