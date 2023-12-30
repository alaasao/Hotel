import React from 'react'
import { useEffect } from 'react'
const Pagination = ({article_per_page,arr,showList,setShowList}) => {

    let [startIndex, setStartIndex] = React.useState(0); //ift needs to be fetched from api
    let [endIndex, setEndIndex] = React.useState(Math.min( article_per_page , arr.length)); //ift needs to be fetched from api
  

    let [pages, SetPages] = React.useState([
      ...Array(Math.ceil(arr.length /  article_per_page )).keys(),
    ]);
    
    useEffect(() => {
      SetPages([...Array(Math.ceil(arr.length /  article_per_page )).keys()]);
      setStartIndex(0);
      setEndIndex(Math.min( article_per_page , arr.length));
    }, [arr]);
    useEffect(() => {
      setShowList(arr.slice(startIndex, endIndex));
    }, [startIndex, endIndex, arr]);
  return (
    <div className="flex gap-[24px] font-[Manrope] cursor-pointer mt-[0px] pagination">
    {startIndex > 0 && (
      <button
        className="text-[#9F9F9F] font-semibold  text-[15px] font-[Manrope]"
        onClick={() => {
          setStartIndex((prev) => (prev > 0 ? prev - article_per_page  : 0));
          setEndIndex((prev) => (prev >  article_per_page  - 1 ? prev - article_per_page  :  article_per_page  - 1));
        }}
      >
        Previous page
      </button>
    )}
    <div className="flex gap-[8px]">
      {" "}
      {pages.length>1 && pages.map((page, index) => (
        <div
          key={index}
          className={`w-[28px] h-[28px] rounded-[50%] flex justify-center items-center text-[15px] ${
            startIndex /  article_per_page  === page
              ? "bg-[#3B28CC] text-white"
              : "bg-[#E6E6E6] text-[#4C4C4C]"
          }`}
          onClick={() => {
            setStartIndex(page *  article_per_page );
            setEndIndex((page + 1) *  article_per_page );
          }}
        >
          {page + 1}
        </div>
      ))}
    </div>
    {endIndex <   arr.length && endIndex != 0 && (
      <button
        className="text-[#9F9F9F] font-semibold text-[15px] "
        onClick={() => {
          setStartIndex((prev) =>
            prev <  arr.length -  article_per_page  - 1 ? prev + article_per_page  :  arr.length - article_per_page 
          );
          setEndIndex((prev) =>
            prev <  arr.length ? prev + article_per_page  :  arr.length
          );
        }}
      >
        Next page
      </button>
    )}
  </div>
  )
}

export default Pagination
