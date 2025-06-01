import React from 'react';
import { Calendar, MessageCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Post } from '@/types/blog.type';

interface FeaturedPostProps {
  post: Post;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-md mb-10 group bg-gradient-to-r from-blue-900 to-gray-900">
      <div className="absolute inset-0 z-0">
        <Image 
          src={post.image} 
          alt={post.title}
          width={600}
          height={600} 
          className="w-full h-full object-cover opacity-40 group-hover:opacity-30 transition-opacity duration-500" 
        />
      </div>
      <div className="relative z-10 p-6 md:p-10 text-white">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-amber-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            {post.category}
          </span>
          <h2 className="text-2xl md:text-4xl font-bold mb-3 leading-tight">
            {post.title}
          </h2>
          <p className="text-gray-200 mb-6 md:text-lg max-w-2xl">
            {post.excerpt}
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6">
            <span className="flex items-center text-gray-300">
              <Calendar size={16} className="mr-2" />
              {post.date}
            </span>
            <span className="flex items-center text-gray-300">
              <MessageCircle size={16} className="mr-2" />
              {post.comments} Comments
            </span>
          </div>
          <a
            href={`/post/${post.id}`}
            className="inline-flex items-center bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 group"
          >
            Read Article
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;