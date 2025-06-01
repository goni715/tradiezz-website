import HeroSection from "@/components/home/hero/HeroSection"
import New from "@/components/home/New"
import Trending from "@/components/home/trending/Trending"
import Who from "@/components/home/who/Who"

const HomePage = () => {
  return (
    <>
       <HeroSection/>
       {/* <StatsSection/> */}
       <New/>
       {/* <RegisterSection/>
       <PopularCategories/> */}
       <Trending/>
       <Who/>
    </>
  )
}

export default HomePage