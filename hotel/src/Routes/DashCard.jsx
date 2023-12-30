

const DashCard = ({img,username,status,start_date,end_date,roomType,roomNumber,i}) => {
  return (
    <div>
          <div
            className="w-[100%]  h-[40px] flex justify-between mt-[17px] "
            key={i}
          >
            <div className="flex gap-[8px] items-center nameImg w-[150px]">
              <img src={ img} className="rounded-[50%] w-[32px] h-[32px]" />
              <p className="font-semibold text-[15px] font-[700] text-[#808080] font-[Manrope]">
                {" "}
                { username}
              </p>
            </div>
            <div
              className={`status w-[80px] h-[26px] text-[14px] rounded-[5px] flex justify-center items-center justify-self-center self-center ${
                 status === "done"
                  ? "bg-[#28CC42] text-[#FFFBFF]"
                  :  status === "Cancel"
                  ? "bg-[#CC2828] text-[#FFFBFF]"
                  :  status === "pending"
                  ? "bg-[#8E8E8E] text-[#FFFBFF]"
                  : "text-[#999999]"
              }`}
            >
              { status.charAt(0).toUpperCase() + status.slice(1)}
            </div>
            <div className="dateItem w-[220px] flex justify-center gap-[7px] items-center flex-wrap ">
              { start_date}{" "}
              { start_date && <i className="fa-solid fa-arrow-right"></i>}{" "}
              { end_date}
            </div>
            <div className="suite w-[100px] flex items-center justify-center shrink">
              { roomType === "suite" && (
                <i className="fa-solid fa-circle-check text-[#999999] "></i>
              )}
            </div>
            <div className="room w-[100px] flex items-center justify-center shrink">
              {  roomType === "room" && (
                <i className="fa-solid fa-circle-check text-[#999999]"></i>
              )}
            </div>
          </div>
    </div>
  )
}

export default DashCard
