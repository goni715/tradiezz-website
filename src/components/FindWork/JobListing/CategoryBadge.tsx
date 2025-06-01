import React from 'react';

type CategoryBadgeProps = {
  category: string;
};

const CategoryBadge: React.FC<CategoryBadgeProps> = ({ category }) => {
  const getColorClasses = () => {
    switch(category) {
      case 'Electrician':
        return 'bg-blue-100 text-blue-800';
      case 'Plumber':
        return 'bg-amber-100 text-amber-800';
      case 'Carpentar':
        return 'bg-emerald-100 text-emerald-800';
      case 'Painter':
        return 'bg-purple-100 text-purple-800';
      case 'Mason':
        return 'bg-pink-100 text-pink-800';
      case 'Welder':
        return 'bg-orange-100 text-orange-800';
      case 'Roofer':
        return 'bg-indigo-100 text-indigo-800';
      case 'Tile Setter':
        return 'bg-teal-100 text-teal-800';
      case 'content':
        return 'bg-rose-100 text-rose-800';
      case 'developer':
        return 'bg-sky-100 text-sky-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${getColorClasses()}`}>
      {category}
    </span>
  );
};

export default CategoryBadge;