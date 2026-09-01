import React from 'react';
import { ChefHat } from 'lucide-react';

export type CurrentView = 'home' | 'cookbook' | 'recipe';

interface NavbarProps {
  currentView: CurrentView;
  onNavigateHome: () => void;
  onNavigateCookbook: () => void;
  recipeCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigateHome,
  onNavigateCookbook,
  recipeCount,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-cream-50/90 backdrop-blur-md border-b border-cream-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo & Brand */}
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="w-10 h-10 rounded-2xl bg-charcoal-800 text-white flex items-center justify-center font-serif text-lg font-bold shadow-playful group-hover:bg-terracotta-500 transition-colors">
              MS
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-charcoal-800 flex items-center gap-1.5">
                MStefansson
              </span>
              <p className="text-[11px] text-charcoal-800/60 font-medium hidden sm:block">
                stefansson.dev
              </p>
            </div>
          </button>

          {/* Navigation Links */}
          <nav className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={onNavigateHome}
              className={`px-3.5 py-2 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${
                currentView === 'home'
                  ? 'bg-charcoal-800 text-white shadow-playful-sm'
                  : 'text-charcoal-800 hover:bg-cream-200/80'
              }`}
            >
              Om mig
            </button>

            <button
              onClick={onNavigateCookbook}
              className={`px-3.5 py-2 rounded-2xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all ${
                currentView === 'cookbook' || currentView === 'recipe'
                  ? 'bg-terracotta-500 text-white shadow-playful-sm'
                  : 'text-charcoal-800 hover:bg-cream-200/80'
              }`}
            >
              <ChefHat className="w-4 h-4" />
              <span>Kokboken</span>
              <span
                className={`text-[11px] px-2 py-0.5 rounded-full font-sans font-bold hidden sm:inline-block ${
                  currentView === 'cookbook' || currentView === 'recipe'
                    ? 'bg-white/25 text-white'
                    : 'bg-terracotta-100 text-terracotta-700'
                }`}
              >
                {recipeCount}
              </span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
