package com.us.cooking.dto;

import lombok.Data;

@Data
public class ShortRecipeDTO {
    private Integer recipeId;
    private String name;
    private String image;
    private String rate;
}
