import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Oauth() {
  const navigate = useNavigate();

  const onGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const res = await signInWithPopup(auth, provider);
      const user = res.user;

      //add to database, if user does not exist
      const docRef = doc(db, "users", user.uid);
      // console.log(docRef);
      const docSnap = await getDoc(docRef);
      // console.log(docSnap);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timeStamp: serverTimestamp(),
        });
      }
      toast.success("Registeration Successful");
      navigate("/");
    } catch (error) {
      toast.error(error, "Error Occured");
      console.log(error);
    }
  };

  
  return (
    <button
      type="button"
      onClick={onGoogleClick}
      className="flex items-center justify-center w-full bg-red-600 rounded px-7 py-3 text-white uppercase shadow-md hover:shadow-lg active:shadow:lg transition duration-150 ease-in-out text-sm font-medium hover:bg-red-800 active:bg-red-900"
    >
      {" "}
      <FcGoogle className="text-2xl bg-white rounded-full mr-2" /> Continue With
      Google
    </button>
  );
}
