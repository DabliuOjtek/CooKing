import { PageNotFoundComponent } from './modules/pages/page-not-found/page-not-found.component';
import { MainComponent } from './modules/pages/main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeComponent } from './modules/pages/recipe/recipe.component';
import { RecommendationComponent } from './modules/pages/recommendation/recommendation.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'recipe', component: RecommendationComponent },
  { path: 'recipe/:id', component: RecipeComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [MainComponent, RecommendationComponent, RecipeComponent, PageNotFoundComponent];
