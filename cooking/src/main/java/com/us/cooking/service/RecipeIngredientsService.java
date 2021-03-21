package com.us.cooking.service;

import com.us.cooking.repository.RecipeIngredientsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RecipeIngredientsService {

    private final RecipeIngredientsRepository recipeIngredientsRepository;
}
