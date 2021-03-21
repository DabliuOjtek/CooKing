package com.us.cooking.mapper;

import com.us.cooking.dto.RecipeDTO;
import com.us.cooking.model.RecipeEntity;

import java.util.stream.Collectors;

public class RecipeMapper {

    public static RecipeDTO mapToRecipeDTO(RecipeEntity recipeEntity) {
        return RecipeDTO.builder()
                .recipeId(recipeEntity.getRecipeId())
                .name(recipeEntity.getName())
                .description(recipeEntity.getDescription())
                .image(recipeEntity.getImage())
                .rate(recipeEntity.getRate())
                .calories(recipeEntity.getCalories())
                .servings(recipeEntity.getServings())
                .ingredientsAmount(recipeEntity.getIngredientsAmount())
                .ingredients(
                        recipeEntity.getIngredients().stream()
                                .map(RecipeIngredientsMapper::mapToRecipeIngredientsDTO)
                                .collect(Collectors.toList())
                )
                .createdAt(recipeEntity.getCreatedAt())
                .modifiedAt(recipeEntity.getModifiedAt())
                .build();
    }
}
