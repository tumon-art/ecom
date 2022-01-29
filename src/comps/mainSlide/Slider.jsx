import { ArrowNarrowRightIcon } from '@heroicons/react/solid'
import { ArrowNarrowLeftIcon } from '@heroicons/react/solid'

import { useState } from 'react'
import { data } from '../data'
import { SlideInfo } from './SlideInfo'


export const Slider = () => {
  // State to Track Image
  const [showImg,setshowImg] = useState(1)
  
  // Left Arrow 
  const leftArrow = () => {
    document.getElementById('dd').style.paddingTop='500%'

    setTimeout(()=>{
      if (showImg === 0 ) {
        setshowImg(3)
      }
      if (showImg === 1 ) {
        setshowImg(0)
      }
      if (showImg === 2) {
        setshowImg(1)
      }
      if (showImg === 3) {
        setshowImg(2)
      }
    },300)
  } 

  // Right Arrow
  const rightArrow = () => {
    document.getElementById('dd').style.paddingLeft='200%'
    setTimeout(()=>{
      if (showImg === 0 ) {
        setshowImg(1)
      }
      if (showImg === 1 ) {
        setshowImg(2)
      }
      if (showImg === 2) {
        setshowImg(3)
      }
      if (showImg === 3) {
        setshowImg(0)
      }
  
    },400)
  }

  return (

   <div className=" my-7 py-8 bg-slate-300 rounded-lg ring-8 ring-slate-800
    shadow-xl shadow-slate-800 relative flex items-center h-96 mx-6 
     overflow-hidden">

    {/* Right Arrow */}
    <ArrowNarrowLeftIcon className="absolute hover:animate-pulse
    h-8 w-8  text-gray-800 "
    onClick={leftArrow} />


    {/* Center Images to Show  */}

    {data.image.map((e,i)=>{
      if(showImg === i) {
        return(
          <div key={i} id='dd' className=" flex justify-center 
          items-center w-screen duration-700">
          <img className=" max-w-md max-h-96 mr-40 " src={e} />
          <SlideInfo/>
          </div>
        )
      }
    })}


    {/* Left Arrow  */}
    <ArrowNarrowRightIcon className="absolute right-0 hover:animate-pulse 
    h-8 w-8 text-gray-800 duration-5000"
    onClick={rightArrow} />



   </div>
  )
}