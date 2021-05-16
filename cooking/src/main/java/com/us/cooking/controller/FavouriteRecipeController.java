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

    @PostMapping("/favourite")
    public void addFavourite(@RequestBody FavRecipeIdDTO favRecipeIdDTO, @AuthenticationPrincipal UserDetailsImpl userDetails) {
        favouriteRecipeService.addRecipeToFavourite(favRecipeIdDTO, userDetails);
    }

    @DeleteMapping("/favourite/{id}")
    public void deleteFavourite(@NotNull @PathVariable Integer id, @AuthenticationPrincipal UserDetailsImpl userDetails) {
        favouriteRecipeService.deleteRecipeFromFavourite(id, userDetails);
    }
}
