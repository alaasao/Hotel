import React, {useState} from 'react'
import { roomsData } from '../Data'
import AddBoking from './AddBoking'
import img1 from '../../public/assets/search.png'

const Rooms = () => {

  const [modal, setModal] = useState(false)

  const toogleModal = () => {
    setModal(!modal)
  }

  return (
    <div className='rooms'>
      <div className=" border border-[1px] h-[48px] border-[#E6E6E6] rounded-[4px] flex items-center">
        <div className="w-[52px] h-[100%] flex items-center justify-center">
          {" "}
          <img src={img1} alt="" className='pl-[16px]'/>
        </div>

        <input
          type="text"
          name=""
          id=""
          placeholder="Search users,rooms"
          className="h-[100%] w-[45vw] pl-[8px] placeholder:text-[#4C4C4C] placeholder:text-[18px] focus:outline-none"
          onChange={(e) => {
            setBookings(
              bookings.filter((booking) =>
                booking.username.includes(e.target.value)
              )
            );
            e.target.value === "" && setBookings(arr);
          }}
        />
      </div>
      <h1 className='special'>Rooms</h1>
      <ul>
      {roomsData.map((room) => {
        return(
          <li>
            <span>{room.roomNumber}</span>
            <span>{room.beds}</span>
            <span>{room.persons}</span>
            <span>{room.status}</span>
            <button onClick={toogleModal}>Booking</button>
          </li>
        )
      })}
      </ul>
      {modal && <AddBoking />}
    </div>
  )
}

export default Rooms
