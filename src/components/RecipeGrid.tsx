import React from 'react';
import { Recipe } from '../types/recipe';
import { RecipeCard } from './RecipeCard';

interface RecipeGridProps {
  recipes: Recipe[];
  onSelectRecipe: (recipe: Recipe) => void;
  onResetFilters: () => void;
}

export const RecipeGrid: React.FC<RecipeGridProps> = ({
  recipes,
  onSelectRecipe,
  onResetFilters,
}) => {
  if (recipes.length === 0) {
    return (
      <div className="bg-white rounded-3xl border border-cream-300 p-12 text-center max-w-lg mx-auto shadow-playful my-8">
        <div className="w-16 h-16 rounded-full bg-cream-200 text-terracotta-500 flex items-center justify-center mx-auto mb-4 text-2xl">
          🔍
        </div>
        <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-2">
          Inga recept matchade din sökning
        </h3>
        <p className="text-sm text-charcoal-800/70 mb-6">
          Prova att söka på en annan råvara eller rensa dina filter för att visa alla recept.
        </p>
        <div className="flex justify-center">
          <button
            onClick={onResetFilters}
            className="px-5 py-2.5 rounded-2xl bg-cream-200 text-charcoal-800 font-semibold text-sm hover:bg-cream-300 transition-colors"
          >
            Rensa alla filter
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} onSelect={onSelectRecipe} />
      ))}
    </div>
  );
};
