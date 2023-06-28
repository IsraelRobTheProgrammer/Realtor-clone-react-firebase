import React from "react";
import { FcGoogle } from "react-icons/fc";
export default function Oauth() {
  return (
    <button className="flex items-center justify-center w-full bg-red-600 rounded px-7 py-3 text-white uppercase shadow-md hover:shadow-lg active:shadow:lg transition duration-150 ease-in-out text-sm font-medium hover:bg-red-800 active:bg-red-900">
      {" "}
      <FcGoogle className="text-2xl bg-white rounded-full mr-2"/> Continue With Google
    </button>
  );
}
