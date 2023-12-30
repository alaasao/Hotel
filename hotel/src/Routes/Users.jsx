import React, { useState } from "react";
import img from "../../public/assets/search-normal.png";

import Delete from "./Delete";
import Pagination from "./Pagination";
import UserCard from "./UserCard";
import Context from "../Context";
const Users = () => {

  let article_per_page = 11;
  let { usersData } = React.useContext(Context);
  
  let [users, setUsers] = useState(usersData);
  React.useEffect(() => { 
    setUsers(usersData);
  },[usersData])
  let [showList, setShowList] = React.useState(
    users.slice(0, article_per_page)
  );

  return (
    <div className="users">
      <div className=" border border-[1px] h-[48px] border-[#E6E6E6] rounded-[4px] flex items-center">
        <div className="w-[52px] h-[100%] flex items-center justify-center">
          {" "}
          <img src={img} alt="" className="pl-[16px]" />
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
                user.username
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase())
              )
            );
          
            
            e.target.value === "" && setUsers(usersData);
          }}
        />
      </div>
      <h1 className="special">Users</h1>
      <ul>
        {showList.map((user) => {
       
          return (
            <UserCard
              username={user.userName}
              date={user.createdAt.substring(0, 10)}  
              img={user.picture}
              
      
              key={user.id}
              id={user.id}
            />
          );
        })}
      </ul>
      <Pagination
        article_per_page={article_per_page}
        arr={users}
        showList={showList}
        setShowList={setShowList}
      />
   
    </div>
  );
};

export default Users;
