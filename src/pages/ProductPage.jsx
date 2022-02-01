import { useState } from "react"
import { Footer } from "../comps/Footer"
import { Announcement } from "../comps/nav/Announcement"
import { Navbar } from "../comps/nav/Navbar"
import { NewsLetter } from "../comps/NewsLetter"

// Single Product Page 
export const ProductPage = () => {
  // Product count to buy
  const [count,setcount] = useState(1)
  return (
   <>
    <Announcement />
    <Navbar />

    <div className="flex mt-10">
      {/* ==== Sect 1 */}
      <div className=" w-1/2">
        <img className="" 
        src="https://ae01.alicdn.com/kf/HTB14Or1QFXXXXbqaXXXq6xXFXXXL/Men-Denim-Harem-Jumpsuit-Street-Fashion-Casual-A-Piece-Short-Sleeve-Short-Jeans-Overalls-Male-Hip.jpg" />
      </div>
      
      {/* ==== Sect 2 */}
      <div className=" w-1/2 border-l-4 px-2">
        <h3 className="H3"> Denim Jumpsuit</h3>
        <p className=" w-2/3 font-light mb-10">
          Lorem ipsum dolor sit amet consectetur, 
          adipisicing elit. Maiores officia cumque 
          natus suscipit dolorum doloribus reiciendis 
          eum voluptatum labore, optio accusantium eveniet
          perferendis amet saepe assumenda 
          adipisci aperiam cum commodi?
        </p>

        {/* ====Price Tag  */}
        <span className=" text-4xl font-light"> $ 30 </span>

        {/* === Color and Size Selectior  */}
        <div className="flex  mt-5">
          {/* Color Selector   */}
          <div className="flex items-center">
            <p> Color</p>
            <span className="colorCircle bg-gray-900"> </span>
            <span className="colorCircle bg-blue-800"> </span>
            <span className="colorCircle bg-blue-500"> </span>
          </div>

          {/* size Selectior */}
          <div>
          <select defaultValue='' className=" selectBtn ml-10">
                <option disabled value=''> Size </option>
                <option> M </option>
                <option> L </option>
                <option> XL </option>
                <option> XXL </option>
                <option> XXXL </option>
            </select>
          </div>

        </div>

        {/* /// Count and Add to Cart Button */}
      </div>
    </div>
    
    <NewsLetter />
    <Footer />
   </>
  )
}