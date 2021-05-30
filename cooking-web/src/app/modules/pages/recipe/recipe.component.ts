import { ErrorHandlerService } from './../../../core/services/error-handler.service';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from './../../../core/services/recipe.service';
import { RecipeVIEW } from './../../../core/models/recipe-view';
import { ActivatedRoute } from '@angular/router';
import { FavouriteRecipeVIEW } from 'src/app/core/models/favourite-recipe';
import { FavouriteRecipeService } from 'src/app/core/services/favourite-recipe.service';
import { AuthService } from 'src/app/core/security/auth.service';
import { AuthLayoutService } from '../../../core/services/auth-layout.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {
  favouriteRecipe: FavouriteRecipeVIEW = new FavouriteRecipeVIEW();
  recipe: RecipeVIEW;
  recipeSteps: any;
  difficultyLevel: number;
  rate: number;
  isLogged: boolean;

  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private errorHandler: ErrorHandlerService,
    private favouriteRecipeService: FavouriteRecipeService,
    private authService: AuthService,
    private authLayout: AuthLayoutService
  ) {}

  ngOnInit(): void {
    this.authLayout.isLogged.subscribe((isLogged) => (this.isLogged = isLogged));
    this.isLogged = this.authService.isLogged();
    this.getRecipe();
  }

  onChangeFavourites(recipe: RecipeVIEW) {
    const changedFav = !recipe.favourite;
    const recipeId = recipe.recipeId.toString();
    this.favouriteRecipe.recipeId = recipe.recipeId;
    if (changedFav === false) this.deleteFavourite(recipeId);
    else this.addFavourite(this.favouriteRecipe);
    recipe.favourite = changedFav;
  }

  private getRecipe() {
    const recipeId = this.activatedRoute.snapshot.paramMap.get('id');
    this.recipeService.getRecipe(recipeId).subscribe(
      (response: any) => {
        this.recipe = response;
        if (response) {
          this.parseResponse();
        }
      },
      (error) => {
        this.errorHandler.handleError(error);
      }
    );
  }

  private parseResponse() {
    const recipeRate: number = +this.recipe.rate;
    this.rate = recipeRate;

    const recipeDifficulty: number = +this.recipe.difficultyLevelValue;
    this.difficultyLevel = recipeDifficulty;

    this.recipeSteps = this.recipe.description.split('@');
  }

  deleteFavourite(recipeId: string): void {
    this.favouriteRecipeService.deleteFavourites(recipeId).subscribe();
  }

  addFavourite(recipe: FavouriteRecipeVIEW): void {
    this.favouriteRecipeService.addFavourites(recipe).subscribe();
  }
}
