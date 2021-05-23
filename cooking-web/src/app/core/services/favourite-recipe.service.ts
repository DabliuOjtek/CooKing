import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ShortRecipeVIEW } from '../models/short-recipe-view';
import { FavouriteRecipeVIEW } from '../models/favourite-recipe';

@Injectable({
  providedIn: 'root',
})
export class FavouriteRecipeService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getFavourites(): Observable<ShortRecipeVIEW> {
    return this.http.get<ShortRecipeVIEW>(this.baseUrl + 'favourite');
  }

  addFavourites(favouriteRecipe: FavouriteRecipeVIEW) {
    return this.http.post(this.baseUrl + 'favourite', favouriteRecipe);
  }

  deleteFavourites(favouriteRecipeId: string): Observable<any> {
    return this.http.delete(this.baseUrl + 'favourite/' + favouriteRecipeId);
  }
}
