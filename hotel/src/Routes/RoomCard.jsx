import React,{useState} from 'react'
import AddBoking from './AddBoking'
const RoomCard = ({ roomType, roomNumber, beds, persons, status }) => {
  const [modal, setModal] = useState(false)

    const toogleModal = () => {
      setModal(!modal)
    }
  return (
<li>
            <span>{ `${roomType} ${roomNumber}`}</span>
            <span>{ beds}</span>
            <span>{ persons}</span>
            <span>{ status}</span>
      <div className='w-[200px] flex justify-end'>{status === "available" && <button onClick={toogleModal}>book</button>}</div>
      {modal && <AddBoking roomType={roomType} roomNumber={roomNumber} modal={modal} toogleModal={toogleModal} />}
          </li>
  )
}

export default RoomCard
