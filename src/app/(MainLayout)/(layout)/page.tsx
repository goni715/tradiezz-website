import About from "@/components/home/about/About"
import HeroSection from "@/components/home/hero/HeroSection"
import Hiring from "@/components/home/hiring/Hiring"
import New from "@/components/home/New"
import RecentBlogs from "@/components/home/recentBlog/RecentBlogs"

const HomePage = () => {
  return (
    <>
       <HeroSection/>
       <Hiring/>
       <New/>
       {/* <RegisterSection/>
       <PopularCategories/> */}
       <RecentBlogs/>
        <About/>
    </>
  )
}

export default HomePage