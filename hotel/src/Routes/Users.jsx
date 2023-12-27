import React, {useState} from 'react'
import img from '../../public/assets/search-normal.png'
import { usersData } from '../Data'
import Delete from './Delete'

const Users = () => {

  const [delModel, setDelModel] = useState(false)

  const DeleteModal = () => {
      setDelModel(!delModel)
  }

  return (
    <div className='users'>
      <div className=" border border-[1px] h-[48px] border-[#E6E6E6] rounded-[4px] flex items-center">
        <div className="w-[52px] h-[100%] flex items-center justify-center">
          {" "}
          <img src={img} alt="" className='pl-[16px]' />
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
      <h1 className='special'>Users</h1>
      <ul>
        {usersData.map((user) => {
          return(
            <li>
              <div>
                <img src={user.img} alt="person" />
                <span>{user.nameUser}</span>
                <span>{user.date}</span>
              </div>
              <img src={user.delete} alt="cancel" style={{cursor: "pointer"}} onClick={DeleteModal}/>
            </li>
          )
        })}
      </ul>
      {delModel && <Delete/>}
    </div>
  )
}

export default Users
