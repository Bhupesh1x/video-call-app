import React from "react";
import { useSelector } from "react-redux";
import { auth, provider } from "../firebase";

function Navbar() {
  const user = useSelector((state) => state.user.value);
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };

  const signOut = () => {
    auth.signOut().catch(alert);
  };

  console.log("user", user);

  return (
    <div className="flex items-center justify-between px-5 py-3 border-b shadow-sm sticky top-0 z-50">
      <div className="flex items-center space-x-2">
        <img
          src="https://img.icons8.com/color/48/null/google-meet--v1.png"
          alt=""
          className="h-8 w-8"
        />
        <p className="text-gray-600 text-lg font-semibold">Video Chat App</p>
      </div>
      {user.displayName ? (
        <div className="border-2 border-gray-400 p-0.5 rounded-full cursor-pointer">
          <img
            src={user?.photoUrl}
            alt=""
            className="h-8 w-8 object-contain rounded-full"
            onClick={signOut}
          />
        </div>
      ) : (
        <p className="cursor-pointer" onClick={signIn}>
          Sign In
        </p>
      )}
    </div>
  );
}

export default Navbar;
