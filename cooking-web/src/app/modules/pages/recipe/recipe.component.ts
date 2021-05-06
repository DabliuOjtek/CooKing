import { ErrorHandlerService } from './../../../core/services/error-handler.service';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from './../../../core/services/recipe.service';
import { RecipeVIEW } from './../../../core/models/recipe-view';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {
  recipe: RecipeVIEW;
  recipeSteps: any;
  difficultyLevel: number;
  rate: number;

  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private errorHandler: ErrorHandlerService
  ) {}

  ngOnInit(): void {
    this.getRecipe();
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
      },
      () => console.log('HTTP Recipe details request completed.')
    );
  }

  private parseResponse() {
    const recipeRate: number = +this.recipe.rate;
    this.rate = recipeRate;

    const recipeDifficulty: number = +this.recipe.difficultyLevelValue;
    this.difficultyLevel = recipeDifficulty;

    this.recipeSteps = this.recipe.description.split('@');
  }
}
