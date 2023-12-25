

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
              className={`w-[65px] h-[23px] text-[12px] rounded-[5px] flex justify-center items-center justify-self-center self-center text-white ${
                 status === "Done"
                  ? "bg-[#28CC42]"
                  :  status === "Cancel"
                  ? "bg-[#CC2828]"
                  :  status === "Pending"
                  ? "bg-[#8E8E8E]"
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
