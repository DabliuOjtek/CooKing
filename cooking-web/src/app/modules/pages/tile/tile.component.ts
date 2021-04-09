import { ShortRecipeVIEW } from './../../../core/models/short-recipe-view';
import { RecipeService } from './../../../core/services/recipe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent implements OnInit {
  shortRecipes: ShortRecipeVIEW[];

  constructor(private recpieService: RecipeService) {}

  ngOnInit(): void {
    this.getShortRecipes();
  }

  getShortRecipes() {
    this.recpieService.getShortRecipes().subscribe(
      (response: any) => {
        this.shortRecipes = response;
      },
      (err) => console.log('HTTP Error', err.error),
      () => console.log('HTTP Short recipes request completed.')
    );
  }
}
