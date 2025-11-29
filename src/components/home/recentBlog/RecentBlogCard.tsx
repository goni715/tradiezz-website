"use client";
import Image from "next/image";
import { motion } from "framer-motion"
import Link from "next/link";
import { IBlog } from "@/types/blog.type";
import getCategoryColor from "@/utils/getCategoryColor";
import moment from "moment";


const RecentBlogCard = ({ blog }: { blog: IBlog }) => {
  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={blog.image || "/placeholder.svg"}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-700 hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 w-full p-4 flex justify-between items-center">
          <span className={`text-xs font-medium px-3 py-1 rounded-full ${getCategoryColor(blog.categoryId)}`}>
            {blog.category}
          </span>
          <div className="flex items-center text-white text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1"
            >
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            {blog.view}
          </div>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 line-clamp-2 text-gray-900">{blog.title}</h3>
        <div className="text-gray-600 line-clamp-3" dangerouslySetInnerHTML={{ __html: blog.description }} />

        <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
          <div className="text-xs text-gray-500">
            <span className="font-medium text-gray-700">• {moment(blog.createdAt).format('MMMM Do YYYY')} </span>
          </div>
          <Link
            href={`/blogs/${blog._id}`}
            className="text-sm font-medium text-brand-color flex items-center group"
          >
            Read more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1 transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default RecentBlogCard;