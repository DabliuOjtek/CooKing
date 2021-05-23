import { FavouriteRecipeService } from './../../../core/services/favourite-recipe.service';
import { ErrorHandlerService } from './../../../core/services/error-handler.service';
import { ShortRecipeVIEW } from './../../../core/models/short-recipe-view';
import { RecipeService } from './../../../core/services/recipe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss'],
})
export class RecommendationComponent implements OnInit {
  shortRecipes: ShortRecipeVIEW[];
  recipesData: any = [];
  generateComponents: number;
  errorMessage: any;

  constructor(
    private recipeService: RecipeService,
    private errorHandler: ErrorHandlerService,
    private favouriteRecipeService: FavouriteRecipeService
  ) {}

  ngOnInit(): void {
    this.getShortRecipes();
  }

  onChangeFavourites(recipe: ShortRecipeVIEW, index: number) {
    const changedFav = !recipe.favourite;
    const recipeId = recipe.recipeId.toString();
    if (changedFav === false) this.deleteFavourite(recipeId);
    else this.addFavourite(recipeId);
    recipe.favourite = changedFav;
  }

  getShortRecipes() {
    this.recipeService.getShortRecipes().subscribe(
      (response: any) => {
        this.shortRecipes = response;
      },
      (error) => {
        this.errorMessage = this.errorHandler.handleError(error);
        this.errorMessage = this.errorMessage.split('&&');
      },
      () => console.log('HTTP Short recipes request completed.')
    );
  }

  deleteFavourite(recipeId: string): void {
    this.favouriteRecipeService.deleteFavourites(recipeId).subscribe();
  }

  addFavourite(recipeId: string): void {
    this.favouriteRecipeService.addFavourites(recipeId).subscribe();
  }

  ratesCounter(range: string) {
    const size = Number(range);
    return new Array(size);
  }
}
