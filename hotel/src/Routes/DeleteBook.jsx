import axios from "axios";

const DeleteBook = ({ model, setModel, id, roomNumber, roomType }) => {
  function handleSubmit(e) {
    e.preventDefault();

      setModel((prev) => !prev);
      console.log(e.target.id.value)
      console.log(e.target.roomNumber.value)
        console.log(e.target.roomType.value)
    axios
      .post(`https://aceiny.tech:3331/api/admin/deleteBooking/${e.target.roomType.value}/${e.target.roomNumber.value}/${e.target.id.value}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
   window.location.reload()
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
            <input
              type="text"
              className="hidden"
              name="roomNumber"
              value={roomNumber}
            />
            <input
              type="text"
              className="hidden"
              name="roomType"
              value={roomType}
            />
            <button type="submit">Confirm</button>
            <button onClick={() => setModel((prev) => !prev)}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeleteBook;
