import { SearchCircleIcon } from '@heroicons/react/solid'

export const SearchContainer = () => {
  return (
   <div className='hidden sm:inline-flex ring-2 rounded-lg ring-slate-500 flex '>
   <input type="text" className=" outline-none px-2 
   bg-transparent w-36 " />
   <SearchCircleIcon className="h-8 w-8 text-slate-300"/>
   </div>
  )
}