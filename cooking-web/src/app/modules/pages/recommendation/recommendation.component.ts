import {FavouriteRecipeService} from './../../../core/services/favourite-recipe.service';
import {ErrorHandlerService} from './../../../core/services/error-handler.service';
import {ShortRecipeVIEW} from './../../../core/models/short-recipe-view';
import {FavouriteRecipeVIEW} from './../../../core/models/favourite-recipe';
import {RecipeService} from './../../../core/services/recipe.service';
import {Component, OnInit} from '@angular/core';
import {AuthLayoutService} from "../../../core/services/auth-layout.service";

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss'],
})
export class RecommendationComponent implements OnInit {
  favouriteRecipe: FavouriteRecipeVIEW = new FavouriteRecipeVIEW();
  shortRecipes: ShortRecipeVIEW[];
  recipesData: any = [];
  errorMessage: any;
  isLogged: boolean;
  notFoundRecipesError: String = 'Cannot find any recipes from given filter';

  constructor(
    private recipeService: RecipeService,
    private errorHandler: ErrorHandlerService,
    private favouriteRecipeService: FavouriteRecipeService,
    private authLayout: AuthLayoutService
  ) {
  }

  ngOnInit(): void {
    this.authLayout.isLogged.subscribe(isLogged => this.isLogged = isLogged);
    this.getShortRecipes();
  }

  onChangeFavourites(recipe: ShortRecipeVIEW) {
    const changedFav = !recipe.favourite;
    const recipeId = recipe.recipeId.toString();
    this.favouriteRecipe.recipeId = recipe.recipeId;
    if (changedFav === false) this.deleteFavourite(recipeId);
    else this.addFavourite(this.favouriteRecipe);
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

  addFavourite(recipe: FavouriteRecipeVIEW): void {
    this.favouriteRecipeService.addFavourites(recipe).subscribe();
  }

  ratesCounter(range: string) {
    const size = Number(range);
    return new Array(size);
  }
}
