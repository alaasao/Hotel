import React, {useState} from 'react'
import img from '../../public/assets/search-normal.png'
import { usersData } from '../Data'
import Delete from './Delete'
import Pagination from './Pagination'
import UserCard from './UserCard'
const Users = () => {

  const [delModel, setDelModel] = useState(false)

  const DeleteModal = () => {
      setDelModel(!delModel)
  }
  let article_per_page = 11;
  let [users, setUsers] = useState(usersData)
  let [showList, setShowList] = React.useState(users.slice(0, article_per_page));

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
            setUsers(
              usersData.filter((user) =>
                user.username.toLowerCase().includes(e.target.value.toLowerCase())
              )
            );
            console.log(users)
            e.target.value === "" && setUsers(usersData);
          }}
        />
      </div>
      <h1 className='special'>Users</h1>
      <ul>
        {showList.map((user, i) => {
                  console.log(user.delete)
          return(

            <UserCard username={user.username} date={user.date} img={user.img} delete={user.delete} DeleteModal={DeleteModal} key={i} />
          )
        })}
      </ul>
      <Pagination article_per_page={article_per_page} arr={users} showList={showList} setShowList={setShowList}/>
      {delModel && <Delete/>}
    </div>
  )
}

export default Users
