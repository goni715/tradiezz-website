import type { IBlog } from "@/types/blog.type"
import { Calendar, Eye, Tag } from "lucide-react";
import moment from "moment";
import Image from "next/image";

interface BlogDetailHeaderProps {
  blog: IBlog
}

export default function BlogDetailHeader({ blog }: BlogDetailHeaderProps) {
  return (
    <header className="w-full text-white">
      {/* Hero Image */}
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-112 w-full rounded-md overflow-hidden">
        <Image width={600} height={400} src={blog.image || "./images/placeholder.png"} alt="blog_title"className="h-full w-full oblect-cover" />
      </div>

      {/* Title and Metadata */}
       <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 bg-slate-700">
        <div className="max-w-3xl mx-auto">
          {/* Category Badge */}
          <div className="flex items-center gap-2 mb-4">
            <Tag className="w-4 h-4 text-cyan-400" />
            <span className="text-sm sm:text-base font-semibold text-cyan-400 uppercase tracking-wide">
              {blog.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-black">{blog.title}</h1>

          {/* Metadata */}
          <div className="flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-base text-gray-700">
            {/* Date */}
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-cyan-400" />
              <span>{moment(blog.createdAt).format('LL')}</span>
            </div>

            {/* Views */}
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-cyan-400" />
              <span>{blog.view.toLocaleString()} views</span>
            </div>

            {/* Last Updated */}
            {blog.updatedAt !== blog.createdAt && (
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                <span>Updated {moment(blog.updatedAt).format('LL')}</span>
              </div>
            )}
          </div>
        </div>
      </div> 
     
    </header>
  )
}
