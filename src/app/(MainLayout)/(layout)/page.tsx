import About from "@/components/home/about/About"
import HeroSection from "@/components/home/hero/HeroSection"
import PopularCategories from "@/components/home/PopularCategory/PopularCategories"
import RecentBlogs from "@/components/home/recentBlog/RecentBlogs"
import RegisterSection from "@/components/home/register/RegisterSection"

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <RegisterSection />
      <PopularCategories />
      <RecentBlogs />
      <About />
    </>
  )
}

export default HomePage