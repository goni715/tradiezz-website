import React from 'react';
import { Calendar, MessageCircle } from 'lucide-react';
import { Post } from '@/types/blog.type';
import Image from 'next/image';

interface RecentPostsProps {
  posts: Post[];
}

const RecentPosts: React.FC<RecentPostsProps> = ({ posts }) => {
  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">Recent Posts</h2>
      <div className="space-y-4">
        {posts.slice(0, 3).map((post) => (
          <a 
            key={post.id}
            href={`/post/${post.id}`}
            className="flex space-x-3 group"
          >
            <div className="flex-shrink-0 w-16 h-16 overflow-hidden rounded">
              <Image 
                src={post.image} 
                alt={post.title}
                width={600}
                height={600}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-gray-800 line-clamp-2 group-hover:text-amber-600 transition-colors duration-200">
                {post.title}
              </h3>
              <div className="flex items-center mt-1 text-xs text-gray-500">
                <span className="flex items-center">
                  <Calendar size={12} className="mr-1" />
                  {post.date}
                </span>
                <span className="mx-1">•</span>
                <span className="flex items-center">
                  <MessageCircle size={12} className="mr-1" />
                  {post.comments} Comments
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;