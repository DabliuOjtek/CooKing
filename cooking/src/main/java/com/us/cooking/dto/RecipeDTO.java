package com.us.cooking.dto;

import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class RecipeDTO {
    private Integer recipeId;
    private String name;
    private String description;
    private Byte[] image;
    private String rate;
    private String calories;
    private String servings;
    private String ingredientsAmount;
    private String cuisineTypeValue;
    private String mealTypeValue;
    private String prepareTimeValue;
    private String difficultyLevelValue;
    private LocalDate createdAt;
    private LocalDate modifiedAt;
    private List<RecipeIngredientDTO> ingredients;
}
