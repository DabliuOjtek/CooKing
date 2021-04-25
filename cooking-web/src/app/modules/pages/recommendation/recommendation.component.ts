import { ShortRecipeVIEW } from './../../../core/models/short-recipe-view';
import { RecipeService } from './../../../core/services/recipe.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss'],
})

export class RecommendationComponent implements OnInit {
  shortRecipes: ShortRecipeVIEW[];
  recipesData: any = [];
  generateComponents: number;

  private recipes: any;

  constructor(private recipeService: RecipeService, private router: Router) {
  }

  ngOnInit(): void {
    this.getShortRecipes();
  }

  getShortRecipes() {
    this.recipeService.getShortRecipes().subscribe((response: any) => {
        this.shortRecipes = response;
        if (response) {
          this.convertRate();
        }
      },
      (err) => console.log('HTTP Error', err.error),
      () => console.log('HTTP Short recipes request completed.')
    );
  }

  onTileClick(index: any) {
    let shortRecipe = this.shortRecipes[index]
    this.router.navigate(['/recipe',shortRecipe.recipeId]);
    this.recipeService.id = shortRecipe.recipeId
  }

  private convertRate() {
    this.generateComponents = this.shortRecipes.length;
    this.shortRecipes.forEach((value,index)=>{
      this.recipesData[index] =+ value.rate;
    });
  }

}
