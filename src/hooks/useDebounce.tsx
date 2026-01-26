import { useEffect, useState } from "react";



const useDebounce = ( searchQuery : string) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      //setCurrentPage(1);
      setSearchTerm(searchQuery);
    }, 600);
    return () => clearTimeout(timeoutId); // cleanup for debounce
  }, [searchQuery]);

  return {
    searchTerm,
  };
};

export default useDebounce;
