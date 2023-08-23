import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Profile() {
  const auth = getAuth();
  console.log(auth.currentUser, "daya");
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const navigate = useNavigate();
  const { name, email } = formData;

  function onLogout() {
    auth.signOut();
    toast.success("Signed Out Successfully");
    navigate("/");
  }
  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center mt-6 font-bold"> My Profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form>
            <input
              type="text"
              id="name"
              value={name}
              disabled
              className="mb-6 w-full px-6 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
            />

            <input
              type="text"
              id="email"
              value={email}
              disabled
              className="mb-6 w-full px-6 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
            />

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6 ">
              <p>
                Do you want to change your name?
                <span className="text-red-600 hover:text-red-700 transition ease-in-out duration-200 cursor-pointer">
                  Edit
                </span>
              </p>

              <p
                onClick={onLogout}
                className="text-blue-600 hover:text-blue-800 transition ease-in-out duration-200 cursor-pointer"
              >
                Sign Out
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
