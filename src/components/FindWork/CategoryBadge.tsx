import React from 'react';

type CategoryBadgeProps = {
  category: string;
};

const CategoryBadge: React.FC<CategoryBadgeProps> = ({ category }) => {
  const getColorClasses = () => {
    switch(category) {
      case 'Sales & Marketing':
        return 'bg-blue-100 text-blue-800';
      case 'Office & IT Support':
        return 'bg-amber-100 text-amber-800';
      case 'Supply Chain & Logistics':
        return 'bg-emerald-100 text-emerald-800';
      case 'Leadership & Management':
        return 'bg-purple-100 text-purple-800';
      case 'QHSE (Quality, Health, Safety & Environment)':
        return 'bg-pink-100 text-pink-800';
      case 'Engineering':
        return 'bg-orange-100 text-orange-800';
      case 'Manufacturing & Production':
        return 'bg-indigo-100 text-indigo-800';
      case 'Apprenticeships & Graduates':
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