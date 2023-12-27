import React from "react";
import img1 from "../../public/assets/search-normal.png";
import img2 from "../../public/assets/arrow.png";
import img3 from "../../public/assets/cancel-01.png";
import img4 from "../../public/assets/CheckFat.png";

const BookCard = ({
  index,
  img,
  username,
  status,
  start_date,
  end_date,
  roomNumber,
  room,
  suite,
  toogleModle,
}) => {
  return (
    <li key={index}>
      <div>
        <img src={img} alt="person" />
        <span>{username}</span>
      </div>
      <span
        className={
          status === "Done"
            ? "bg-[#28CC42] text-[#FFFBFF]"
            : status === "Cancel"
            ? "bg-[#CC2828] text-[#FFFBFF]"
            : status === "Pending"
            ? "bg-[#8E8E8E] text-[#FFFBFF]"
            : "text-[#999999]"
        }
      >
        {status}
      </span>

      <span>
        {start_date} {start_date && <img src={img2} alt="" />} {end_date}{" "}
        {!start_date && <div className="text-center">No date available</div>}
      </span>
      <span>{room ? `Room ${room}` : `Suite ${suite}`}</span>
      <div className="buttons w-[70px] flex justify-end">
        {status === "Pending" && <img src={img4} alt="icon" />}
        {status !== "Cancel" && status !== "Unverified" && (
          <img src={img3} alt="icon" onClick={toogleModle} />
        )}
      </div>
    </li>
  );
};

export default BookCard;
