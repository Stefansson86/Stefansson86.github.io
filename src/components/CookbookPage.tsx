import React from 'react';
import { FilterBar } from './FilterBar';
import { RecipeGrid } from './RecipeGrid';
import { Recipe, RecipeCategory } from '../types/recipe';

interface CookbookPageProps {
  recipes: Recipe[];
  filteredRecipes: Recipe[];
  categories: RecipeCategory[];
  selectedCategory: RecipeCategory;
  onSelectCategory: (category: RecipeCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedTag: string | null;
  onSelectTag: (tag: string | null) => void;
  allTags: string[];
  onSelectRecipe: (recipe: Recipe) => void;
  onResetFilters: () => void;
}

export const CookbookPage: React.FC<CookbookPageProps> = ({
  recipes,
  filteredRecipes,
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  selectedTag,
  onSelectTag,
  allTags,
  onSelectRecipe,
  onResetFilters,
}) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Cookbook Header */}
      <div className="pb-4 border-b border-cream-300">
        <div className="space-y-1">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-800">
            Kokboken
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-800/70">
            Sparade favoriter, matharmonisering och smarta mått ({filteredRecipes.length} av {recipes.length} recept).
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <FilterBar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={onSelectCategory}
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        selectedTag={selectedTag}
        onSelectTag={onSelectTag}
        allTags={allTags}
      />

      {/* Recipe Grid */}
      <RecipeGrid
        recipes={filteredRecipes}
        onSelectRecipe={onSelectRecipe}
        onResetFilters={onResetFilters}
      />
    </div>
  );
};
