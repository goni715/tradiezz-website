import About from "@/components/home/about/About"
import HeroSection from "@/components/home/hero/HeroSection"
import New from "@/components/home/New"

const HomePage = () => {
  return (
    <>
       <HeroSection/>
       <New/>
       {/* <RegisterSection/>
       <PopularCategories/> */}
       <About/>
    </>
  )
}

export default HomePage