import { ShortRecipeVIEW } from './../../../core/models/short-recipe-view';
import { RecipeService } from './../../../core/services/recipe.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent implements OnInit {
  shortRecipes: ShortRecipeVIEW[];
  recipes: any;
  recipesData:any = [];
  generateComponents: number;

  constructor(private recpieService: RecipeService, private router: Router) {
  }

  ngOnInit(): void {
    this.getShortRecipes();
    
  }

  getShortRecipes() {
    this.recpieService.getShortRecipes().subscribe(
      (response: any) => {
        this.shortRecipes = response;
        if (response){this.converRate();}
      },
      (err) => console.log('HTTP Error', err.error),
      () => console.log('HTTP Short recipes request completed.')
    );
  }

  converRate() {
   
    this.generateComponents = this.shortRecipes.length;
    console.log(this.generateComponents)


    for( let i = 0; i< this.shortRecipes.length; i++){
      var x: number = +this.shortRecipes[i].rate;
      this.recipesData[i] = x;
    }
  }

  onTileClick(index :any){
    this.router.navigate(['/recipe',this.shortRecipes[index].recipeId]);
    this.recpieService.id = this.shortRecipes[index].recipeId
  }


}
