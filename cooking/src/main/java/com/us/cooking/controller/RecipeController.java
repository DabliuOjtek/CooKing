package com.us.cooking.controller;

import com.us.cooking.config.security.UserDetailsImpl;
import com.us.cooking.dto.FilterQuestionnaireDTO;
import com.us.cooking.dto.RecipeDTO;
import com.us.cooking.dto.ShortRecipeDTO;
import com.us.cooking.service.RecipeService;
import com.us.cooking.service.ShortRecipeService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class RecipeController {

    private final RecipeService recipeService;
    private final ShortRecipeService shortRecipeService;

    @PostMapping("/recipe")
    public List<ShortRecipeDTO> getShortRecipes(@Valid @RequestBody FilterQuestionnaireDTO filter, @AuthenticationPrincipal UserDetailsImpl userDetails) {
        return shortRecipeService.getRandomizedShortRecipes(filter, userDetails);
    }

    @GetMapping("/recipe/{id}")
    public RecipeDTO getRecipe(@PathVariable Integer id,@AuthenticationPrincipal UserDetailsImpl userDetails) {
        return recipeService.getRecipe(id, userDetails);
    }

}
