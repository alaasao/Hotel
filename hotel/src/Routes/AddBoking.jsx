import axios from "axios";
import { root } from "postcss";
import React, { useState } from "react";

const AddBoking = ({ roomType, roomNumber, modal, toogleModal }) => {
  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post(
        `https://aceiny.tech:3331/api/admin/rooms/${e.target.roomType.value}/${e.target.roomNumber.value}/bookings`,
        {
          userName: e.target.name.value,
          status: "Pending",
          startDay: e.target.startDay.value,
          endDay: e.target.endDay.value,
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
      toogleModal();
      window.location.reload()
  }
  return (
    <div className="addBooking">
      <div className="overlay"></div>
      <div className="content">
        <h3 className="mb-[49px]">Add Booking</h3>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name="name" />
          <input
            type="text"
            name="roomNumber"
            className="hidden"
            value={roomNumber}
          />
          <input
            type="text"
            name="roomType"
            className="hidden"
            value={roomType}
          />
          <div className="date">
            <input
              type="text"
              placeholder="start day"
              name="startDay"
              onFocus={(e) => (e.currentTarget.type = "date")}
              onBlur={(e) => (e.currentTarget.type = "text")}
            />
            <input
              type="text"
              placeholder="end day"
              name="endDay"
              onFocus={(e) => (e.currentTarget.type = "date")}
              onBlur={(e) => (e.currentTarget.type = "text")}
            />
          </div>
          <div className="buttons">
            <button type="submit">Confirm</button>
            <button onClick={toogleModal}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBoking;
