package com.us.cooking.mapper;

import com.us.cooking.dto.RecipeDTO;
import com.us.cooking.dto.ShortRecipeDTO;
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
                .ingredientsAmount(recipeEntity.getIngredients().size())
                .ingredients(
                        recipeEntity.getIngredients().stream()
                                .map(RecipeIngredientsMapper::mapToRecipeIngredientsDTO)
                                .collect(Collectors.toList())
                )
                .createdAt(recipeEntity.getCreatedAt())
                .modifiedAt(recipeEntity.getModifiedAt())
                .build();
    }

    public static ShortRecipeDTO mapToShortRecipeDTO(RecipeEntity recipeEntity) {
        return ShortRecipeDTO.builder()
                .recipeId(recipeEntity.getRecipeId())
                .name(recipeEntity.getName())
                .image(recipeEntity.getImage())
                .rate(recipeEntity.getRate())
                .build();
    }
}
