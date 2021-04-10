import { PageNotFoundComponent } from './modules/pages/page-not-found/page-not-found.component';
import { MainComponent } from './modules/pages/main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeComponent } from './modules/pages/recipe/recipe.component';
import { TileComponent } from './modules/pages/tile/tile.component';



const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'recipe', component: TileComponent },
  { path: 'recipeId', component: RecipeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [MainComponent, RecipeComponent, TileComponent, PageNotFoundComponent];
