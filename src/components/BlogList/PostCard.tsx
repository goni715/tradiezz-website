import React from 'react';
import { Calendar, MessageCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Post } from '@/types/blog.type';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 h-full flex flex-col">
      <div className="relative overflow-hidden aspect-video">
        <Image
          src={post.image} 
          alt={post.title} 
          width={600}
          height={600}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
        />
        <div className="absolute top-3 left-3">
          <span className="inline-block bg-amber-500 text-white text-xs font-semibold px-2 py-1 rounded">
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center text-sm text-gray-500 space-x-4 mb-3">
          <span className="flex items-center">
            <Calendar size={14} className="mr-1" />
            {post.date}
          </span>
          <span className="flex items-center">
            <MessageCircle size={14} className="mr-1" />
            {post.comments} Comments
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 hover:text-amber-600 transition-colors duration-200">
          <a href={`/post/${post.id}`}>{post.title}</a>
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
          {post.excerpt}
        </p>
        <a
          href={`/post/${post.id}`}
          className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium transition-colors duration-200 group mt-auto"
        >
          Read more 
          <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-200" />
        </a>
      </div>
    </div>
  );
};

export default PostCard;