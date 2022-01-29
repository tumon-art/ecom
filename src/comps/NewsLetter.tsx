export const NewsLetter = () => {
  return (
   <div className="flex items-center flex-col my-20">
       
    <h1 className=" border-t-4 border-gray-800 w-3/6
     text-center py-6
    text-4xl font-sans font-extrabold"> Newsletter</h1>
    
    <p className=" my-5 
    text-sm font-extralight"> Get timely updates from your favorite products</p>

    <div className="flex">
    <input className=" text-gray-50 shadow-lg shadow-gray-900
    ring-4 px-3 ring-gray-900 bg-slate-700 rounded-sm" 
    type='text' placeholder="Enter Email" />


    {/* NewsLetter Submit  */}
    <button className=" text-gray-50 mx-7 font-bold  rounded-md 
     hover:scale-110 transition box-content
    py-1 px-3 bg-gray-800 ring-4 ring-gray-900"> Submit</button>
    </div>
   </div>
  )
}