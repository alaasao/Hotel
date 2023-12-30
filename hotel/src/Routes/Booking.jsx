import React, { useEffect, useState } from "react";


import img1 from "../../public/assets/search-normal.png";
import BookCard from "./BookCard";
import Pagination from "./Pagination";
import axios from "axios";
import Context from "../Context";
const Booking = () => {
 

  let article_per_page = 15;
  let { bookingsData } = React.useContext(Context);
  let [bookings, setBookings] = useState(bookingsData);
  useEffect(() => {
    setBookings(bookingsData.reverse());
  }, [bookingsData]);
  let [showList, setShowList] = React.useState(
    bookings.slice(0, article_per_page)
  );

  return (
    <div className="booking">
      <div className=" border border-[1px] h-[48px] border-[#E6E6E6] rounded-[4px] flex items-center">
        <div className="w-[52px] h-[100%] flex items-center justify-center">
          {" "}
          <img src={img1} alt="" className="pl-[16px]" />
        </div>
        <input
          type="text"
          name=""
          id=""
          placeholder="Search users,rooms"
          className="h-[100%] w-[45vw] pl-[8px] placeholder:text-[#4C4C4C] placeholder:text-[18px] focus:outline-none"
          onChange={(e) => {
            setBookings(
              bookingsData.filter((booking) =>
                booking.username
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase())
              )
            );
            e.target.value === "" && setBookings(bookingsData);
          }}
        />
      </div>
      <h1 className="special">Booking</h1>
      <ul>
        {showList.map((booking, index) => {
          return (
           booking.user && <BookCard
              username={booking.userName}
              status={booking.status}
              start_date={booking.startDay.substring(0, 10)}
              end_date={booking.endDay.substring(0, 10)}
              roomType={booking.roomType}
              img={booking.user.picture}
              roomNumber={booking.roomNumber}
              key={index}
              id={booking.id}
          
              />
              );
        })}
      </ul>
      <Pagination
        article_per_page={article_per_page}
        arr={bookings}
        showList={showList}
        setShowList={setShowList}
      />
     
    </div>
  );
};

export default Booking;
