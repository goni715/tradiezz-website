import React from 'react';
import CategoryCard from './CategoryCard';
import { ICategory } from '@/types/category.type';

type TProps = {
  categories: ICategory[]
}

const PopularCategories = ( { categories } : TProps) => {
  
  return (
    <>
     <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-10">Popular Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories?.map((category: ICategory, index:number) => (
          <CategoryCard
            key={index}
            category={category}
          />
        ))}
      </div>
    </section>
    </>
  )
}

export default PopularCategories