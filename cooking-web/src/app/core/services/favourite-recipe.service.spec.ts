import { TestBed } from '@angular/core/testing';

import { FavouriteRecipeService } from './favourite-recipe.service';

describe('FavouriteRecipeService', () => {
  let service: FavouriteRecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavouriteRecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
