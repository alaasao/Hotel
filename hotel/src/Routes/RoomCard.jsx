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
            <span className='max-xl:hidden'>{ status}</span>
      <div className='w-[80px] flex justify-end'>{status === "available" && <button onClick={toogleModal} className='bg-[#3B28CC]'>book</button>}</div>
      {modal && <AddBoking roomType={roomType} roomNumber={roomNumber} modal={modal} toogleModal={toogleModal} />}
          </li>
  )
}

export default RoomCard
