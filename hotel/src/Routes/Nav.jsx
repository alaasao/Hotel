import React from 'react'
import Context from '../Context'
const Nav = () => {
    let { user ,setShowSidebar} = React.useContext(Context)
  return (
    <div className='w-[98vw] flex justify-between items-center absolute top-0 h-[80px] px-[30px]  '>
          <img src="../assets/logo.png" alt="" />
          <i className="text-[30px] translate-x-[300%] fa-solid fa-bars" onClick={() => {
            setShowSidebar(prev=>!prev)
        
          }}></i>
          <div className="flex gap-x-[8px] ml-[124px]">
        <img src="../assets/profile.png" className="w-[40px] h-[40px]" />
        <div className="w-[134px]">
          <p className="text-[#3B28CC] font-semibold text-[14px] leading-[16px] h-[16px] overflow-hidden">
            {user.username}
          </p>
          <p className="text-[#B3B3B3] text-[14px] pt-[4px]">
            {user.superuser == true ? "Admin" : "normal user"}
          </p>
        </div>
        <div className="w-[40px] h-[40px] bg-[#F2F2F2] flex justify-center items-center rounded-[50px]">
          <i className="fa-regular fa-bell"></i>
        </div>
      </div>
    </div>
  )
}

export default Nav
