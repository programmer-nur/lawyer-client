import { updateProfile } from "firebase/auth";
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { MyContext } from "../Context/AuthContext";
import useTitle from "./useTitle";

const Register = () => {
  const { creteUser, createGoogle, auth } = useContext(MyContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();


  useTitle("signup");
  const handelSubmite = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photourl.value;
    const email = form.email.value;
    const password = form.password.value;

    creteUser(email, password,photoUrl).then((res) => {
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoUrl,
      })
        .then(() => {
          toast.success("Sign Successfully", { autoClose: 500 });
          form.reset();
          navigate(from, { replace: true });
        })
        .catch((error) => {
          toast.error(error.massage, { autoClose: 600 });
        });
    });
  };
  const handelGoogleSign = () => {
    createGoogle()
      .then((res) => {
        const user = res.user;
        console.log(user);
        toast.success("Sign Up Successfully", { autoClose: 700 });
      })
      .catch((err) => {
        toast.warning(err.message, { autoClose: 700 });
      });
  };
  return (
    <div className="w-full mx-auto my-10 max-w-md p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
      <h1 className="text-2xl font-bold text-center">Sign Up</h1>
      <form
        onSubmit={handelSubmite}
        action=""
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-1 text-sm">
          <label htmlFor="username" className="block text-gray-400">
            Username
          </label>
          <input
            type="text"
            name="name"
            id="username"
            placeholder="Username"
            className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-200 text-black"
          />
        </div>
        <label htmlFor="email" className="block text-gray-400">
            Photo
          </label>
          <input
            type="photourl"
            name="photourl"
            id="photourl"
            placeholder="Photo Url"
            className="w-full px-4 py-3 rounded-md bg-gray-200 text-black "
          />

        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block text-gray-400">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md bg-gray-200 text-black "
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block text-gray-400">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md bg-gray-200 text-black "
          />
          <div className="flex justify-end text-xs text-gray-400">
            <Link rel="noopener noreferrer" href="#">
              Forgot Password?
            </Link>
          </div>
        </div>
        <button type="submit" className="block w-full p-3 text-center rounded-md dark:text-gray-900 bg-[#b1976b]">
          Sign Up
        </button>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
        <p className="px-3 text-sm text-gray-400">
          Login with social accounts
        </p>
        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={handelGoogleSign}
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
      <p className="text-xs text-center sm:px-6 text-gray-400">
        Already have an account ?
        <Link
          to="/login"
          rel="noopener noreferrer"
          href="#"
          className="underline text-gray-100"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default Register;
