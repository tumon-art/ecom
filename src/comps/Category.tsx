import { data } from "./data"

export const Category = () => { console.log(data.category[0].img)
  return (
   <div className="flex">
    {data.category.map((e,i)=>{
       return (
        <div key={i} className=" m-6 rounded-xl
        overflow-hidden flex justify-between
        h-48 w-1/3 ring-4 ring-slate-900
         shadow-xl shadow-slate-800"> 

          {/* Category Image  */}
          <img src={e.img} className="h-full hover:scale-125 transition" />

          {/* Category Titele */}
          <div className=" bg-slate-700 
        text-gray-100 px-10 text-xl
          font-semibold h-full grid items-center
          text-center border-l-4 border-gray-900"> 
          <div> {e.desc} </div>

           {/* Shop now Button  */}
          <button className=" bg-gray-100
          ring ring-slate-300 rounded-lg
          grid items-center text-sm font-semibold 
           transition hover:ring-gray-900   
        text-gray-900"> Shop Now </button>
          </div>
        </div> 
       )
    })}
   </div>
  )
}