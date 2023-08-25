import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
// import { toast } from "react-toastify";

export function useAuthStatus() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkStatus, setCheckStatus] = useState(true);

  // if (!loggedIn) {
  //   toast.error("You need to be signed in to continue")
  // }
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      }
      setCheckStatus(false);
    });
  }, []);
  return { loggedIn, checkStatus };
}
