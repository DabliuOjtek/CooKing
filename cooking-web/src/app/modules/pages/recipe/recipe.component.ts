import { Component, OnInit } from '@angular/core';
import { RecipeService } from './../../../core/services/recipe.service';
import { RecipeVIEW } from './../../../core/models/recipe-view';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  recipe: any;
  recipe1: RecipeVIEW;
  difficultyLevel: number;
  rate: number;

  constructor(private recipeService: RecipeService) { 

    this.recipe = {
      cusine_title: "Rice with chicken",
      rating_short: "4.5 (36 reviews)",
      cusine_type: "Asian",
      meal_type: "Dinner",
      difficulty: 3,
      duration: "45min",
      calories: "520",
      servings: "6",

      ingredients: [
        '240 grams',
        "79 militers sour cream",
        "2 teaspoons",
        "2 teaspoons",
        "1/2 teaspon",
        "454 grams chicken",
        "321 grams cauliflowe rice",
        "113 grams shredded chedda cheese",
        "34 grams black olives",
        "1 tablespoon cilantro"
      ],

      steps: [
        '1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dui risus, ullamcorper ut dolor eget, malesuada porta neque. Maecenas pharetra tristique nunc. Morbi lobortis imperdiet orci et ornare. Nulla sollicitudin in velit id mollis. Duis vehicula elit in justo blandit, ut congue magna tempor. Aliquam et ex augue. Duis quam lorem, fringilla at iaculis id, fringilla nec leo.',
        '2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dui risus, ullamcorper ut dolor eget, malesuada porta neque. Maecenas pharetra tristique nunc. Morbi lobortis imperdiet orci et ornare. Nulla sollicitudin in velit id mollis. Duis vehicula elit in justo blandit, ut congue magna tempor. Aliquam et ex augue. Duis quam lorem, fringilla at iaculis id, fringilla nec leo.',
        '3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dui risus, ullamcorper ut dolor eget, malesuada porta neque. Maecenas pharetra tristique nunc. Morbi lobortis imperdiet orci et ornare. Nulla sollicitudin in velit id mollis. Duis vehicula elit in justo blandit, ut congue magna tempor. Aliquam et ex augue. Duis quam lorem, fringilla at iaculis id, fringilla nec leo.',
        '4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dui risus, ullamcorper ut dolor eget, malesuada porta neque. Maecenas pharetra tristique nunc. Morbi lobortis imperdiet orci et ornare. Nulla sollicitudin in velit id mollis. Duis vehicula elit in justo blandit, ut congue magna tempor. Aliquam et ex augue. Duis quam lorem, fringilla at iaculis id, fringilla nec leo.'
      ]
    }
  }

  ngOnInit(): void { 
    this.getRecipe();
  }

  getRecipe() {
    this.recipeService.getRecipe().subscribe((response: any) => {
      this.recipe1 = response;
      if (response) {
        var x: number = +this.recipe1.rate;
        this.rate = x;

        var y: number = +this.recipe1.difficultyLevelValue;
        this.difficultyLevel = y;
       }
    }, err => console.log('HTTP Error', err.error),
      () => console.log('HTTP Recipe details request completed.')
    );
  }

}
