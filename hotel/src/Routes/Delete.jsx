import axios from "axios";
import React, { useState } from "react";
import Context from "../Context";

const Delete = ({ delModel, setDelModel, id }) => {
   let {setAsync} = React.useContext(Context)
  const DeleteModal = () => {
    setDelModel(!delModel);
  };
  function handleSubmit(e) {
      e.preventDefault();
      console.log(e.target.id.value)
    setDelModel((prev) => !prev);
    axios
      .post(`https://aceiny.tech:3331/api/admin/delete-user/${e.target.id.value}`)
      .catch((err) => {
        console.log(err);
      });
      setAsync((prev) => !prev)
  }

  return (
    <div className=" delete">
      <div className="overlay"></div>
      <div className="flex flex-col content">
        <h3 className="">Are You Sure?</h3>
        <p>Please confirm this operation before we start</p>
        <form action="" onSubmit={handleSubmit}>
          <div className="buttons">
            <input type="text" className="hidden" name="id" value={id} />
            <button type="submit">Confirm</button>
            <button onClick={DeleteModal}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Delete;
