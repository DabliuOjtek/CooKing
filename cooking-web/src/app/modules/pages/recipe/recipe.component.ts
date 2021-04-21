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
  recipe_steps: any;
  difficultyLevel: number;
  rate: number;

  constructor(private recipeService: RecipeService) {   }

  ngOnInit(): void { 
    this.getRecipe();
  }

  getRecipe() {
    this.recipeService.getRecipe().subscribe((response: any) => {
      this.recipe = response;
      if (response) {
        var x: number = +this.recipe.rate;
        this.rate = x;

        var y: number = +this.recipe.difficultyLevelValue;
        this.difficultyLevel = y;

        this.recipe_steps = this.recipe.description.split('@')
       }
    }, err => console.log('HTTP Error', err.error),
      () => console.log('HTTP Recipe details request completed.')
    );
  }

}
