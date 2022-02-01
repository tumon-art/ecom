import { FaDiscord, FaFacebookSquare, FaPinterestSquare, FaTelegram, FaTwitch } from 'react-icons/fa';

export const Footer = () => {
  return (
   <div className="grid grid-cols-3 border-t-4 border-gray-800 py-5">

       {/* // Usefull LINKS */}
       <div className="flex flex-col items-center"> 
           <h1 className=" mb-5 
           text-xl font-sans font-extrabold"> Usefull Links </h1>

           <div className="flex">
               <div className=" mr-2">
                   <div> Home</div>
                   <div> Contacts</div>
                   <div> About</div>
                   <div> History</div>
               </div>

               <div className=" ml-10">
                   <div> Clients</div>
                   <div> Locals</div>
                   <div> Storage</div>
                   <div> Links</div>
               </div>
           </div>
       </div>

       {/* Site Desc and Social Links */}
       <div className=" ml-10">
           <h1 className=" mb-5 
           text-3xl font-sans font-extrabold "> LAWA </h1>
           <p> Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit. 
            Beatae deserunt nemo nulla. Omnis
            corporis accusantium, distinctio ex iusto neque minus deleniti,
            aperiam cumque sit fuga ipsum ullam recusandae tempora provident!</p>
            <div className='flex'>
                <FaFacebookSquare className='rIcon' /> 
                <FaPinterestSquare className="rIcon" />
                <FaDiscord className="rIcon" />
                <FaTelegram className="rIcon" />
                <FaTwitch className="rIcon" />
            </div>
       </div>

       {/* Contact Info  */}
       <div className='flex items-center flex-col '>
            <h1 className=" mb-5
            text-xl font-sans font-extrabold"> Contact </h1>

            {/* // Contact Details */}
            <div>
            <div className='flex items-center'>
                <svg className="h-5 w-5 text-black mr-2"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>Doha, 33 SA, 23 Block</span>

            </div>

            <div className='flex items-center'>
                <svg className="h-5 w-5 text-black mr-2" 
                width="24" height="24" viewBox="0 0 24 24"
                stroke-width="2" stroke="currentColor" fill="none"
                stroke-linecap="round" stroke-linejoin="round"> 
                <path stroke="none" d="M0 0h24v24H0z"/> 
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2
                2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /> 
                <path d="M15 6l2 2l4 -4" /></svg>
                <span>+223 0343434</span>
                
            </div>

            <div className='flex items-center'>
                <svg className="h-5 w-5 text-black mr-2"  
                width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" fill="none" stroke-linecap="round" 
                stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>
                <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" /></svg>
                <span> Doha@mail.com.qt</span>
                
            </div>
            {/* === Payment Logos  */}
            <div className='flex justify-center mt-4'> 
            <svg className=" mr-2 h-5 w-5 text-blue-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M10 13l2.538-.003c2.46 0 4.962-2.497 4.962-4.997 0-3-1.89-5-4.962-5H7c-.5 0-1 .5-1 1L4 18c0 .5.5 1 1 1h2.846L9 14c.089-.564.43-1 1-1zm7.467-5.837C19.204 8.153 20 10 20 12c0 2.467-2.54 4.505-5 4.505h.021-2.629l-.576 3.65a.998.998 0 01-.988.844l-2.712-.002a.5.5 0 01-.494-.578L7.846 19" /></svg>
            <svg className=" mr-2 h-5 w-5 text-yellow-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M6 6h8a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-8" />  <line x1="8" y1="6" x2="8" y2="18" />  <line x1="8" y1="12" x2="14" y2="12" />  <line x1="9" y1="3" x2="9" y2="6" />  <line x1="13" y1="3" x2="13" y2="6" />  <line x1="9" y1="18" x2="9" y2="21" />  <line x1="13" y1="18" x2="13" y2="21" /></svg>
            <svg className=" mr-2 h-5 w-5 text-purple-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="7" y="9" width="14" height="10" rx="2" />  <circle cx="14" cy="14" r="2" />  <path d="M17 9v-2a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2" /></svg>
            <svg className=" mr-2 h-5 w-5 text-green-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M17.2 7a6 7 0 1 0 0 10" />  <path d="M13 10h-8m0 4h8" /></svg>

            </div>
            </div>
       </div>
   </div>
  )
}