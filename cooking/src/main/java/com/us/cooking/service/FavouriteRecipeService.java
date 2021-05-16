package com.us.cooking.service;

import com.us.cooking.config.security.UserDetailsImpl;
import com.us.cooking.dto.FavRecipeIdDTO;
import com.us.cooking.dto.ShortRecipeDTO;
import com.us.cooking.exception.DefaultException;
import com.us.cooking.mapper.RecipeMapper;
import com.us.cooking.model.RecipeEntity;
import com.us.cooking.model.UserEntity;
import com.us.cooking.repository.RecipeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class FavouriteRecipeService {

    private final UserService userService;
    private final RecipeRepository recipeRepository;

    public List<ShortRecipeDTO> getFavouriteRecipes(UserDetailsImpl userDetails) {
        UserEntity user = userService.getUserByUsername(userDetails.getUsername());

        return user.getRecipes().stream()
                .map(RecipeMapper::mapToShortRecipeDTO)
                .collect(Collectors.toList());
    }

    @Transactional
    public void addRecipeToFavourite(FavRecipeIdDTO favRecipeIdDTO, UserDetailsImpl userDetails) {
        UserEntity user = userService.getUserByUsername(userDetails.getUsername());
        RecipeEntity recipe = recipeRepository.findById(favRecipeIdDTO.getRecipeId())
                .orElseThrow(() -> new DefaultException("Couldn't found recipe"));
        user.getRecipes().add(recipe);
    }

    @Transactional
    public void deleteRecipeFromFavourite(Integer id, UserDetailsImpl userDetails) {
        UserEntity user = userService.getUserByUsername(userDetails.getUsername());
        RecipeEntity recipe = recipeRepository.findById(id)
                .orElseThrow(() -> new DefaultException("Couldn't found recipe"));
        user.getRecipes().remove(recipe);
    }
}
