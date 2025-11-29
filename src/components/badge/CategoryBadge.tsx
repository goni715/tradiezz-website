import getCategoryColor from '@/utils/getCategoryColor';
import React from 'react';

type CategoryBadgeProps = {
  category: string;
};

const CategoryBadge: React.FC<CategoryBadgeProps> = ({ category }) => {
  return (
    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${getCategoryColor(category)}`}>
      {category}
    </span>
  );
};

export default CategoryBadge;