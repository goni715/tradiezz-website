import HeroSection from "@/components/home/hero/HeroSection"
import PopularCategories from "@/components/home/PopularCategory/PopularCategories"
import RegisterSection from "@/components/home/register/RegisterSection"
import StatsSection from "@/components/home/stats/StatsSection"
import Trending from "@/components/home/trending/Trending"
import Who from "@/components/home/who/Who"

const HomePage = () => {
  return (
    <>
       <HeroSection/>
       <StatsSection/>
       <RegisterSection/>
       <PopularCategories/>
       <Trending/>
       <Who/>
    </>
  )
}

export default HomePage