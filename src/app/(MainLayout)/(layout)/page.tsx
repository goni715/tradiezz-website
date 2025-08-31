import About from "@/components/home/about/About"
import HeroSection from "@/components/home/hero/HeroSection"
import New from "@/components/home/New"
import RecentBlogs from "@/components/home/recentBlog/RecentBlogs"

const HomePage = () => {
  return (
    <>
       <HeroSection/>
       <New/>
       {/* <RegisterSection/>
       <PopularCategories/> */}
       <RecentBlogs/>
        <About/>
    </>
  )
}

export default HomePage