import React from 'react'

const RoomCard = ({room,suite,beds,persons,status,toogleModal}) => {
  return (
<li>
            <span>{ room ? `Room ${ room}` : `Suite ${ suite}`}</span>
            <span>{ beds}</span>
            <span>{ persons}</span>
            <span>{ status}</span>
            <button onClick={toogleModal}>Booking</button>
          </li>
  )
}

export default RoomCard
