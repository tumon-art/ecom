import { Footer } from "../comps/Footer"
import { Announcement } from "../comps/nav/Announcement"
import { Navbar } from "../comps/nav/Navbar"
import { NewsLetter } from "../comps/NewsLetter"
import { Products } from "../comps/Products"

export const ProductList = () => {
  return (
   <>
    <Announcement />
    <Navbar />

    <div>
        <h1 className="H3 ml-6 mt-6"> Dresses </h1>

        {/* === Filters  */}
        <div className="flex justify-between"> 
            <div className=" font-semibold ml-3"> Filter:
            <select defaultValue='' className=" selectBtn">
                <option disabled value=''> Color </option>
                <option> Red </option>
                <option> Green </option>
                <option> Yellow </option>
                <option> Blue </option>
                <option> Orange </option>
            </select> 

            <select defaultValue='' className=" selectBtn">
                <option disabled value=''> Size </option>
                <option> M </option>
                <option> L </option>
                <option> XL </option>
                <option> XXL </option>
                <option> XXXL </option>
            </select>
            </div>

            {/* ----- Sort Products  */}
            <div defaultValue='' className=" font-semibold mr-10"> Sort:
            <select className="selectBtn">
                <option disabled value=''> Newest </option>
                <option> Price (desc) </option>
                <option> Price (asc) </option>
            </select>
            </div>
        </div>











        {/* == Products  */}
        <Products />
    </div>

    <NewsLetter />
    <Footer />
   </>
  )
}