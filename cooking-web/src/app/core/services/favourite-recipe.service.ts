import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ShortRecipeVIEW } from '../models/short-recipe-view';

@Injectable({
  providedIn: 'root',
})
export class FavouriteRecipeService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getFavourites(): Observable<ShortRecipeVIEW> {
    return this.http.get<ShortRecipeVIEW>(this.baseUrl + 'favourite');
  }

  addFavourites(favouriteRecipeId: string) {
    return this.http.put(this.baseUrl + 'favourite', favouriteRecipeId);
  }

  deleteFavourites(favouriteRecipeId: string) {
    return this.http.delete(this.baseUrl + 'favourite?id=' + favouriteRecipeId);
  }
}
