package com.us.cooking.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
@Builder
public class RecipeDTO {
    private Integer recipeId;
    private String name;
    private String description;
    private String image;
    private String rate;
    private String calories;
    private String servings;
    private Integer ingredientsAmount;
    private String cuisineTypeValue;
    private String mealTypeValue;
    private String prepareTimeValue;
    private String difficultyLevelValue;
    private LocalDate createdAt;
    private LocalDate modifiedAt;
    private boolean favourite;
    private List<RecipeIngredientDTO> ingredients;
}
