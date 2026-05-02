import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const BRANDS = [
  "Gyproc",
  "Armstrong",
  "Rockwool",
  "UP Twiga",
  "Bison",
  "Ramco",
];

const CATEGORIES = [
  "Gypsum Boards",
  "Ceiling Systems",
  "Ceiling Tiles",
  "Insulation Materials",
  "Cement Boards",
  "Gypsum Products",
];

export default function ProductFilters({
  selectedBrands,
  selectedCategories,
  onBrandChange,
  onCategoryChange,
}) {
  const [expandBrands, setExpandBrands] = useState(true);
  const [expandCategories, setExpandCategories] = useState(true);

  const handleBrandToggle = (brand) => {
    if (selectedBrands.includes(brand)) {
      onBrandChange(selectedBrands.filter((b) => b !== brand));
    } else {
      onBrandChange([...selectedBrands, brand]);
    }
  };

  const handleCategoryToggle = (category) => {
    if (selectedCategories.includes(category)) {
      onCategoryChange(selectedCategories.filter((c) => c !== category));
    } else {
      onCategoryChange([...selectedCategories, category]);
    }
  };

  const handleClearFilters = () => {
    onBrandChange([]);
    onCategoryChange([]);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Filters</h3>
        {(selectedBrands.length > 0 || selectedCategories.length > 0) && (
          <button
            onClick={handleClearFilters}
            className="text-sm text-accent hover:underline mb-4"
          >
            Clear All Filters
          </button>
        )}
      </div>

      {/* Brands Filter */}
      <div className="border-b border-white/10 pb-6">
        <button
          onClick={() => setExpandBrands(!expandBrands)}
          className="w-full flex items-center justify-between mb-4 text-white hover:text-accent transition"
        >
          <span className="font-semibold">Brands</span>
          <FiChevronDown
            className={`transition-transform ${expandBrands ? "rotate-180" : ""}`}
          />
        </button>

        {expandBrands && (
          <div className="space-y-3">
            {BRANDS.map((brand) => (
              <label
                key={brand}
                className="flex items-center cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => handleBrandToggle(brand)}
                  className="w-4 h-4 rounded border border-white/20 bg-transparent 
                  checked:bg-accent checked:border-accent cursor-pointer"
                />
                <span className="ml-3 text-gray-300 group-hover:text-white transition">
                  {brand}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Categories Filter */}
      <div className="border-b border-white/10 pb-6">
        <button
          onClick={() => setExpandCategories(!expandCategories)}
          className="w-full flex items-center justify-between mb-4 text-white hover:text-accent transition"
        >
          <span className="font-semibold">Categories</span>
          <FiChevronDown
            className={`transition-transform ${expandCategories ? "rotate-180" : ""}`}
          />
        </button>

        {expandCategories && (
          <div className="space-y-3">
            {CATEGORIES.map((category) => (
              <label
                key={category}
                className="flex items-center cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryToggle(category)}
                  className="w-4 h-4 rounded border border-white/20 bg-transparent 
                  checked:bg-accent checked:border-accent cursor-pointer"
                />
                <span className="ml-3 text-gray-300 group-hover:text-white transition">
                  {category}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
