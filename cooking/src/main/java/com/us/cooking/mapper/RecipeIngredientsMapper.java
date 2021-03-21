package com.us.cooking.mapper;

import com.us.cooking.dto.RecipeIngredientDTO;
import com.us.cooking.model.RecipeIngredientsEntity;

public class RecipeIngredientsMapper {

    public static RecipeIngredientDTO mapToRecipeIngredientsDTO(RecipeIngredientsEntity recipeIngredientsEntity) {
        return RecipeIngredientDTO.builder()
                .ingredientId(recipeIngredientsEntity.getIngredientEntity().getIngredientId())
                .name(recipeIngredientsEntity.getIngredientEntity().getName())
                .quantity(recipeIngredientsEntity.getQuantity())
                .unitDictEntityValue(recipeIngredientsEntity.getUnitDictEntity().getValue())
                .build();
    }
}
