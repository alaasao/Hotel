import { NavLink, useParams } from "react-router-dom";
import { useLocation  } from "react-router-dom";


const Sidebar = () => {
  const history = useLocation ();
  const currentPath = history.pathname.split("/")[1];

  return (
    <div className="h-[100vh] w-[240px] bg-[#F2F2F2] pt-[6.4vh] flex flex-col items-center font-[Manrope] absolute left-0">
      <img src="../assets/logo.png" className="w-[50px] pb-[131px]" />
      <ul className="font-medium leading-[24px] w-[167px] ">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            [
              "flex w-[100%] pl-[16px] gap-x-[12px] rounded-[4px] h-[40px] items-center  mb-[24px]",
              isActive ? "  text-white bg-[#6656E1]" : "text-[#8E8E8E] ",
            ].join(" ")
          }
        >
          <i className={`fa-solid fa-bars text-[24px] ${currentPath==="dashboard"?"text-[#3B28CC]":""}`}></i>
          <div className="">Dashboard</div>
        </NavLink>
        <NavLink
          to="/booking"
          className={({ isActive }) =>
            [
              "flex w-[100%] pl-[16px] gap-x-[12px] rounded-[4px] h-[40px] items-center  mb-[24px]",
              isActive ? "  text-white bg-[#6656E1]" : "text-[#8E8E8E] ",
            ].join(" ")
          }
        >
          <i className={`fa-solid fa-calendar text-[24px] ${currentPath==="booking"?"text-[#3B28CC]":""}`}></i>
          <div className="">Booking</div>
        </NavLink>
        <NavLink
          to="/Users"
          className={({ isActive }) =>
            [
              "flex w-[100%] pl-[16px] gap-x-[12px] rounded-[4px] h-[40px] items-center  mb-[24px]",
              isActive ? "  text-white bg-[#6656E1]" : "text-[#8E8E8E] ",
            ].join(" ")
          }
        >
          <i className={`fa-solid fa-users text-[24px] ${currentPath==="Users"?"text-[#3B28CC]":""}`}></i>
          <div className="">Users</div>
        </NavLink>
        <NavLink
          to="/rooms"
          className={({ isActive }) =>
            [
              "flex w-[100%] pl-[16px] gap-x-[12px] rounded-[4px] h-[40px] items-center  mb-[24px]",
              isActive ? "  text-white bg-[#6656E1]" : "text-[#8E8E8E] ",
            ].join(" ")
          }
        >
          <i className={`fa-solid fa-building text-[24px] ${currentPath==="rooms"?"text-[#3B28CC]":""}`}></i>
          <div className="">Rooms</div>
        </NavLink>

      </ul>
      <NavLink className="flex pl-[16px] mt-[244px] w-[167px] text-[#8E8E8E] font-medium gap-x-[12px] items-center leading-[24px] "><i className="fa-solid fa-gear text-[20px]"></i> <div>Settings</div></NavLink>
      <NavLink className="flex pl-[16px] mt-[25px] w-[167px] text-[#8E8E8E] font-medium gap-x-[12px] items-center leading-[24px] "><i className="fa-solid fa-arrow-right-from-bracket text-[20px]"></i><div>Log Out</div></NavLink>
    </div>
  );
};

export default Sidebar;
