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
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0dGVzdCIsIlJPTEVTIjpbIlVTRVIiXSwiZXhwIjoxNjIxNTE2MzU0fQ.78FSH_y8dPW712jLq_rbZ8AK3VQ9QEpPRWa9kwjtLlc';

  header = new HttpHeaders().set('Authorization', 'Bearer ' + this.tokenKey);

  getFavourites(): Observable<ShortRecipeVIEW> {
    return this.http.get<ShortRecipeVIEW>(this.baseUrl + 'favourite', { headers: this.header });
  }

  addFavourites(favouriteRecipeId: string) {
    return this.http.post(this.baseUrl + 'favourite/', + favouriteRecipeId, { headers: this.header });
  }

  deleteFavourites(favouriteRecipeId: string): Observable<any> {
    return this.http.delete(this.baseUrl + 'favourite/' + favouriteRecipeId, { headers: this.header });
  }
}
