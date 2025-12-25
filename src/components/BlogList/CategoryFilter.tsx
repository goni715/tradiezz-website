import { useGetBlogCategoryDropDownQuery } from '@/redux/features/blogCategory/blogCategoryApi';
import React from 'react';
import BlogCategoryLoading from '../loader/BlogCategoryLoading';
import { ICategory } from '@/types/category.type';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';


const CategoryFilter = () => {
  const { data, isLoading, isError } = useGetBlogCategoryDropDownQuery(undefined);
  const categories = data?.data || [];

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 🔹 selected categoryIds from URL
  const selectedCategoryIds = searchParams.getAll('categoryId');

  const toggleCategory = (categoryId: string) => {
    const params = new URLSearchParams(searchParams.toString());

    const existing = params.getAll('categoryId');

    if (existing.includes(categoryId)) {
      // ❌ remove
      const filtered = existing.filter(id => id !== categoryId);
      params.delete('categoryId');
      filtered.forEach(id => params.append('categoryId', id));
    } else {
      // ✅ add
      params.append('categoryId', categoryId);
    }

    // 🔥 reset page on filter change
    params.set('page', '1');

    router.replace(`${pathname}?${params.toString()}`);
  };

  if (isLoading) {
    return <BlogCategoryLoading />
  }

  if (!isLoading && isError) {
    return <h1>Something Went Wrong</h1>
  }


  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">Category</h2>
      <div className="space-y-2">
        {categories.length > 0 ? (
          <>
            {categories?.map((category: ICategory, index: number) => (
              <div key={index} className="flex items-center">
                <label className="flex items-center cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={selectedCategoryIds.includes(category._id)}
                    onChange={() => toggleCategory(category._id)}
                    className="form-checkbox h-5 w-5 text-amber-600 cursor-pointer rounded border-gray-200 focus:ring-amber-500 transition-colors duration-200"
                  />
                  <span className="ml-2 text-gray-700 group-hover:text-amber-600 transition-colors duration-200">
                    {category?.name}
                  </span>
                </label>
              </div>
            ))}
          </>
        ) : (
          <>
            <h1>No categories found</h1>
          </>
        )}
      </div>
    </div>
  );
};

export default CategoryFilter;