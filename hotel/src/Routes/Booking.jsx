import React, { useState } from "react";
import { bookingData } from "../Data";
import Delete from "./Delete";
import img1 from "../../public/assets/search-normal.png";
import img2 from "../../public/assets/arrow.png";
import img3 from "../../public/assets/cancel-01.png";
import img4 from "../../public/assets/CheckFat.png";
import BookCard from "./BookCard";
import Pagination from "./Pagination";
import { useEffect } from "react";

const Booking = () => {
  const [model, setModel] = useState(false);

  const toogleModle = () => {
    setModel(!model);
  };

  let article_per_page = 11;
  let [bookings, setBookings] = useState(bookingData);

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
              bookingData.filter((booking) =>
                booking.username.toLowerCase().includes(e.target.value.toLowerCase())
              )
            );
            e.target.value === "" && setBookings(bookingData);
            console.log(bookings);
          }}
        />
      </div>
      <h1 className="special">Booking</h1>
      <ul>
        {showList.map((booking, index) => {
          return (
            <BookCard
              username={booking.username}
              status={booking.status}
              start_date={booking.start_date}
              end_date={booking.end_date}
              room={booking.room}
              img={booking.img}
              suite={booking.suite}
              key={index}
              toogleModle={toogleModle}
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
      {model && <Delete />}
    </div>
  );
};

export default Booking;
