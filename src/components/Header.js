import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <div className="absolute w-screen px-8 py-2 z-10 flex justify-between">
      <img
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex p-4">
          <img
            className="w-12 h-12 p-2 rounded-xl"
            alt="usericon"
            src="https://th.bing.com/th/id/OIP.kYYbdJhBIh1SEi8MKTPYpgHaHa?rs=1&pid=ImgDetMain"
          />
          <button onClick={handleSignOut} className="font-bold">
            {user.displayName && (
              <span className="font-normal">Hi {user.displayName}, </span>
            )}{" "}
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
