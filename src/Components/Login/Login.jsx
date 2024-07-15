import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-col  lg:flex-row">
          <div className="mx-10 hidden md:block">
            <img src="/src/assets/images/login/login.svg" alt="" />
          </div>
          <div className="card bg-base-100 w-full p-5 md:max-w-sm lg:max-w-md border-2">
            <form className="card-body">
                <h1 className=" text-2xl font-semibold text-center" >Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <button className="btn bg-[#ff3811] text-white">Sign In</button>
              </div>
              <div className=" text-center">
                <p className="text-[15px]" >Or Sign In With</p>
                <div className="flex justify-center my-5 gap-3">
                    <img src="/src/assets/icons/bx_bxl-facebook.svg" className="p-3 btn rounded-full bg-slate-200" alt="" />
                    <img src="/src/assets/icons/bx_bxl-linkedin.svg" className="p-3 btn rounded-full bg-slate-200" alt="" />
                    <img src="/src/assets/icons/google 1.svg" className="p-3 btn rounded-full bg-slate-200" alt="" />
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
