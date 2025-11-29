import About from "@/components/home/about/About"
import HeroSection from "@/components/home/hero/HeroSection"
import PopularCategories from "@/components/home/PopularCategory/PopularCategories"
import RecentBlogs from "@/components/home/recentBlog/RecentBlogs"
import RegisterSection from "@/components/home/register/RegisterSection"
import { IBlog } from "@/types/blog.type"
import cleanHTML from "@/utils/cleanHTML"

async function getCategories() {
  const res = await fetch(`https://tradiezz-backend.vercel.app/api/v1/category/get-category-drop-down`, {
    cache: 'no-store'
  });
  const data = await res.json();
  return data?.data || [];
}


async function getRecentBlogs() {
  const res = await fetch(`https://tradiezz-backend.vercel.app/api/v1/blog/get-user-blogs?page=1&limit=6`, {
    cache: 'no-store'
  });
  const data = await res.json();
  const blogs = data?.data || [];
  return blogs.map((blog: IBlog) => ({
    ...blog,
    description: cleanHTML(blog.description)
  }));
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