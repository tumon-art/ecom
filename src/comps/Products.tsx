import { data } from "./data"
import { DocumentSearchIcon } from '@heroicons/react/solid'
import { HeartIcon } from '@heroicons/react/solid'
import { ShoppingBagIcon } from '@heroicons/react/solid'

export const Products = () => {
  return (
   <div className="grid grid-cols-6 items-c m-6 gap-9">
    {data.products.map((e,i)=>{
        return(
            <div key={i} className=" w-44 h-56 grid justify-center
             items-end rounded-lg bg-gray-50 shadow-lg shadow-gray-600 
         ring-4 ring-gray-700">


            <img  className=" w-80 hover:scale-105 transition"
            alt="products" src={e.img} />



            <div className=" bg-slate-700 h-10
            flex justify-center items-center">

            <DocumentSearchIcon className="productsFooter" />

            <HeartIcon className="productsFooter" />

            <ShoppingBagIcon className="productsFooter" />
            </div>
            </div>
        )
    })}
   </div>
  )
}