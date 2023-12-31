import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Context from "../Context";
import axios from "axios";
const Rightside = () => {
  let { setAsync, async } = React.useContext(Context);
  let { smallScreen, setSmallScreen, user, setUser } =
    React.useContext(Context);
  // it need to be fetched from the database
  // let [customers, setCustomers] = useState([
  //   { userName: "Karima ", booking: 20, img: "../assets/karima.png" },
  //   { userName: "Karim", booking: 5, img: "../assets/karim.png" },
  //   { userName: "Ahmed ", booking: 1 },
  //   { userName: "ali ", booking: 2 },
  // ]);

  let [loyals, setLoyal] = useState();
  useEffect(() => {
    axios.get("https://aceiny.tech:3331/api/admin/top-users").then((res) => {
      setLoyal(res.data);
    });
  }, []);
  let date = new Date();

  return (
    <div className="rightSide w-[430px]  font-[Outfit] h-[100vh] flex flex-col items-center gap-[120px] pr-[20px] max-lg:items-center  max-lg:w-[96vw] max-lg:h-auto max-lg:mt-[50px]">
      {!smallScreen && (
        <div className="flex gap-x-[8px] pt-[61px]">
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
      )}
      <div className="flex flex-col items-center gap-y-[30px]">
        <h1 className="text-[22px] text-[#3B28CC] ">Loyal Customers</h1>
        <div className="flex flex-col gap-[8px]">
          {loyals &&
            loyals.map((loyal, index) => {
              return (
                <div
                  className="w-[205px] flex items-center gap-x-[8px]"
                  key={index}
                >
                  <img
                    src={loyal.picture}
                    className="w-[32px] w-[32px] rounded-[50px]"
                  />
                  <p className="text-[#4C4C4C] w-[89px] overflow-hidden ">
                    {loyal.userName}{" "}
                  </p>
                  <div className="text-[12px] text-[#808080] w-[100px]">
                    +{loyal.bookingCount - 1} Bookings
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
      <div className="flex flex-col items-center gap-[12px]">
        <p className="text-[#3B28CC] text-[22px]">Async Data</p>
        <p className="text-[20px] text-center">
          For async data between local storage <br /> and database.
        </p>
        <button
          className="w-[120px] h-[37px] bg-[#3B28CC] rounded-[3px] text-[20px] text-white "
          onClick={() => {
            setAsync((prev) => !prev);
          }}
        >
          Async
        </button>
      </div>
      <p className="self-end pr-[20px]">
        {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
      </p>
    </div>
  );
};

export default Rightside;
