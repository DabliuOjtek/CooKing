package com.us.cooking.controller;

import com.us.cooking.dto.FilterQuestionnaireDTO;
import com.us.cooking.dto.RecipeDTO;
import com.us.cooking.dto.ShortRecipeDTO;
import com.us.cooking.service.RecipeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class RecipeController {

    private final RecipeService recipeService;

    @PostMapping("/recipe")
    public List<ShortRecipeDTO> getShortRecipes(@RequestBody FilterQuestionnaireDTO filter) {
        return recipeService.getShortRecipes(filter);
    }

    @GetMapping("/recipe/{id}")
    public RecipeDTO getRecipe(@PathVariable Integer id) {
        return recipeService.getRecipe(id);
    }
}
