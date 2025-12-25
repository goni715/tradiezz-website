import { BlogList } from "@/components/BlogList/BlogList";
import FeaturedBlog from "@/components/BlogList/FeaturedBlog";
import { BASE_URL } from "@/constant/global.constant";

async function getFeaturedBlog() {
  const res = await fetch(`${BASE_URL}/blog/get-user-blogs?page=1&limit=1`, {
    cache: 'no-store'
  });

  const data = await res.json();
  const blogs = data?.data || [];
  return blogs[0];
}

async function getBlogs(
  page: number,
  limit: number,
  search: string,
  categoryIds: string[]
) {
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });

  if (search) {
    params.set('searchTerm', search);
  }

   categoryIds.forEach(id => {
    params.append('categoryId', id);
  });

  const res = await fetch(
    `${BASE_URL}/blog/get-user-blogs?${params.toString()}`,
    { cache: 'no-store' }
  );

  const data = await res.json();
  const blogs = data?.data || [];
  return blogs;
}




type BlogListPageProps = {
  searchParams: {
    page?: string;
    limit?: string;
    search?: string;
    categoryId: string[]
  };
};

const BlogListPage = async ({ searchParams }: BlogListPageProps) => {
  //const resolvedSearchParams = await searchParams;
  // const page = Number(resolvedSearchParams.page ?? 1);
  // const limit = Number(resolvedSearchParams.limit ?? 5);
  // const search = resolvedSearchParams.search ?? '';
  //const blogs = await getBlogs(page, limit, search);
  const { page = '1', limit = '5', search = '', categoryId = [] } =
    await searchParams;

  const categoryIds = Array.isArray(categoryId)
    ? categoryId
    : [categoryId];

  const blog = await getFeaturedBlog();
  const blogs = await getBlogs(
    Number(page),
    Number(limit),
    search,
    categoryIds
  );

  return (
    <>
      <main className="grow">
        <FeaturedBlog blog={blog} />
        <BlogList blogs={blogs}/>
      </main>
    </>
  );
};

export default BlogListPage;
