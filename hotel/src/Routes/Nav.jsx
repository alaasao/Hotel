import React from "react";
import Context from "../Context";
const Nav = () => {
  let { user, setShowSidebar } = React.useContext(Context);
  return (
    <div className="w-[100%] flex justify-between items-center absolute top-0 h-[80px] px-[30px] ">
      <img src="../assets/profile.png" className=" h-[40px]" />
      <img src="../assets/logo.png " className="" />

      <i
        className="text-[30px]  fa-solid fa-bars"
        onClick={() => {
          setShowSidebar((prev) => !prev);
        }}
      ></i>
    </div>
  );
};

export default Nav;
