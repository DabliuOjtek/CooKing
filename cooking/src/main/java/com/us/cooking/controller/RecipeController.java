package com.us.cooking.controller;

import com.us.cooking.service.RecipeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class RecipeController {
    private final RecipeService recipeService;

    @PostMapping("/createDictionary")
    public void createDictionary() {
        recipeService.saveRecipe();
    }
}
