import BlogDetailContent from "@/components/blogDetail/BlogDetailContent";
import BlogDetailHeader from "@/components/blogDetail/BlogDetailHeader";
import { BASE_URL } from "@/constant/global.constant";

async function getSingleBlog(id: string) {
  const res = await fetch(`${BASE_URL}/blog/get-single-blog/${id}`, {
    cache: 'no-store'
  });

  const data = await res.json();
  const blog = data?.data || {};
  return blog;
}


interface TProps {
  params: Promise<{
    id: string;
  }>;
}


const BlogDetailsPage = async ({ params }: TProps) => {
const { id } = await params;
const blog = await getSingleBlog(id);
  return (
    <>
      <main className="min-h-full max-w-7xl mx-auto bg-white px-4 md:px-8 py-16 rounded-md">
        <BlogDetailHeader blog={blog} />
        <BlogDetailContent blog={blog} />
      </main>
    </>
  )
}

export default BlogDetailsPage