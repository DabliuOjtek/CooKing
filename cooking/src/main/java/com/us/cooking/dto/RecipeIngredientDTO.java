package com.us.cooking.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RecipeIngredientDTO {
    private Integer ingredientId; //Mozliwe IngredientDTO
    private String name;
    private String quantity;
    private String unitDictEntityValue;
}
