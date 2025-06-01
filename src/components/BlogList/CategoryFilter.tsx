import { Category } from '@/types/blog.type';
import React from 'react';

interface CategoryFilterProps {
  selectedCategories: Category[];
  onCategoryChange: (category: Category) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  selectedCategories, 
  onCategoryChange 
}) => {
  const categories: Category[] = [
    'Industry Insights',
    'Career & Skills',
    'Business & Hiring',
    'Mindset & Growth',
    'Real Stories'
  ];

  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">Category</h2>
      <div className="space-y-2">
        {categories.map((category) => (
          <div key={category} className="flex items-center">
            <label className="flex items-center cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => onCategoryChange(category)}
                className="form-checkbox h-5 w-5 text-amber-600 rounded border-gray-300 focus:ring-amber-500 transition-colors duration-200"
              />
              <span className="ml-2 text-gray-700 group-hover:text-amber-600 transition-colors duration-200">
                {category}
              </span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;