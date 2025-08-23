"use client";

import BlogPagination from "@/components/BlogList/BlogPagination";
import CategoryFilter from "@/components/BlogList/CategoryFilter";
import FeaturedPost from "@/components/BlogList/FeaturedPost";
import PostCard from "@/components/BlogList/PostCard";
import RecentPosts from "@/components/BlogList/RecentPosts";
import SearchBar from "@/components/BlogList/SearchBar";
import { posts } from "@/data/blog.data";
import { Category } from "@/types/blog.type";
import { useState } from "react";

const BlogListPage = () => {
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  // const [searchTerm, setSearchTerm] = useState("");
  const totalPages = 5;

  const handleCategoryChange = (category: Category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const filteredPosts =
    selectedCategories.length === 0
      ? posts
      : posts.filter((post) =>
          selectedCategories.includes(post.category as Category)
        );

  return (
    <>
      <main className="flex-grow">
        {/* Featured Post */}
        <section className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <FeaturedPost post={posts[0]} />
        </section>

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4 space-y-6">
              <SearchBar />
              <CategoryFilter
                selectedCategories={selectedCategories}
                onCategoryChange={handleCategoryChange}
              />
              <RecentPosts posts={posts} />
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                Latest Articles
              </h1>

              {filteredPosts.length === 0 ? (
                <div className="bg-white p-8 rounded-lg shadow text-center">
                  <p className="text-gray-600">
                    No posts found. Try selecting different categories.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredPosts.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>
              )}

            <div className="mt-10">
                <BlogPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogListPage;
