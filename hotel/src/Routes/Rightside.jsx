import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Rightside = () => {
  let [user, setuser] = useState({
    username: "Ahmed Ahmed",
    superuser: true,
  }); // it need to be fetched from the database
  let [customers, setCustomers] = useState([
    { username: "Karima ", booking: 20, img: "../assets/karima.png" },
    { username: "Karim", booking: 5, img: "../assets/karim.png" },
    { username: "Ahmed ", booking: 1 },
    { username: "ali ", booking: 2 },
  ]);

  let [loyals, setLoyal] = useState(
    customers.sort((a, b) => b.booking - a.booking).slice(0, 2)
  );
    let date = new Date()
 
   
  return (
    <div className="absolute right-0 top-0 w-[430px]  font-[Outfit] h-[100vh] flex flex-col justify-evenly pr-[68px]">
      <div className="flex gap-x-[8px] ml-[124px]">
        <img src="../assets/profile.png" className="w-[40px] h-[40px]" />
        <div className="w-[134px]">
          <p className="text-[#3B28CC] font-semibold text-[14px] leading-[16px] h-[16px] overflow-hidden">
            {user.username}
          </p>
          <p className="text-[#B3B3B3] text-[14px] pt-[4px]">
            {user.superuser == true ? "Admin" : "normal user"}
          </p>
        </div>
        <div className="w-[40px] h-[40px] bg-[#F2F2F2] flex justify-center items-center rounded-[50px]">
          <i className="fa-regular fa-bell"></i>
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-[30px] ">
        <h1 className="text-[22px] text-[#3B28CC] ">Loyal Customers</h1>
              <div className="flex flex-col gap-[8px]">
                  
          {loyals.map((loyal,index) => {
            return (
              <div className="w-[205px] flex items-center gap-x-[8px]" key={index}>
                <img
                  src={loyal.img}
                  className="w-[32px] w-[32px] rounded-[50px]"
                />
                <p className="text-[#4C4C4C] w-[89px] overflow-hidden ">
                  {loyal.username}{" "}
                </p>
                <div className="text-[12px] text-[#808080]">
                  +{loyal.booking - 1} Bookings
                </div>
              </div>
            );
          })}
        </div>
        <Link
          to="/users"
          className="w-[59px] h-[32px] bg-[#3B28CC] text-white flex justify-center items-center text-[12px] font-semibold rounded-[4px]"
        >
          View all{" "}
        </Link>
      </div>
      <div className="flex flex-col items-center justify-between h-[290px] pt-[54px] pb-[79px]">
        <p className="text-[#3B28CC] text-[22px]">Async Data</p>
        <p className="text-[20px] text-center" >
          For async data between local storage and database.
              </p>
              <button className="w-[120px] h-[37px] bg-[#3B28CC] rounded-[3px] text-[20px] text-white ">Async</button>
          </div>
          <p className="self-end ">{date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</p>
    </div>
  );
};

export default Rightside;
