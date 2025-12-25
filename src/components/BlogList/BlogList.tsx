"use client"
import React from 'react'
import SearchBar from './SearchBar'
import CategoryFilter from './CategoryFilter'
import PaginationControls from './PaginationControls';
import { IBlog } from '@/types/blog.type'
import BlogCard from './BlogCard';

type TProps = {
    blogs: IBlog[]
}

export const BlogList = ( { blogs }: TProps) => {
    
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <div className="lg:w-1/4 space-y-6">
                        <SearchBar />
                        <CategoryFilter/>
                    </div>
                    <div className="lg:w-3/4">
                        <h1 className="text-3xl font-bold text-gray-900 mb-6">
                            Latest Articles
                        </h1>
                         {blogs.length === 0 ? (
                            <div className="bg-white p-8 rounded-lg shadow text-center">
                                <p className="text-gray-600">
                                    No posts found. Try selecting different categories.
                                </p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {blogs.map((blog, index) => (
                                    <BlogCard key={index} blog={blog} />
                                ))}
                            </div>
                        )} 

                        {/* {posts.length === 0 ? (
                            <div className="bg-white p-8 rounded-lg shadow text-center">
                                <p className="text-gray-600">
                                    No posts found. Try selecting different categories.
                                </p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {posts.map((post) => (
                                    <PostCard key={post.id} post={post} />
                                ))}
                            </div>
                        )} */}

                        {/*<div className="mt-10">
                            <BlogPagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={setCurrentPage}
                            />
                        </div> */}
                        <PaginationControls/>
                    </div>
                </div>
            </div>
        </>
    )
}
