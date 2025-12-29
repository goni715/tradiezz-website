import React from 'react';
import { ArrowRight, Calendar, Eye } from 'lucide-react';
import Image from 'next/image';
import { IBlog } from '@/types/blog.type';
import moment from 'moment';

interface TProps {
  blog: IBlog;
}

const FeaturedBlog: React.FC<TProps> = ({ blog }) => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-8">
        <div className="relative rounded-xl overflow-hidden shadow-md mb-10 group bg-linear-to-r from-blue-900 to-gray-900">
          <div className="absolute inset-0 z-0">
            <Image
              src={blog.image}
              alt="blog_img"
              width={600}
              height={600}
              className="w-full h-full object-cover opacity-40 group-hover:opacity-30 transition-opacity duration-500"
            />
          </div>
          <div className="relative z-10 p-6 md:p-10 text-white">
            <div className="max-w-3xl mx-auto">
              <span className="inline-block bg-amber-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                {blog.category}
              </span>
              <h2 className="text-2xl md:text-4xl font-bold mb-3 leading-tight">
                {blog.title}
              </h2>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6">
                <span className="flex items-center text-gray-300">
                  <Calendar size={16} className="mr-2" />
                  {moment(blog.createdAt).format('ll')}
                </span>
                <span className="flex items-center">
                  <Eye size={14} className="mr-1" />
                  {blog.view}
                </span>
              </div> 
              <a
                href={`/blogs/${blog._id}`}
                className="inline-flex items-center bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 group"
              >
                Read Article
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedBlog;