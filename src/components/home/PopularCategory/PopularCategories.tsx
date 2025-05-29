import React from 'react';
import CategoryCard from './CategoryCard';

const categories = [
    {
      name: 'Water Supply',
      positions: 357,
      icon: '/images/icons/water.png',
    },
    {
      name: 'Kitchen Setup',
      positions: 312,
      icon: '/images/icons/kitchen.png',
    },
    {
      name: 'Gas Connection',
      positions: 297,
      icon: '/images/icons/fire.png',
    },
    {
      name: 'Masonry',
      positions: 247,
      icon: '/images/icons/fire.png',
    },
    {
        name: 'Water Supply',
        positions: 357,
        icon: '/images/icons/water.png',
      },
      {
        name: 'Kitchen Setup',
        positions: 312,
        icon: '/images/icons/kitchen.png',
      },
      {
        name: 'Gas Connection',
        positions: 297,
        icon: '/images/icons/fire.png',
      },
      {
        name: 'Masonry',
        positions: 247,
        icon: '/images/icons/fire.png',
      },
  ];
  
 

const PopularCategories = () => {
  return (
    <>
     <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-10">Popular Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            icon={category.icon}
            name={category.name}
            positions={category.positions}
          />
        ))}
      </div>
    </section>
    </>
  )
}

export default PopularCategories