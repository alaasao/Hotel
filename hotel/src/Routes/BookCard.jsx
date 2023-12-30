import React from "react";
import imgIcon from '../../public/assets/cancel-01-light.svg'
import img1 from '../../public/assets/CheckFat-light.svg'
import img2 from "../../public/assets/arrow.png";
import img3 from "../../public/assets/cancel-01.png";
import img4 from "../../public/assets/CheckFat.png";
import DeleteBook from "./DeleteBook";
import { useState } from "react";
import axios from "axios";
const BookCard = ({
  index,
  img,
  username,
  status,
  start_date,
  end_date,
  roomNumber,
  roomType,
 id

}) => {
  const [model, setModel] = useState(false);
  const [delModel, setDelModel] = useState(false);

  
  const toogleModle = () => {
    setModel(!model);
  };
  function changeState() {
    axios.post(`https://aceiny.tech:3331/api/admin/bookings/${id}/change-status`, {
      userName: username,
      status: "done",
      startDay: start_date,
      endDay: end_date,
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
    window.location.reload()
  }
  return (
    <li key={index}>
      <div>
        <img src={img} className="w-[32px]" />
        <span className="w-[150px]">{username}</span>
      </div>
      <span
        className={
          status === "done"
            ? "bg-[#28CC42] text-[#FFFBFF]"
            : status === "cancel"
            ? "bg-[#CC2828] text-[#FFFBFF]"
            : status === "pending"
            ? "bg-[#8E8E8E] text-[#FFFBFF]"
            : "text-[#999999]"
        }
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>

      <div className="dateItem w-[250px] min-w-[150px] flex justify-center gap-[7px] items-center flex-wrap ">
              { start_date}{" "}
              { start_date && <i className="fa-solid fa-arrow-right"></i>}{" "}
              { end_date}
            </div>
      <span>{`${roomType} ${roomNumber}`}</span>
      <div className="buttons w-[70px] flex justify-end">
        
        {status === "pending" && <img src={img4} alt="icon" onClick={changeState}/>}
        {status === "pending" && <img src={img3} alt="icon" onClick={toogleModle} />}
{/* 
        {status !== "Cancel" && <img src={img1} alt="icon" />}
        {status !== "Cancel" && <img src={imgIcon} alt="icon" />}

        {status !== "Unverified" && <img src={img1} alt="icon" />}
        {status !== "Unverified" && <img src={imgIcon} alt="icon" />} */}
      </div>
      {model && <DeleteBook del={model} setModel={setModel} id={id} roomNumber={roomNumber} roomType={roomType}  />}
    </li>
    
  );
};

export default BookCard;