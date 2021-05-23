import { RecipeIngredientVIEW } from './recipe-ingredient-view';

export class RecipeVIEW {
  recipeId: number;
  name: string;
  description: string;
  image: string;
  rate: string;
  calories: string;
  servings: string;
  ingredientsAmount: number;
  cuisineTypeValue: string;
  mealTypeValue: string;
  prepareTimeValue: string;
  difficultyLevelValue: string;
  createdAt: Date;
  modifiedAt: Date;
  favourite: boolean;
  ingredients: RecipeIngredientVIEW[];
}
