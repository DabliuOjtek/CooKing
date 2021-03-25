package com.us.cooking.controller;

import com.us.cooking.dto.FilterQuestionnaireDTO;
import com.us.cooking.dto.RecipeDTO;
import com.us.cooking.dto.ShortRecipeDTO;
import com.us.cooking.service.IngredientService;
import com.us.cooking.service.RecipeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class RecipeController {

    private final RecipeService recipeService;
    private final IngredientService ingredientService;

    @PostMapping("/recipe")
    public List<ShortRecipeDTO> getShortRecipes(@RequestBody List<FilterQuestionnaireDTO> filters) {
        return recipeService.getShortRecipes(filters);
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
//    @GetMapping("/saveRecipe")
//    public void saveRecipe() throws IOException {
//        recipeService.saveRecipe();
//    }
}
