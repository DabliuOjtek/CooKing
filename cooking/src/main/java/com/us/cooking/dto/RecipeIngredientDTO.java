package com.us.cooking.dto;

import lombok.Data;

@Data
public class RecipeIngredientDTO {
    private Integer ingredientId; //Mozliwe IngredientDTO
    private String name;
    private String quantity;
    private String unitDictEntityValue;
}
