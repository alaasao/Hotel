

const DashCard = ({img,username,status,start_date,end_date,suite,room,i}) => {
  return (
    <div>
          <div
            className="w-[100%]  h-[40px] grid grid-cols-5 mt-[17px] "
            key={i}
          >
            <div className="flex gap-[8px] items-center">
              <img src={ img} className="rounded-[50%]" />
              <p className="font-semibold text-[12px] text-[#808080] font-[Manrope]">
                {" "}
                { username}
              </p>
            </div>
            <div
              className={`w-[70px] h-[26px] text-[14px] rounded-[5px] flex justify-center items-center justify-self-center self-center ${
                 status === "Done"
                  ? "bg-[#28CC42] text-[#FFFBFF]"
                  :  status === "Cancel"
                  ? "bg-[#CC2828] text-[#FFFBFF]"
                  :  status === "Pending"
                  ? "bg-[#8E8E8E] text-[#FFFBFF]"
                  : "text-[#999999]"
              }`}
            >
              { status}
            </div>
            <div className="flex justify-center gap-[7px] items-center flex-wrap ">
              { start_date}{" "}
              { start_date && <i className="fa-solid fa-arrow-right"></i>}{" "}
              { end_date}
            </div>
            <div className="flex items-center justify-center shrink">
              { suite && (
                <i className="fa-solid fa-circle-check text-[#999999] "></i>
              )}
            </div>
            <div className="flex items-center justify-center shrink">
              { room && (
                <i className="fa-solid fa-circle-check text-[#999999]"></i>
              )}
            </div>
          </div>
    </div>
  )
}

export default DashCard
