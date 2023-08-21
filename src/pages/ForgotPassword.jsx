import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  function changeState(e) {
    setEmail(e.target.value);
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      console.log(email);
      toast.success("Reset Email Sent");
    } catch (error) {
      toast.error(error);
      console.log(error);
    }
  }
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Forgot Password</h1>

      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://plus.unsplash.com/premium_photo-1677093906053-037cef85dba4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNlY3VyaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="sign-in"
            className="w-full rounded-2xl"
          />
        </div>

        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={onSubmit}>
            <input
              className="mb-6 w-full px-4 py-2 text-xl text-gray-800 bg-white border-gray-300 rounded-lg transition ease-in-out"
              type="email"
              id="email"
              value={email}
              onChange={changeState}
              placeholder="Email Address"
            />
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6 mr-6">
                Have an account?
                <Link
                  to="/sign-up"
                  className="text-red-600 hover:text-red-800 transition duration-200 ease-in-out ml-1"
                >
                  Sign-Up
                </Link>
              </p>
              <p>
                Don't have an account?
                <Link
                  to="/sign-in"
                  className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out ml-1"
                >
                  Sign-In
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-green-800 transition duration-150 ease-in-out hover:shadow-lg active:bg-green-900"
            >
              Send Reset Email
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
