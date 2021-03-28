package com.us.cooking.controller;

import com.us.cooking.dto.FilterQuestionnaireDTO;
import com.us.cooking.dto.RecipeDTO;
import com.us.cooking.dto.ShortRecipeDTO;
import com.us.cooking.service.IngredientService;
import com.us.cooking.service.RecipeIngredientsService;
import com.us.cooking.service.RecipeService;
import com.us.cooking.service.ShortRecipeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class RecipeController {

    private final RecipeService recipeService;
    private final ShortRecipeService shortRecipeService;
    private final IngredientService ingredientService;
    private final RecipeIngredientsService recipeIngredientsService;

    @PostMapping("/recipe")
    public List<ShortRecipeDTO> getShortRecipes(@RequestBody FilterQuestionnaireDTO filter) {
        return shortRecipeService.getRandomizedShortRecipes(filter);
    }

    @GetMapping("/recipe/{id}")
    public RecipeDTO getRecipe(@PathVariable Integer id) {
        return recipeService.getRecipe(id);
    }

//    @GetMapping("/saveIngredient")
//    public void saveIngredient() {
//        ingredientService.saveIng();
//    }
//
//    @PostMapping("/saveRecipe")
//    public void saveRecipe() {
//        recipeService.saveRecipe();
//    }

//    @PostMapping("/saveRecipeIngredient")
//    public void saveRecipeIngredient() {
//        recipeIngredientsService.saveRecipeIngredient();
//    }
}
