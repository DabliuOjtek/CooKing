import { FavouriteRecipeService } from './../../../core/services/favourite-recipe.service';
import { ErrorHandlerService } from './../../../core/services/error-handler.service';
import { ShortRecipeVIEW } from './../../../core/models/short-recipe-view';
import { RecipeService } from './../../../core/services/recipe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite-recipe',
  templateUrl: './favourite-recipe.component.html',
  styleUrls: ['./favourite-recipe.component.scss'],
})
export class FavouriteRecipeComponent implements OnInit {
  favouriteRecipes: ShortRecipeVIEW[];
  recipesData: any = [];
  generateComponents: number;

  constructor(
    private recipeService: RecipeService,
    private errorHandler: ErrorHandlerService,
    private favouriteRecipeService: FavouriteRecipeService
  ) {}

  ngOnInit(): void {
    this.getFavourite();
  }

  getFavourite() {
    this.favouriteRecipeService.getFavourites().subscribe(
      (response: any) => {
        this.favouriteRecipes = response;
      },
      (error) => {
        this.errorHandler.handleError(error);
      },
      () => console.log('HTTP Favourite recipes request completed.')
    );
  }

  deleteFavourite(recipeId: string): void {
    this.favouriteRecipeService.deleteFavourites(recipeId);
  }

  ratesCounter(range: string) {
    const size = Number(range);
    return new Array(size);
  }
}
