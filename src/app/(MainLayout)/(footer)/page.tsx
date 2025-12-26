import About from "@/components/home/about/About"
import HeroSection from "@/components/home/hero/HeroSection"
import PopularCategories from "@/components/home/PopularCategory/PopularCategories"
import RecentBlogs from "@/components/home/recentBlog/RecentBlogs"
import RegisterSection from "@/components/home/register/RegisterSection"
import { BASE_URL } from "@/constant/global.constant"


async function getCategories() {
  const res = await fetch(`${BASE_URL}/category/get-category-drop-down`, {
    next: {
      revalidate: 30, // cache 30 seconds
      tags: ['category'], // optional, invalidate with tag
    },
  });
  const data = await res.json();
  return data?.data || [];
}


async function getRecentBlogs() {
  const res = await fetch(`${BASE_URL}/blog/get-user-blogs?page=1&limit=6`, {
    cache: 'no-store'
  });
  const data = await res.json();
  const blogs = data?.data || [];
  return blogs;
}

const HomePage = async () => {
  const categories = await getCategories();
  const recentBlogs = await getRecentBlogs();



  return (
    <>
      <HeroSection />
      <RegisterSection />
      <PopularCategories categories={categories}/>
      <RecentBlogs blogs={recentBlogs}/>
      <About />
    </>
  )
}

export default HomePage