import React from 'react'
import Delete from './Delete'
const UserCard = ({ img, username, date, DeleteModal ,id}) => {
  let [delModel, setDelModel] = React.useState(false)
  return (
    <li>
    <div>
      <img src={ img} alt="person" />
      <span className='w-[150px]'>{ username}</span>
      <span>{ date}</span>
          </div>
      <img src="../assets/cancel-01.png" alt="" onClick={() => {
        setDelModel(!delModel)
          }}  className='cursor-pointer'/>
      {delModel && <Delete del={delModel} setDelModel={setDelModel} id={id} />}
    </li>

  )
}

export default UserCard
