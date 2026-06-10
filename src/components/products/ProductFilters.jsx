import { useState, memo } from "react";
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

function ProductFilters({
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
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-4">Filters</h3>
        {(selectedBrands.length > 0 || selectedCategories.length > 0) && (
          <button
            onClick={handleClearFilters}
            className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-200"
          >
            Clear All Filters
          </button>
        )}
      </div>

      {/* Brands Filter */}
      <div className="border-b border-gray-200 pb-6">
        <button
          onClick={() => setExpandBrands(!expandBrands)}
          className="w-full flex items-center justify-between mb-3 text-gray-900 hover:text-blue-600 transition-colors duration-200"
        >
          <span className="font-semibold text-sm">Brands</span>
          <FiChevronDown
            className={`transition-transform ${expandBrands ? "rotate-180" : ""}`}
          />
        </button>

        {expandBrands && (
          <div className="space-y-2.5">
            {BRANDS.map((brand) => (
              <label
                key={brand}
                className="flex items-center cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => handleBrandToggle(brand)}
                  className="w-4 h-4 rounded border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 cursor-pointer accent-blue-600"
                />
                <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                  {brand}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Categories Filter */}
      <div className="border-b border-gray-200 pb-6">
        <button
          onClick={() => setExpandCategories(!expandCategories)}
          className="w-full flex items-center justify-between mb-3 text-gray-900 hover:text-blue-600 transition-colors duration-200"
        >
          <span className="font-semibold text-sm">Categories</span>
          <FiChevronDown
            className={`transition-transform ${expandCategories ? "rotate-180" : ""}`}
          />
        </button>

        {expandCategories && (
          <div className="space-y-2.5">
            {CATEGORIES.map((category) => (
              <label
                key={category}
                className="flex items-center cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryToggle(category)}
                  className="w-4 h-4 rounded border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 cursor-pointer accent-blue-600"
                />
                <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
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

export default memo(ProductFilters);
