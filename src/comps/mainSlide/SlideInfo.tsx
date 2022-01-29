export const SlideInfo = () => {
  return (
   <div className="font-sans text-center text-xs">

     {/* Deal Description  */}
       <h2 className=" text-red-700 animate-pulse mb-5
       font-sans font-bold text-4xl"> Special Deal!</h2>
       <p> DON'T COMPROMISE ON STYLE!  </p>

       {/* Get now Button */}
       <button className=" 
       hover: animate-bounce text-xl shadow-lg shadow-red-700
        text-gray-100 font-bold mt-9 py-2 bg-red-800
       px-6 rounded-sm"> Get Now </button>
   </div>
  )
}