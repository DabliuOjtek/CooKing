package com.us.cooking.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ShortRecipeDTO {
    private Integer recipeId;
    private String name;
    private String image;
    private String rate;
    private boolean isFavourite;
}
