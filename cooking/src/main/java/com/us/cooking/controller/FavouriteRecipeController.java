package com.us.cooking.controller;

import com.us.cooking.config.security.UserDetailsImpl;
import com.us.cooking.dto.FavRecipeIdDTO;
import com.us.cooking.dto.ShortRecipeDTO;
import com.us.cooking.service.FavouriteRecipeService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotNull;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class FavouriteRecipeController {

    private final FavouriteRecipeService favouriteRecipeService;

    @GetMapping("/favourite")
    public List<ShortRecipeDTO> getFavourites(@AuthenticationPrincipal UserDetailsImpl userDetails) {
        return favouriteRecipeService.getFavouriteRecipes(userDetails);
    }

    @PutMapping("/favourite")
    public void addFavourite(@AuthenticationPrincipal UserDetailsImpl userDetails, @RequestBody FavRecipeIdDTO favRecipeIdDTO) {
        favouriteRecipeService.addRecipeToFavourite(userDetails, favRecipeIdDTO);
    }

    @DeleteMapping("/favourite")
    public void deleteFavourite(@AuthenticationPrincipal UserDetailsImpl userDetails, @NotNull @RequestParam Integer id) {
        favouriteRecipeService.deleteRecipeFromFavourite(userDetails, id);
    }
}
