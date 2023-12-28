import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import Rightside from "./Rightside";
import DashCard from "./DashCard";
import Context from "../Context";
import Pagination from "./Pagination";
const Dashboared = () => {
  let [bookingTot, setBookingTot] = React.useState(30000); //ift needs to be fetched from api
  let [doneBooking, setDoneBooking] = React.useState(12000); //ift needs to be fetched from api
  let [satasified, setSatasified] = React.useState(17000); //ift needs to be fetched from api
  let [arr, setArr] = React.useState([
    {
      username: "Bluenose",
      img: "../assets/image 12.png",
      status: "Pending",
      start_date: "10/01/24",
      end_date: "15/12/2021",
      suite: 1,
      room: null,
      id: 1,
    },
    {
      username: "alaa",
      img: "../assets/image 12.png",
      status: "Pending",
      start_date: "10/01/24",
      end_date: "15/12/2021",
      suite: 1,
      room: null,
      id: 100,
    },
    {
      username: "Bluenose",
      img: "../assets/Ellipse 3.png",
      status: "Done",
      start_date: "10/01/24",
      end_date: "15/12/2021",
      suite: null,
      room: 2,
      id: 2,
    },
    {
      username: "Bluenose",
      img: "../assets/Ellipse 3.png",
      status: "Cancel",
      start_date: "12/12/2021",
      end_date: "15/12/2021",
      suite: null,
      room: 3,
      id: 3,
    },
    {
      username: "Bluenose",
      img: "../assets/Ellipse 3.png",
      status: "Unverified",
      start_date: null,
      end_date: null,
      suite: 11,
      room: null,
      id: 4,
    },
    {
      username: "Bluenose",
      img: "../assets/Ellipse 3.png",
      status: "Cancel",
      start_date: "12/12/2021",
      end_date: "15/12/2021",
      suite: null,
      room: 12,
      id: 5,
    },
    {
      username: "Bluenose",
      img: "../assets/image 12.png",
      status: "Done",
      start_date: "12/12/2021",
      end_date: "15/12/2021",
      suite: 1,
      room: null,
      id: 6,
    },
    {
      username: "Bluenose",
      img: "../assets/image 12.png",
      status: "Done",
      start_date: "12/12/2021",
      end_date: "15/12/2021",
      suite: 1,
      room: null,
      id: 7,
    },
    {
      username: "Bluenose",
      img: "../assets/image 12.png",
      status: "Done",
      start_date: "12/12/2021",
      end_date: "15/12/2021",
      suite: 1,
      room: null,
      id: 8,
    },
    {
      username: "Bluenose",
      img: "../assets/image 12.png",
      status: "Done",
      start_date: "12/12/2021",
      end_date: "15/12/2021",
      suite: 1,
      room: null,
      id: 8,
    },
    {
      username: "Bluenose",
      img: "../assets/image 12.png",
      status: "Done",
      start_date: "12/12/2021",
      end_date: "15/12/2021",
      suite: 1,
      room: null,
      id: 8,
    },
    {
      username: "Bluenose",
      img: "../assets/image 12.png",
      status: "Done",
      start_date: "12/12/2021",
      end_date: "15/12/2021",
      suite: 1,
      room: null,
      id: 8,
    },
    {
      username: "Bluenose",
      img: "../assets/image 12.png",
      status: "Done",
      start_date: "12/12/2021",
      end_date: "15/12/2021",
      suite: 1,
      room: null,
      id: 8,
    },
    {
      username: "Bluenose",
      img: "../assets/image 12.png",
      status: "Done",
      start_date: "12/12/2021",
      end_date: "15/12/2021",
      suite: 1,
      room: null,
      id: 8,
    },
    {
      username: "Bluenose",
      img: "../assets/image 12.png",
      status: "Done",
      start_date: "12/12/2021",
      end_date: "15/12/2021",
      suite: 1,
      room: null,
      id: 8,
    },
    {
      username: "Bluenose",
      img: "../assets/image 12.png",
      status: "Done",
      start_date: "12/12/2021",
      end_date: "15/12/2021",
      suite: 1,
      room: null,
      id: 8,
    },
  ]);
  let article_per_page = 8;
  let [bookings, setBookings] = React.useState(arr); //ift needs to be fetched from api

  let [showList, setShowList] = React.useState(
    bookings.slice(0, article_per_page)
  );
  let { smallScreen, tooSmall } = React.useContext(Context);


  return (
    <div
      className={`dashBoard flex w-[100vw] justify-start  h-[100vh] pl-[32px] pt-[60px] mr-[20px] flex-col font-[Outfit]  ${
        smallScreen ? "smallwi h-[auto]" : "wi"
      } max-lg:w-[95vw] max-xl:mt-[50px] `}
    >
      <div className=" border border-[1px] h-[48px] border-[#E6E6E6] rounded-[4px] flex items-center">
        <div className="w-[52px] h-[100%] flex items-center justify-center">
          {" "}
          <img src="../assets/search.png" alt="" />
        </div>

        <input
          type="text"
          name=""
          id=""
          placeholder="Search users,rooms"
          className="h-[100%] w-[45vw] pl-[16px] placeholder:text-[#4C4C4C] placeholder:text-[18px] focus:outline-none"
          onChange={(e) => {
            setBookings(
              bookings.filter((booking) =>
                booking.username
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase())
              )
            );
            e.target.value === "" && setBookings(arr);
          }}
        />
      </div>
      <div className="mt-[80px] firstElement flex flex-col gap-[20px]">
        <p className="text-[18px] text-[#4C4C4C]">In the last 30 days,</p>
        <div className="w-[100%] flex gap-[22px]  ">
          <div className="relative">
            {" "}
            <img src="../assets/Frame_37.png" className="w-[25vw] h-[80px]" />
            <div className="absolute top-0 text-white pl-[11px]">
              <p className=" text-[35px] leading-normal">
                {bookingTot.toLocaleString()}
              </p>{" "}
              <p className="text-[15px] leading-[30px]">Booking Operations</p>
            </div>
          </div>
          <div className="relative">
            {" "}
            <img src="../assets/Frame_37.png" className="w-[25vw] h-[80px]" />
            <div className="absolute top-0 text-white pl-[11px]">
              <p className=" text-[35px] leading-normal">
                {doneBooking.toLocaleString()}
              </p>{" "}
              <p className="text-[15px] leading-[30px]">Done <br /> Booking</p>
            </div>
          </div>
          <div className="relative">
            {" "}
            <img src="../assets/Frame_37.png" className="w-[25vw] h-[80px]" />
            <div className="absolute top-0 text-white pl-[11px]">
              <p className=" text-[35px] leading-normal">
                {satasified.toLocaleString()}
              </p>{" "}
              <p className="text-[15px] leading-[30px]">Satasified Clients</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[20px] text-[#080808] flex justify-between h-[70px] items-end ">
        <div className="flex flex-col h-[100%] justify-between  ">
          {" "}
          <p className="text-[18px]">All users</p>{" "}
          <p className="text-[#B3B3B3] text-[13px]  ">
            Monitor users, Booking, etc.
          </p>
        </div>
        <button className="flex h-[32px] w-[59px] text-[#4C4C4C] gap-[6px] items-center ">
          <img src="../assets/filter-search.png" alt="" />
          Filter
        </button>
      </div>
      <div></div>
      <div className="w-[100%] h-[55px] px-[10px] flex justify-between mt-[0px] bg-[#f7f7f7]">
        <div className="w-[150px] user nameImg flex items-center">User</div>
        <div className="w-[80px] status flex items-center justify-center ">Status</div>
        <div className="date1 w-[200px] flex items-center justify-center">Date</div>
        <div className="suite flex w-[100px] items-center justify-center">Suite</div>
        <div className="room flex w-[100px] items-center justify-center">Room</div>
      </div>
      {showList.map((e, i) => {
        return (
          <DashCard
            key={i}
            img={e.img}
            username={e.username}
            start_date={e.start_date}
            end_date={e.end_date}
            status={e.status}
            room={e.room}
            suite={e.suite}
          />
        );
      })}
   <Pagination
        article_per_page={article_per_page}
        arr={bookings}
        showList={showList}
        setShowList={setShowList}
      />
    </div>
  );
};

export default Dashboared;
