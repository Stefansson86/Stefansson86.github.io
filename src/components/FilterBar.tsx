import React from 'react';
import { Search, X } from 'lucide-react';
import { RecipeCategory } from '../types/recipe';

interface FilterBarProps {
  categories: RecipeCategory[];
  selectedCategory: RecipeCategory;
  onSelectCategory: (category: RecipeCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedTag: string | null;
  onSelectTag: (tag: string | null) => void;
  allTags: string[];
}

export const FilterBar: React.FC<FilterBarProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  selectedTag,
  onSelectTag,
  allTags,
}) => {
  return (
    <div className="space-y-4 mb-8">
      {/* Search Bar & Quick filter container */}
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
        {/* Search Input */}
        <div className="relative flex-1 max-w-xl">
          <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-charcoal-800/40 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Sök recept, råvaror (t.ex. salsiccia, kantareller, lax)..."
            className="w-full pl-11 pr-10 py-3 rounded-2xl bg-white border border-cream-300 shadow-playful-sm text-sm placeholder:text-charcoal-800/40 focus:outline-none focus:ring-2 focus:ring-terracotta-400 focus:border-transparent transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-charcoal-800/40 hover:text-charcoal-800 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Quick Tag Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          <span className="text-xs font-semibold text-charcoal-800/60 uppercase tracking-wider pl-1 hidden lg:inline">
            Filter:
          </span>
          {allTags.slice(0, 5).map((tag) => {
            const isSelected = selectedTag === tag;
            return (
              <button
                key={tag}
                onClick={() => onSelectTag(isSelected ? null : tag)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-terracotta-500 text-white shadow-playful-sm'
                    : 'bg-white hover:bg-cream-200 text-charcoal-800 border border-cream-300'
                }`}
              >
                #{tag}
              </button>
            );
          })}
          {selectedTag && (
            <button
              onClick={() => onSelectTag(null)}
              className="px-2.5 py-1.5 rounded-xl text-xs font-medium text-terracotta-600 hover:bg-terracotta-50 flex items-center gap-1"
            >
              <X className="w-3.5 h-3.5" />
              Rensa
            </button>
          )}
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-cream-300/80 pt-1">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                isSelected
                  ? 'bg-charcoal-800 text-white shadow-playful'
                  : 'bg-cream-200/70 hover:bg-cream-300/80 text-charcoal-800 border border-cream-300/50'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
};
