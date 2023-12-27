import React from 'react'

const UserCard = ({img,username,date ,DeleteModal}) => {
  return (
    <li>
    <div>
      <img src={ img} alt="person" />
      <span>{ username}</span>
      <span>{ date}</span>
          </div>
          <img src="../assets/cancel-01.png" alt="" onClick={DeleteModal}  className='cursor-pointer'/>

  </li>
  )
}

export default UserCard
