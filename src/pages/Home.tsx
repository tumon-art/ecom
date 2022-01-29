import { Announcement } from "../comps/nav/Announcement"
import { Navbar } from "../comps/nav/Navbar"
import { Slider } from "../comps/mainSlide/Slider"
import { Category } from "../comps/Category"
import { Products } from "../comps/Products"
import { NewsLetter } from "../comps/NewsLetter"
import { Footer } from "../comps/Footer"

export const Home = () => {
  return (
   <div className="grid justify-center">
   <Announcement />
   <Navbar />
   <Slider />
   <Category />
   <Products />
   <NewsLetter />
   <Footer />
   </div>
  )
}