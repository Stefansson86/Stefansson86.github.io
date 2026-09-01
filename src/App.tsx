import React, { useState, useMemo, useEffect } from 'react';
import { initialRecipes } from './data/recipes';
import { Recipe, RecipeCategory } from './types/recipe';
import { Navbar, CurrentView } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { CookbookPage } from './components/CookbookPage';
import { RecipeDetail } from './components/RecipeDetail';
import { Heart } from 'lucide-react';

export const App: React.FC = () => {
  const [recipes] = useState<Recipe[]>(initialRecipes);
  const [currentView, setCurrentView] = useState<CurrentView>('home');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<RecipeCategory>('Alla');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Sync state with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      
      if (!hash || hash === 'om-mig' || hash === 'hem') {
        setCurrentView('home');
        setSelectedRecipe(null);
      } else if (hash === 'kokbok' || hash === 'recept') {
        setCurrentView('cookbook');
        setSelectedRecipe(null);
      } else {
        // Look for recipe id (either #id or #recept/id or #kokbok/id)
        const recipeId = hash.replace(/^kokbok\//, '').replace(/^recept\//, '');
        const found = recipes.find((r) => r.id === recipeId);
        if (found) {
          setSelectedRecipe(found);
          setCurrentView('recipe');
        } else {
          setCurrentView('home');
          setSelectedRecipe(null);
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [recipes]);

  const handleNavigateHome = () => {
    window.location.hash = '';
    setCurrentView('home');
    setSelectedRecipe(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateCookbook = () => {
    window.location.hash = 'kokbok';
    setCurrentView('cookbook');
    setSelectedRecipe(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectRecipe = (recipe: Recipe) => {
    window.location.hash = `kokbok/${recipe.id}`;
    setSelectedRecipe(recipe);
    setCurrentView('recipe');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Categories list
  const categories: RecipeCategory[] = [
    'Alla',
    'Vardag',
    'Pasta',
    'Fest & Helg',
    'Fisk & Skaldjur',
    'Kött',
    'Vegetariskt',
    'Basrecept',
    'Bakat & Sött',
  ];

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    recipes.forEach((r) => r.tags.forEach((t) => tagSet.add(t)));
    return Array.from(tagSet);
  }, [recipes]);

  // Filtered recipes
  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      // Category match
      if (selectedCategory !== 'Alla' && recipe.category !== selectedCategory) {
        return false;
      }

      // Tag match
      if (selectedTag && !recipe.tags.includes(selectedTag)) {
        return false;
      }

      // Search match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = recipe.title.toLowerCase().includes(query);
        const matchesDesc = recipe.description.toLowerCase().includes(query);
        const matchesTags = recipe.tags.some((t) => t.toLowerCase().includes(query));
        const matchesIngredients = recipe.ingredientGroups.some((g) =>
          g.ingredients.some((i) => i.name.toLowerCase().includes(query))
        );

        if (!matchesTitle && !matchesDesc && !matchesTags && !matchesIngredients) {
          return false;
        }
      }

      return true;
    });
  }, [recipes, selectedCategory, selectedTag, searchQuery]);

  const handleResetFilters = () => {
    setSelectedCategory('Alla');
    setSelectedTag(null);
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream-100 text-charcoal-800">
      {/* Top Navbar */}
      <Navbar
        currentView={currentView}
        onNavigateHome={handleNavigateHome}
        onNavigateCookbook={handleNavigateCookbook}
        recipeCount={recipes.length}
      />

      {/* Main Content View */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        {currentView === 'recipe' && selectedRecipe ? (
          <RecipeDetail
            recipe={selectedRecipe}
            onBack={handleNavigateCookbook}
          />
        ) : currentView === 'cookbook' ? (
          <CookbookPage
            recipes={recipes}
            filteredRecipes={filteredRecipes}
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedTag={selectedTag}
            onSelectTag={setSelectedTag}
            allTags={allTags}
            onSelectRecipe={handleSelectRecipe}
            onResetFilters={handleResetFilters}
          />
        ) : (
          <HomePage />
        )}
      </main>

      {/* Footer */}
      <footer className="mt-16 bg-white border-t border-cream-300 py-8 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-800/70">
          <div className="flex items-center gap-3">
            <span className="font-serif font-bold text-charcoal-800 text-sm">Mikael Stefansson</span>
            <span>•</span>
            <a
              href="https://stefansson.dev"
              className="hover:text-terracotta-600 font-semibold"
            >
              stefansson.dev
            </a>
          </div>
          <div className="flex items-center gap-1">
            <span>Byggd med passion för god mat & kod</span>
            <Heart className="w-3.5 h-3.5 text-terracotta-500 fill-terracotta-500 inline ml-1" />
          </div>
        </div>
      </footer>
    </div>
  );
};
export default App;
