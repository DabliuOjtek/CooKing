package com.us.cooking.dto;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class FavRecipeIdDTO {
    @NotNull
    private Integer recipeId;
}
