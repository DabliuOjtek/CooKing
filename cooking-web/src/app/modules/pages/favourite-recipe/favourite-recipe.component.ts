import { FavouriteRecipeService } from './../../../core/services/favourite-recipe.service';
import { ErrorHandlerService } from './../../../core/services/error-handler.service';
import { ShortRecipeVIEW } from './../../../core/models/short-recipe-view';
import { RecipeService } from './../../../core/services/recipe.service';
import { Component, OnInit } from '@angular/core';
import {AuthLayoutService} from "../../../core/services/auth-layout.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-favourite-recipe',
  templateUrl: './favourite-recipe.component.html',
  styleUrls: ['./favourite-recipe.component.scss'],
})
export class FavouriteRecipeComponent implements OnInit {
  favouriteRecipes: ShortRecipeVIEW[];
  recipesData: any = [];

  constructor(
    private recipeService: RecipeService,
    private errorHandler: ErrorHandlerService,
    private favouriteRecipeService: FavouriteRecipeService,
    private authLayout: AuthLayoutService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authLayout.isLogged.subscribe((isLogged) => {
      if (!isLogged && this.router.url === '/favourite-recipe') {
        this.router.navigate(['/']);
      }
    });
    this.getFavourite();
  }

  getFavourite() {
    this.favouriteRecipeService.getFavourites().subscribe(
      (response: any) => {
        this.favouriteRecipes = response;
      },
      (error) => {
        this.errorHandler.handleError(error);
      }
    );
  }

  deleteFavourite(recipeId: string): void {
    this.favouriteRecipeService.deleteFavourites(recipeId).subscribe(() => this.getFavourite());
  }

  ratesCounter(range: string) {
    const size = Number(range);
    return new Array(size);
  }
}
