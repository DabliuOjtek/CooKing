package com.us.cooking.controller;

import com.us.cooking.dto.FilterQuestionnaireDTO;
import com.us.cooking.dto.RecipeDTO;
import com.us.cooking.dto.ShortRecipeDTO;
import com.us.cooking.service.RecipeService;
import com.us.cooking.service.ShortRecipeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class RecipeController {

    private final RecipeService recipeService;
    private final ShortRecipeService shortRecipeService;

    @PostMapping("/recipe")
    public List<ShortRecipeDTO> getShortRecipes(@Valid @RequestBody FilterQuestionnaireDTO filter) {
        return shortRecipeService.getRandomizedShortRecipes(filter);
    }

    @GetMapping("/recipe/{id}")
    public RecipeDTO getRecipe(@PathVariable Integer id) {
        return recipeService.getRecipe(id);
    }

}
