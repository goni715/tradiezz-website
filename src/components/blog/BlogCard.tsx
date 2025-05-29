"use client";
import { IBlog } from "@/types/blog.type";
import Image from "next/image";

const BlogCard = ({ post }: {post: IBlog}) => {
  return (
    <>
      <div className="border rounded-lg overflow-hidden flex flex-col md:flex-row p-4 border-gray-200 hover:shadow-md">
        <div className="md:w-2/5 h-48 md:h-auto relative">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4 md:p-6 md:w-3/5">
          <div className="flex items-center text-xs text-gray-500 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {post.date}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-3 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
            {post.comments} Comments
          </div>
          <h2 className="text-lg font-medium mb-2">{post.title}</h2>
          <p className="text-sm text-gray-600 mb-3">{post.excerpt}</p>
          <div className="flex items-center text-sm text-blue-500 cursor-pointer">
            <span>Read more</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
