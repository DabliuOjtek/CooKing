package com.us.cooking.service;

import com.us.cooking.config.security.UserDetailsImpl;
import com.us.cooking.dto.RecipeDTO;
import com.us.cooking.dto.ShortRecipeDTO;
import com.us.cooking.exception.DefaultException;
import com.us.cooking.mapper.RecipeMapper;
import com.us.cooking.model.RecipeEntity;
import com.us.cooking.repository.DictionaryRepository;
import com.us.cooking.repository.RecipeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class RecipeService {

    private final RecipeRepository recipeRepository;
    private final DictionaryRepository dictionaryRepository;
    private final FavouriteRecipeService favouriteRecipeService;

    public RecipeDTO getRecipe(Integer id, UserDetailsImpl userDetails) {
        RecipeEntity recipeEntity;
        try {
            recipeEntity = getRecipeEntity(id);
        } catch (NoSuchElementException e) {
            throw new DefaultException(e.getMessage());
        }

        RecipeDTO recipeDTO = RecipeMapper.mapToRecipeDTO(recipeEntity);
        try {
            String cuisineTypeValue = getCuisineTypeValue(recipeEntity);
            recipeDTO.setCuisineTypeValue(cuisineTypeValue);

            String mealTypeValue = getMealTypeValue(recipeEntity);
            recipeDTO.setMealTypeValue(mealTypeValue);

            String prepareTimeValue = getPrepareTimeValue(recipeEntity);
            recipeDTO.setPrepareTimeValue(prepareTimeValue);

            String difficultyLevelValue = getDifficultyLevelValue(recipeEntity);
            recipeDTO.setDifficultyLevelValue(difficultyLevelValue);
        } catch (NoSuchElementException e) {
            throw new DefaultException("Something went wrong with getting recipe from database");
        }

        if (userDetails != null)
            setRecipeFavourite(recipeDTO, userDetails);

        return recipeDTO;
    }

    private RecipeEntity getRecipeEntity(Integer id) {
        return recipeRepository.findById(id).
                orElseThrow(() -> new NoSuchElementException("Cannot find any recipe from given id"));
    }

    private String getCuisineTypeValue(RecipeEntity recipeEntity) {
        return dictionaryRepository.findById(recipeEntity.getCuisineTypeId())
                .orElseThrow(NoSuchElementException::new)
                .getValue();
    }

    private String getMealTypeValue(RecipeEntity recipeEntity) {
        return dictionaryRepository.findById(recipeEntity.getMealTypeId())
                .orElseThrow(NoSuchElementException::new)
                .getValue();
    }

    private String getPrepareTimeValue(RecipeEntity recipeEntity) {
        return dictionaryRepository.findById(recipeEntity.getPrepareTimeId())
                .orElseThrow(NoSuchElementException::new)
                .getValue();
    }

    private String getDifficultyLevelValue(RecipeEntity recipeEntity) {
        return dictionaryRepository.findById(recipeEntity.getDifficultyLevelId())
                .orElseThrow(NoSuchElementException::new)
                .getValue();
    }

    private void setRecipeFavourite(RecipeDTO recipeDTO, UserDetailsImpl userDetails) {
        boolean isFav = isRecipeFavourite(recipeDTO.getRecipeId(), userDetails);
        if (isFav)
            recipeDTO.setFavourite(true);
    }

    private boolean isRecipeFavourite(Integer recipeId, UserDetailsImpl userDetails) {
        List<ShortRecipeDTO> favouriteRecipes = favouriteRecipeService.getFavouriteRecipes(userDetails);
        for (ShortRecipeDTO shortRecipeFav: favouriteRecipes) {
            Integer shorRecipeFavId = shortRecipeFav.getRecipeId();
            if (shorRecipeFavId.equals(recipeId))
                return true;
        }
        return false;
    }
}
