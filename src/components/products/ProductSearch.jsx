import { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";

export default function ProductSearch({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  const handleClear = () => {
    setSearchTerm("");
    onSearch("");
  };

  return (
    <div className="relative">
      <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
      <input
        type="text"
        placeholder="Search products by name, brand, or category..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full pl-12 pr-12 py-3 bg-white/[0.05] border border-white/10 
        rounded-lg text-white placeholder-gray-500 focus:outline-none 
        focus:border-accent/50 focus:bg-white/[0.08] transition-all"
      />
      {searchTerm && (
        <button
          onClick={handleClear}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition"
        >
          <FiX className="text-lg" />
        </button>
      )}
    </div>
  );
}
