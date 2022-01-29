import { SearchContainer } from "./SearchContainer"
import { ShoppingCartIcon } from '@heroicons/react/solid'

export const Navbar = () => {
  return (
   <div className="navBar">

       {/* language Option and Search */}
       <div className=" cursor-pointer text-lg
       flex items-center"> 

       <div className=" px-3"> EN </div> 
       <SearchContainer /> </div>

        {/* Main Logo  */}
       <div className="font-extrabold text-center 
       font-sans text-3xl"> LAWA  </div>

       {/* Reg, Sign in And Cart  */}
       <div className="flex items-center justify-between pl-52"> 
       <div> Sign in</div>
       <div> Register</div> 
           
           <ShoppingCartIcon className="h-8 w-8 text-white-500" />
       </div>
   </div>
  )
}