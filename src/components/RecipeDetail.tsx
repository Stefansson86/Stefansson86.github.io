import React, { useState } from 'react';
import {
  ArrowLeft,
  Clock,
  Minus,
  Plus,
  Check,
  Share2,
  Printer,
  Lightbulb,
  Flame,
  Users
} from 'lucide-react';
import { Recipe } from '../types/recipe';

interface RecipeDetailProps {
  recipe: Recipe;
  onBack: () => void;
}

export const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipe, onBack }) => {
  const [servings, setServings] = useState<number>(recipe.servings);
  const [checkedIngredients, setCheckedIngredients] = useState<Set<string>>(new Set());
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [copied, setCopied] = useState(false);

  // Scaling factor
  const scale = servings / recipe.servings;

  const toggleIngredient = (id: string) => {
    const next = new Set(checkedIngredients);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setCheckedIngredients(next);
  };

  const toggleStep = (index: number) => {
    const next = new Set(completedSteps);
    if (next.has(index)) {
      next.delete(index);
    } else {
      next.add(index);
    }
    setCompletedSteps(next);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: recipe.title,
          text: recipe.description,
          url: window.location.href,
        });
      } catch (err) {
        // Ignored or cancelled
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const formatAmount = (baseAmount?: number) => {
    if (baseAmount === undefined) return null;
    const scaled = baseAmount * scale;
    // Format nicely without floating precision artifacts
    if (Number.isInteger(scaled)) {
      return scaled.toString();
    }
    // Round to 1-2 decimal places if needed
    const rounded = Math.round(scaled * 10) / 10;
    return rounded % 1 === 0 ? rounded.toString() : rounded.toLocaleString('sv-SE', { maximumFractionDigits: 1 });
  };

  const totalMinutes = recipe.prepTimeMinutes + recipe.cookTimeMinutes;

  return (
    <article className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
      {/* Navigation & Action Bar */}
      <div className="flex items-center justify-between no-print">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white hover:bg-cream-200 text-charcoal-800 font-semibold text-sm border border-cream-300 shadow-playful-sm transition-all hover:-translate-x-0.5"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Tillbaka till recept</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => window.print()}
            title="Skriv ut recept"
            className="p-2.5 rounded-2xl bg-white hover:bg-cream-200 text-charcoal-800 border border-cream-300 shadow-playful-sm transition-colors"
          >
            <Printer className="w-4 h-4" />
          </button>
          <button
            onClick={handleShare}
            title="Dela recept"
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-2xl bg-white hover:bg-cream-200 text-charcoal-800 border border-cream-300 shadow-playful-sm transition-colors text-xs font-semibold"
          >
            <Share2 className="w-4 h-4 text-terracotta-500" />
            <span>{copied ? 'Kopierad!' : 'Dela'}</span>
          </button>
        </div>
      </div>

      {/* Header Banner & Title Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-cream-300 shadow-playful space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-terracotta-50 text-terracotta-800 border border-terracotta-200">
              {recipe.category}
            </span>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-cream-200 text-charcoal-800 border border-cream-300">
              {recipe.difficulty}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-800 tracking-tight leading-tight">
            {recipe.title}
          </h1>

          <p className="text-base sm:text-lg text-charcoal-800/80 leading-relaxed max-w-3xl">
            {recipe.description}
          </p>

          <div className="flex items-center gap-2 flex-wrap pt-2">
            {recipe.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium bg-cream-100 text-charcoal-800/70 border border-cream-300/80 px-2.5 py-0.5 rounded-lg"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-cream-200">
            <div className="bg-cream-100 p-3 rounded-2xl border border-cream-300/60">
              <span className="text-[11px] font-semibold text-charcoal-800/60 uppercase tracking-wider block mb-0.5">
                Förberedelser
              </span>
              <div className="flex items-center gap-1.5 font-bold text-charcoal-800">
                <Clock className="w-4 h-4 text-terracotta-500" />
                <span>{recipe.prepTimeMinutes} min</span>
              </div>
            </div>

            <div className="bg-cream-100 p-3 rounded-2xl border border-cream-300/60">
              <span className="text-[11px] font-semibold text-charcoal-800/60 uppercase tracking-wider block mb-0.5">
                Tillagning
              </span>
              <div className="flex items-center gap-1.5 font-bold text-charcoal-800">
                <Flame className="w-4 h-4 text-amber-500" />
                <span>{recipe.cookTimeMinutes} min</span>
              </div>
            </div>

            <div className="bg-cream-100 p-3 rounded-2xl border border-cream-300/60">
              <span className="text-[11px] font-semibold text-charcoal-800/60 uppercase tracking-wider block mb-0.5">
                Total tid
              </span>
              <div className="flex items-center gap-1.5 font-bold text-charcoal-800">
                <Clock className="w-4 h-4 text-sage-600" />
                <span>{totalMinutes} min</span>
              </div>
            </div>

            <div className="bg-cream-100 p-3 rounded-2xl border border-cream-300/60">
              <span className="text-[11px] font-semibold text-charcoal-800/60 uppercase tracking-wider block mb-0.5">
                Portioner
              </span>
              <div className="flex items-center gap-1.5 font-bold text-charcoal-800">
                <Users className="w-4 h-4 text-terracotta-500" />
                <span>{recipe.servings} port</span>
              </div>
            </div>
          </div>
        </div>

      {/* Main Two-Column Layout: Ingredients & Steps */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Ingredients & Portion Scaler */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-cream-300 shadow-playful space-y-6 lg:sticky lg:top-24">
          <div className="flex items-center justify-between pb-4 border-b border-cream-200">
            <div>
              <h2 className="font-serif text-xl font-bold text-charcoal-800">
                Ingredienser
              </h2>
              <p className="text-xs text-charcoal-800/60">
                Klicka för att bocka av i köket
              </p>
            </div>

            {/* Dynamic Portion Scaler */}
            <div className="flex items-center gap-2 bg-cream-200/80 p-1 rounded-2xl border border-cream-300 no-print">
              <button
                onClick={() => setServings(Math.max(1, servings - 1))}
                disabled={servings <= 1}
                className="w-7 h-7 rounded-xl bg-white hover:bg-cream-100 disabled:opacity-40 text-charcoal-800 flex items-center justify-center shadow-playful-sm font-bold transition-all"
                title="Minska portioner"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="text-xs font-bold px-1 text-charcoal-800 min-w-[4rem] text-center">
                {servings} port
              </span>
              <button
                onClick={() => setServings(Math.min(24, servings + 1))}
                disabled={servings >= 24}
                className="w-7 h-7 rounded-xl bg-white hover:bg-cream-100 disabled:opacity-40 text-charcoal-800 flex items-center justify-center shadow-playful-sm font-bold transition-all"
                title="Öka portioner"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Ingredient Groups */}
          <div className="space-y-6">
            {recipe.ingredientGroups.map((group, groupIdx) => (
              <div key={groupIdx} className="space-y-2.5">
                {group.name && (
                  <h3 className="text-xs font-bold text-terracotta-600 uppercase tracking-wider">
                    {group.name}
                  </h3>
                )}
                <ul className="space-y-2">
                  {group.ingredients.map((item, itemIdx) => {
                    const itemId = `${groupIdx}-${itemIdx}`;
                    const isChecked = checkedIngredients.has(itemId);
                    const formattedAmount = formatAmount(item.amount);

                    return (
                      <li
                        key={itemId}
                        onClick={() => toggleIngredient(itemId)}
                        className={`flex items-start gap-3 p-2.5 rounded-2xl transition-all cursor-pointer select-none ${
                          isChecked
                            ? 'bg-cream-100 text-charcoal-800/40 line-through'
                            : 'hover:bg-cream-100/70 text-charcoal-800'
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded-lg mt-0.5 flex items-center justify-center border transition-all ${
                            isChecked
                              ? 'bg-sage-500 border-sage-500 text-white'
                              : 'border-cream-400 bg-white'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5" />}
                        </div>
                        <div className="text-sm leading-snug flex-1">
                          {formattedAmount && (
                            <span className="font-bold text-charcoal-900 mr-1.5">
                              {formattedAmount} {item.unit || ''}
                            </span>
                          )}
                          <span className={isChecked ? 'line-through' : ''}>
                            {item.name}
                          </span>
                          {item.notes && (
                            <span className="text-xs text-charcoal-800/60 block sm:inline sm:ml-1 italic">
                              ({item.notes})
                            </span>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* Clear checklist button */}
          {checkedIngredients.size > 0 && (
            <button
              onClick={() => setCheckedIngredients(new Set())}
              className="w-full py-2 text-xs font-semibold text-charcoal-800/60 hover:text-terracotta-600 transition-colors border-t border-cream-200 pt-3 text-center no-print"
            >
              Återställ avbockade ingredienser ({checkedIngredients.size})
            </button>
          )}
        </div>

        {/* Right Column: Step-by-Step Instructions & Chef Tips */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cream-300 shadow-playful space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-cream-200">
              <h2 className="font-serif text-xl font-bold text-charcoal-800">
                Gör så här
              </h2>
              <span className="text-xs font-semibold text-charcoal-800/60">
                {completedSteps.size} av {recipe.steps.length} klara
              </span>
            </div>

            {/* Steps list */}
            <div className="space-y-5">
              {recipe.steps.map((step, idx) => {
                const isCompleted = completedSteps.has(idx);

                return (
                  <div
                    key={idx}
                    onClick={() => toggleStep(idx)}
                    className={`group relative flex gap-4 p-4 rounded-2xl border transition-all cursor-pointer ${
                      isCompleted
                        ? 'bg-sage-50/50 border-sage-200'
                        : 'bg-cream-50/40 border-cream-200 hover:border-cream-300 hover:bg-cream-100/50'
                    }`}
                  >
                    {/* Step Number Badge / Checkmark */}
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 transition-all ${
                        isCompleted
                          ? 'bg-sage-500 text-white'
                          : 'bg-cream-300/80 text-charcoal-800 group-hover:bg-terracotta-500 group-hover:text-white'
                      }`}
                    >
                      {isCompleted ? <Check className="w-4 h-4" /> : idx + 1}
                    </div>

                    <div className="space-y-1 flex-1">
                      {step.title && (
                        <h4
                          className={`font-semibold text-sm ${
                            isCompleted ? 'text-sage-800' : 'text-charcoal-800'
                          }`}
                        >
                          {step.title}
                        </h4>
                      )}
                      <p
                        className={`text-sm sm:text-base leading-relaxed ${
                          isCompleted
                            ? 'text-charcoal-800/60'
                            : 'text-charcoal-800/90'
                        }`}
                      >
                        {step.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Chef Tips Callout */}
          {recipe.chefTips && recipe.chefTips.length > 0 && (
            <div className="bg-amber-50/80 rounded-3xl p-6 border border-amber-200/80 shadow-playful-sm space-y-3">
              <div className="flex items-center gap-2 text-amber-800 font-serif font-bold text-base">
                <Lightbulb className="w-5 h-5 text-amber-600" />
                <span>Kockens tips & råd</span>
              </div>
              <ul className="space-y-2">
                {recipe.chefTips.map((tip, tipIdx) => (
                  <li
                    key={tipIdx}
                    className="text-xs sm:text-sm text-amber-950/85 flex items-start gap-2.5 leading-relaxed"
                  >
                    <span className="text-amber-600 font-bold">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
