import { Component, OnInit } from '@angular/core';
import { RecipeService } from './../../../core/services/recipe.service';
import { RecipeVIEW } from './../../../core/models/recipe-view';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  recipe: RecipeVIEW;
  recipeSteps: any;
  difficultyLevel: number;
  rate: number;

  constructor(private recipeService: RecipeService) {   }

  ngOnInit(): void {
    this.getRecipe();
  }

  private getRecipe() {
    this.recipeService.getRecipe().subscribe((response: any) => {
      this.recipe = response;
      if (response) {
        this.parseResponse();
      }
    }, err => console.log('HTTP Error', err.error),
      () => console.log('HTTP Recipe details request completed.')
    );
  }

  private parseResponse() {
    let recipeRate: number =+ this.recipe.rate;
    this.rate = recipeRate;

    let recipeDifficulty: number =+ this.recipe.difficultyLevelValue;
    this.difficultyLevel = recipeDifficulty;

    this.recipeSteps = this.recipe.description.split('@')
  }

}
