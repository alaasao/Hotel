import React, { useEffect } from "react";

import DashCard from "./DashCard";
import Context from "../Context";
import Pagination from "./Pagination";

const Dashboared = () => {
  
  let {bookingsData} = React.useContext(Context);
  let [bookingTot, setBookingTot] = React.useState(30000); //ift needs to be fetched from api
  let [doneBooking, setDoneBooking] = React.useState(12000); //ift needs to be fetched from api
  let [satasified, setSatasified] = React.useState(17000); //ift needs to be fetched from api

  let [bookings, setBookings] = React.useState(bookingsData)
  useEffect(() => { 

    setBookings(bookingsData.reverse())
  },[bookingsData])
 
  let article_per_page = 6;
 //ift needs to be fetched from api

  let [showList, setShowList] = React.useState(
    bookings.slice(0, article_per_page)
  );
  
  let { smallScreen } = React.useContext(Context);
  let tc=0, dc = 0;
  for (let index = 0; index < bookingsData.length; index++) {
   if (bookingsData[index].status === "done") {
      dc++;
    }
    if (bookingsData[index].status !== "cancel") {
      tc++;
    }
    
  }

  return (
    <div
      className={`dashBoard flex w-[100vw] justify-start  h-[100vh] pl-[32px] pt-[60px] mr-[20px] flex-col font-[Outfit]  ${
        smallScreen ? "smallwi h-[auto]" : "wi"
      } max-lg:w-[95vw] max-xl:mt-[50px] max-lg:pl-[2.3vw]  `}
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
                booking.userName
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase())
              )
            );
            e.target.value === "" && setBookings(bookingsData);
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
                {tc.toLocaleString()}
              </p>{" "}
              <p className="text-[16px] leading-[16px]">Booking Operations</p>
            </div>
          </div>
          <div className="relative">
            {" "}
            <img src="../assets/Frame_37.png" className="w-[25vw] h-[80px]" />
            <div className="absolute top-0 text-white pl-[11px]">
              <p className=" text-[35px] leading-normal">
                {dc.toLocaleString()}
              </p>{" "}
              <p className="text-[16px] leading-[16px]">Done Booking</p>
            </div>
          </div>
          <div className="relative">
            {" "}
            <img src="../assets/Frame_37.png" className="w-[25vw] h-[80px]" />
            <div className="absolute top-0 text-white pl-[11px]">
              <p className=" text-[35px] leading-normal">
                {satasified.toLocaleString()}
              </p>{" "}
              <p className="text-[16px] leading-[16px]">Satasified Clients</p>
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
         e.user && <DashCard
          key={i}
          img={e.user.picture}
          username={e.userName}
          start_date={e.startDay.substring(0,10)}
          end_date={e.endDay.substring(0,10)}
          status={e.status}
          roomType={e.roomType}
         roomNumber={e.roomNumber}
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
