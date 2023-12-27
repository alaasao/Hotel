import React, {useState} from 'react'
import { bookingData } from '../Data'
import Delete from './Delete'
import img1 from '../../public/assets/search-normal.png'
import img2 from "../../public/assets/arrow.png"
import img3 from '../../public/assets/cancel-01.svg'
import img4 from "../../public/assets/CheckFat.png"

const Booking = () => {

  const [model, setModel] = useState(false)

  const toogleModle = () => {
    setModel(!model)
  }

  return (
    <div className='booking'>
      <div className=" border border-[1px] h-[48px] border-[#E6E6E6] rounded-[4px] flex items-center">
        <div className="w-[52px] h-[100%] flex items-center justify-center">
          {" "}
          <img src={img1} alt="" className='pl-[16px]' />
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
      <h1 className='special'>Booking</h1>
      <ul>
        {bookingData.map((booking) => {
          return(
            <li>
              <div>
                <img src={booking.img} alt="person" />
                <span>{booking.name}</span>
              </div>
              <span className={
                    booking.status === "Done"
                    ? "bg-[#28CC42] text-[#FFFBFF]" 
                    : booking.status === "Cancel"
                    ? "bg-[#CC2828] text-[#FFFBFF]" 
                    : booking.status === "Pending"
                    ? "bg-[#8E8E8E] text-[#FFFBFF]"
                    : "text-[#999999]"
              }>{booking.status}</span>

              <span>{booking.dateOpen} <img src={img2} alt="" /> {booking.dateEnd}</span>
              <span>{booking.roomNumber}</span>
              <div className="buttons">
                <img src={img4} alt="icon" />
                <img src={img3} alt="icon" onClick={toogleModle}/>
              </div>
            </li>
          )
        })}
      </ul>
      {model && <Delete />}
    </div>
  )
}

export default Booking
