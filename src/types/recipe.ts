export type RecipeCategory =
  | 'Alla'
  | 'Pasta'
  | 'Vardag'
  | 'Fest & Helg'
  | 'Vegetariskt'
  | 'Fisk & Skaldjur'
  | 'Kyckling'
  | 'Kött'
  | 'Sallader & Bowls'
  | 'Basrecept'
  | 'Bakat & Sött';

export type RecipeDifficulty = 'Lätt' | 'Medel' | 'Avancerad';

export interface Ingredient {
  name: string;
  amount?: number; // Base amount for default servings (scalable)
  unit?: string;   // e.g. "g", "kg", "dl", "msk", "tsk", "krm", "st", "klyftor", "kruka", "burk", "ml"
  notes?: string;  // e.g. "färskriven", "rumstempererad", "finhackad"
}

export interface IngredientGroup {
  name?: string; // Optional group name, e.g. "Dressing", "Köttbullar", "Tillbehör"
  ingredients: Ingredient[];
}

export interface RecipeStep {
  title?: string;
  text: string;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  source?: {
    name: string;
    url?: string;
  };
  servings: number;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  difficulty: RecipeDifficulty;
  category: Exclude<RecipeCategory, 'Alla'>;
  tags: string[];
  imageUrl: string;
  emoji: string;
  ingredientGroups: IngredientGroup[];
  steps: RecipeStep[];
  chefTips?: string[];
  featured?: boolean;
}
