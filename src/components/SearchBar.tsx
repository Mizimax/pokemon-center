import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    onSearch(query);
  }, [query]);

  return (
    <div className="flex items-center border px-4 py-2 rounded">
      <FiSearch className="mr-2 text-gray-500" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by name"
        className="border-none outline-none bg-transparent text-white w-full"
      />
    </div>
  );
};

export default SearchBar;
