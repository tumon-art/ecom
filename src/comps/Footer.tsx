import { FaDiscord, FaFacebookSquare, FaPinterestSquare, FaTelegram, FaTwitch } from 'react-icons/fa';
export const Footer = () => {
  return (
   <div className="grid grid-cols-3">

       {/* // Usefull LINKS */}
       <div className="flex flex-col items-center"> 
           <h1 className=" mb-5 
           text-2xl font-sans font-extrabold"> Usefull Links </h1>

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
           text-3xl font-sans font-extrabold"> LAWA </h1>
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
   </div>
  )
}