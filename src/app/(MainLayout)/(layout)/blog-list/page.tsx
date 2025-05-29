"use client"

import { useState } from "react"
import Image from "next/image"
import BlogCard from "@/components/blog/BlogCard"
import { IBlog } from "@/types/blog.type"

const BlogListPage = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const categories = [
    { id: 1, name: "Graphics & Design", checked: false },
    { id: 2, name: "Code & Programming", checked: true },
    { id: 3, name: "Digital Marketing", checked: false },
    { id: 4, name: "Video & Animation", checked: false },
    { id: 5, name: "Music & Audio", checked: false },
    { id: 6, name: "Finance & Accounting", checked: false },
    { id: 7, name: "Health & Care", checked: false },
    { id: 8, name: "Data Science", checked: false },
  ]

  const recentPosts = [
    {
      id: 1,
      title: "Integer volutpat fringilla ipsum, nec tempor risus facilisis eget.",
      date: "Nov 12, 2021",
      comments: 25,
      image: "/images/blogs/blog1.png",
    },
    {
      id: 2,
      title: "Integer volutpat fringilla ipsum, nec tempor risus facilisis eget.",
      date: "Nov 12, 2021",
      comments: 25,
      image: "/images/blogs/blog2.png",
    },
    {
      id: 3,
      title: "Integer volutpat fringilla ipsum, nec tempor risus facilisis eget.",
      date: "Nov 12, 2021",
      comments: 25,
      image: "/images/blogs/blog3.png",
    },
  ]

  const galleryImages = [
    "/images/blogs/blog3.png",
    "/images/blogs/blog3.png",
    "/images/blogs/blog3.png",
    "/images/blogs/blog3.png",
    "/images/blogs/blog3.png",
    "/images/blogs/blog3.png",
  ];

  const popularTags = ["Design", "Programming", "Health & Care", "Motion Design", "Photography", "Politics"]

  const blogPosts: IBlog[] = [
    {
      id: 1,
      title: "Proin sit amet massa eget odio consectetur ultricies.",
      date: "Nov 12, 2021",
      comments: 25,
      image: "/images/blogs/blog1.png",
      excerpt:
        "Integer imperdiet mauris eget nisi ultricies, quis hendrerit est consequat. Vivamus et vulputat odio. Maecenas porta erat sed massa bibendum pellentesque.",
    },
    {
      id: 2,
      title: "Praesent tristique sagittis malesuada. Nulla vulputate pretium",
      date: "Nov 12, 2021",
      comments: 25,
      image: "/images/blogs/blog2.png",
      excerpt:
        "Integer imperdiet mauris eget nisi ultricies, quis hendrerit est consequat. Vivamus et vulputat odio. Maecenas porta erat sed massa bibendum pellentesque.",
    },
    {
      id: 3,
      title: "Integer volutpat fringilla ipsum, nec tempor risus facilisis eget.",
      date: "Nov 12, 2021",
      comments: 25,
      image: "/images/blogs/blog3.png",
      excerpt:
        "Integer imperdiet mauris eget nisi ultricies, quis hendrerit est consequat. Vivamus et vulputat odio. Maecenas porta erat sed massa bibendum pellentesque.",
    },
    {
      id: 4,
      title: "Praesent hendrerit diam ac metus finibus, id vehicula velit suscipit.",
      date: "Nov 12, 2021",
      comments: 25,
      image: "/images/blogs/blog4.png",
      excerpt:
        "Integer imperdiet mauris eget nisi ultricies, quis hendrerit est consequat. Vivamus et vulputat odio. Maecenas porta erat sed massa bibendum pellentesque.",
    },
    {
      id: 5,
      title: "Nullam et est vel eros sodales sollicitudin.",
      date: "Nov 12, 2021",
      comments: 25,
      image: "/images/blogs/blog1.png",
      excerpt:
        "Integer imperdiet mauris eget nisi ultricies, quis hendrerit est consequat. Vivamus et vulputat odio. Maecenas porta erat sed massa bibendum pellentesque.",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 space-y-6">
          {/* Search */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h2 className="font-medium mb-3">Search</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-blue-500 py-2 px-3 pl-8 text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 absolute left-2.5 top-2.5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Category */}
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
              <h2 className="font-medium">Category</h2>
            </div>
            <div className={`mt-3 space-y-2 ${isOpen ? "block" : "block"}`}>
              {categories.map((category) => (
                <div key={category.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`category-${category.id}`}
                    className="h-4 w-4 rounded border-gray-300 text-yellow-500 focus:ring-yellow-500"
                    defaultChecked={category.checked}
                  />
                  <label
                    htmlFor={`category-${category.id}`}
                    className={`ml-2 text-sm ${category.checked ? "font-medium" : ""}`}
                  >
                    {category.name}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Post */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h2 className="font-medium mb-3">Recent Post</h2>
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <div key={post.id} className="flex gap-3">
                  <div className="flex-shrink-0">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={80}
                      height={60}
                      className="rounded object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 mb-1">
                      {post.date} • {post.comments} Comments
                    </div>
                    <h3 className="text-sm leading-tight">{post.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h2 className="font-medium mb-3">Gallery</h2>
            <div className="grid grid-cols-3 gap-2">
              {galleryImages.map((image, index) => (
                <div key={index} className="aspect-square">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Gallery image ${index + 1}`}
                    width={80}
                    height={80}
                    className="rounded object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Popular Tag */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h2 className="font-medium mb-3">Popular Tag</h2>
            <div className="flex flex-wrap gap-2">
              {popularTags.map((tag, index) => (
                <span
                  key={index}
                  className={`text-xs px-3 py-1 rounded-full ${
                    tag === "Programming" ? "bg-yellow-500 text-white" : "bg-gray-100"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-3/4 space-y-6">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogListPage;
