import React from 'react';
import { Clock, Users, ArrowRight } from 'lucide-react';
import { Recipe } from '../types/recipe';

interface RecipeCardProps {
  recipe: Recipe;
  onSelect: (recipe: Recipe) => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onSelect }) => {
  const totalMinutes = recipe.prepTimeMinutes + recipe.cookTimeMinutes;

  const difficultyColors = {
    'Lätt': 'bg-sage-100 text-sage-800 border-sage-200',
    'Medel': 'bg-amber-100 text-amber-800 border-amber-200',
    'Avancerad': 'bg-terracotta-100 text-terracotta-700 border-terracotta-200',
  };

  const categoryColors: Record<string, string> = {
    'Pasta': 'bg-amber-50 text-amber-800 border-amber-200',
    'Vardag': 'bg-sage-50 text-sage-800 border-sage-200',
    'Fest & Helg': 'bg-terracotta-50 text-terracotta-800 border-terracotta-200',
    'Kött': 'bg-rose-50 text-rose-800 border-rose-200',
    'Fisk & Skaldjur': 'bg-sky-50 text-sky-800 border-sky-200',
    'Vegetariskt': 'bg-emerald-50 text-emerald-800 border-emerald-200',
    'Basrecept': 'bg-stone-100 text-stone-800 border-stone-300',
    'Bakat & Sött': 'bg-purple-50 text-purple-800 border-purple-200',
  };

  return (
    <div
      onClick={() => onSelect(recipe)}
      className="group bg-white rounded-3xl p-6 border border-cream-300 shadow-playful hover:shadow-playful-hover transition-all duration-300 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1 relative overflow-hidden"
    >
      <div className="space-y-4">
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${categoryColors[recipe.category] || 'bg-cream-200 text-charcoal-800 border-cream-300'}`}>
            {recipe.category}
          </span>
          <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${difficultyColors[recipe.difficulty]}`}>
            {recipe.difficulty}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal-800 group-hover:text-terracotta-600 transition-colors leading-snug">
          {recipe.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-charcoal-800/75 leading-relaxed line-clamp-3">
          {recipe.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {recipe.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium bg-cream-100 text-charcoal-800/80 px-2 py-0.5 rounded-md border border-cream-200/80"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Info */}
      <div className="pt-5 mt-5 border-t border-cream-200 flex items-center justify-between text-xs text-charcoal-800/70 font-medium">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-terracotta-500" />
            <span>{totalMinutes} min</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5 text-sage-600" />
            <span>{recipe.servings} port</span>
          </div>
        </div>

        <span className="text-terracotta-600 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
          Visa recept
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </div>
  );
};
