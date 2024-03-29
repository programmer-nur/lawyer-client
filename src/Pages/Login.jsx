import React, { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { MyContext } from "../Context/AuthContext";
import useTitle from "./useTitle";

const Login = () => {
  useTitle('login')
  const { loginUser, createGoogle, user } = useContext(MyContext);

  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const handelLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((res) => {
        const user = res.user;
        const currentUser = {
          email: user.email
        }
        console.log(user);

        fetch('https://lawyer-server.vercel.app/jwt',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(currentUser)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          localStorage.setItem('lawyer-token', data.token)
        })



        form.reset();
        toast.success("Log In Successfully!", { autoClose: 500 });
      })
      .catch((err) => {
        toast.warning(err.message, { autoClose: 500 });
      });

    navigate(from, { replace: true });
  };
  const handelGoogle = () => {
    createGoogle()
      .then((res) => {
        const user = res.user;
        console.log(user);
        toast("Log In SuccessFully ", { autoClose: 700 });
      })
      .catch((err) => {
        toast.warning("Log in Filed");
      });
  };

  useEffect(() => {
    if (user && user.uid) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);
  return (
    <div className="w-full max-w-md mx-auto my-9 p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
      <h1 className="text-2xl font-bold text-center">Log In</h1>
      <form
        onSubmit={handelLogin}
        action=""
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-1 text-sm">
          <label htmlFor="username" className="block dark:text-gray-400">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Username"
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-black focus:dark:border-violet-400"
            required
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block dark:text-gray-400">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-black focus:dark:border-violet-400"
            required
          />
          <div className="flex justify-end text-xs dark:text-gray-400">
            <Link rel="noopener noreferrer" href="#">
              Forgot Password?
            </Link>
          </div>
        </div>
        <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 bg-[#b1976b]">
        Log In
        </button>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        <p className="px-3 text-sm dark:text-gray-400">
          Login with social accounts
        </p>
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={handelGoogle}
          aria-label="Log in with Google"
          className="p-3 rounded-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
        </button>
      </div>
      <p className="text-xs text-center sm:px-6 dark:text-gray-400">
        Don't have an account?
        <Link
          to="/register"
          rel="noopener noreferrer"
          href="#"
          className="underline dark:text-gray-100"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;
