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

  constructor(private recipeService: RecipeService, private errorHandler: ErrorHandlerService) {}

  ngOnInit(): void {
    this.getShortRecipes();
  }

  getShortRecipes() {
    this.recipeService.getShortRecipes().subscribe(
      (response: any) => {
        this.favouriteRecipes = response;
      },
      (error) => {
        this.errorHandler.handleError(error);
      },
      () => console.log('HTTP Short recipes request completed.')
    );
  }

  ratesCounter(range: string) {
    const size = Number(range);
    return new Array(size);
  }

  onTest() {
    console.log('kliknąłem');
  }
}
