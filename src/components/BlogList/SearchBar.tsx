import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

const SearchBar: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('search', term)
      params.set('page', '1')
    } else {
      params.delete('search')
    }

    replace(`${pathname}?${params.toString()}`)
  }, 300);

  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">Search</h2>
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchParams.get('search')?.toString()}
          className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
        />
      </div>
    </div>
  );
};

export default SearchBar;