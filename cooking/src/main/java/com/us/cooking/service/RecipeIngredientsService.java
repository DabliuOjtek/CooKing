package com.us.cooking.service;

import com.us.cooking.model.DictionaryEntity;
import com.us.cooking.model.IngredientEntity;
import com.us.cooking.model.RecipeEntity;
import com.us.cooking.model.RecipeIngredientsEntity;
import com.us.cooking.repository.DictionaryRepository;
import com.us.cooking.repository.IngredientRepository;
import com.us.cooking.repository.RecipeIngredientsRepository;
import com.us.cooking.repository.RecipeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RecipeIngredientsService {

    private final RecipeIngredientsRepository recipeIngredientsRepository;
    private final RecipeRepository recipeRepository;
    private final IngredientRepository ingredientRepository;
    private final DictionaryRepository dictionaryRepository;


//    public void saveRecipeIngredient() {
//        RecipeIngredientsEntity recipeIngredientsEntity = new RecipeIngredientsEntity();
//
//        RecipeEntity recipeEntity = recipeRepository.findById(3).get();
//        recipeIngredientsEntity.setRecipeEntity(recipeEntity);
//
//        IngredientEntity ingredientEntity = ingredientRepository.findById(10).get();
//        recipeIngredientsEntity.setIngredientEntity(ingredientEntity);
//
//        recipeIngredientsEntity.setQuantity("5");
//
//        DictionaryEntity dictionaryEntity = dictionaryRepository.findById(20).get();
//        recipeIngredientsEntity.setUnitDictEntity(dictionaryEntity);
//
//        recipeIngredientsRepository.save(recipeIngredientsEntity);
//    }
}
