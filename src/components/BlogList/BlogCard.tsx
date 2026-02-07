import React from 'react';
import { Calendar, ArrowRight, Eye } from 'lucide-react';
import Image from 'next/image';
import { IBlog } from '@/types/blog.type';
import moment from "moment";
import Link from 'next/link';

interface PostCardProps {
  blog: IBlog;
}

const BlogCard: React.FC<PostCardProps> = ({ blog }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 h-full flex flex-col">
      <div className="relative overflow-hidden aspect-video">
        <Image
          src={blog.image} 
          alt="blog_img" 
          width={600}
          height={600}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
        />
        <div className="absolute top-3 left-3">
          <span className="inline-block bg-amber-500 text-white text-xs font-semibold px-2 py-1 rounded">
            {blog.category}
          </span>
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center text-sm text-gray-500 space-x-4 mb-3">
          <span className="flex items-center">
            <Calendar size={14} className="mr-1" />
            {moment(blog.createdAt).format('ll')}
          </span>
          <span className="flex items-center">
            <Eye size={14} className="mr-1" />
            {blog.view}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 hover:text-amber-600 transition-colors duration-200">
          <a href={`/blogs/${blog._id}`}>{blog.title}</a>
        </h3>
        <div className="text-gray-600 line-clamp-3 mb-2" dangerouslySetInnerHTML={{ __html: blog.description }} />
        {/* <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
          {post.excerpt}
        </p> */}
        <Link
          href={`/blogs/${blog._id}`}
          className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium transition-colors duration-200 group mt-auto"
        >
          Read more 
          <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;