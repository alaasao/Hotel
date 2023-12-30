import React, { useState } from "react";
import { roomsData } from "../Data";
import AddBoking from "./AddBoking";
import img1 from "../../public/assets/search.png";
import Pagination from "./Pagination";
import RoomCard from "./RoomCard";
import axios from "axios";

const Rooms = () => {
  const [modal, setModal] = useState(false);

  const toogleModal = () => {
    setModal(!modal);
  };
  let article_per_page = 11;
  
  let [rooms, setRooms] = useState([]);
  React.useEffect(() => { 
    axios.get("https://aceiny.tech:3331/api/admin/rooms")
      .then((res) => {
      setRooms(res.data.rooms.reverse())
    })
  },[])
  let [showList, setShowList] = React.useState(
    rooms.slice(0, article_per_page)
  );

  return (
    <div className="rooms">
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
            setRooms(
              rooms.filter((room) =>
                room.room
                  ? room.room.toString().includes(e.target.value)
                  : room.suite.toString().includes(e.target.value)
              )
            );

            e.target.value === "" && setRooms(roomsData);
          }}
        />
      </div>
      <h1 className="special">Rooms</h1>
      <ul>
        {showList.map((room, index) => {
          return (
            <RoomCard
              roomType={room.roomType}
              toogleModal={toogleModal}
              beds={room.type}
              roomNumber={room.roomNumber}
              persons={room.capacity}
              status={room.available}
              key={index}
            />
          );
        })}
      </ul>
      <Pagination
        article_per_page={article_per_page}
        arr={rooms}
        showList={showList}
        setShowList={setShowList}
      />
      
    </div>
  );
};

export default Rooms;
