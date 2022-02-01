import { FaDiscord, FaFacebookSquare, FaPinterestSquare, FaTelegram, FaTwitch } from 'react-icons/fa';

export const Footer = () => {
  return (
   <div className="grid grid-cols-3 border-t-4 border-gray-800 py-5">

       {/* // Usefull LINKS */}
       <div className="flex flex-col items-center"> 
           <h1 className="H3"> Usefull Links </h1>

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
            <h1 className="H3"> Contact </h1>

            {/* // Contact Details */}
            <div>
            <div className='flex items-center'>
                <svg className="h-5 w-5 text-black mr-2"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>Doha, 33 SA, 23 Block</span>

            </div>

            <div className='flex items-center'>
                <svg className="h-5 w-5 text-black mr-2" 
                width="24" height="24" viewBox="0 0 24 24"
                strokeWidth="2" stroke="currentColor" fill="none"
                strokeLinecap="round" strokeLinejoin="round"> 
                <path stroke="none" d="M0 0h24v24H0z"/> 
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2
                2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /> 
                <path d="M15 6l2 2l4 -4" /></svg>
                <span>+223 0343434</span>
                
            </div>

            <div className='flex items-center'>
                <svg className="h-5 w-5 text-black mr-2"  
                width="24" height="24" viewBox="0 0 24 24" strokeWidth="2"
                stroke="currentColor" fill="none" strokeLinecap="round" 
                strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>
                <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" /></svg>
                <span> Doha@mail.com.qt</span>
                
            </div>
            {/* === Payment Logos  */}
            <div className='flex justify-center mt-4'> 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 mr-2 text-cyan-600  w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 mr-2 text-green-800  w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 mr-2 text-yellow-800  w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 mr-2 text-yellow-600 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 mr-2 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
                </svg>
            </div>
            </div>
       </div>
   </div>
  )
}