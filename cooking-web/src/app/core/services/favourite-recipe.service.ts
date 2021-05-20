import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  tokenKey =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0dGVzdCIsIlJPTEVTIjpbIlVTRVIiXSwiZXhwIjoxNjIxNTA1NDA5fQ.5mjfciO6O2VxC9-KRe4hyonuMRvRuhYAyLw_CA62LTs';

  header = new HttpHeaders().set('Authorization', 'Bearer ' + this.tokenKey);

  getFavourites(): Observable<ShortRecipeVIEW> {
    return this.http.get<ShortRecipeVIEW>(this.baseUrl + 'favourite', { headers: this.header });
  }

  addFavourites(favouriteRecipeId: number) {
    return this.http.post(this.baseUrl + 'favourite', favouriteRecipeId, { headers: this.header });
  }

  deleteFavourites(favouriteRecipeId: string) {
    return this.http.delete(this.baseUrl + 'favourite/' + favouriteRecipeId, { headers: this.header });
  }
}
