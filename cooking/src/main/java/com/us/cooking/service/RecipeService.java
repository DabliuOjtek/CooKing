package com.us.cooking.service;

import com.us.cooking.dto.FilterQuestionnaireDTO;
import com.us.cooking.dto.RecipeDTO;
import com.us.cooking.dto.ShortRecipeDTO;
import com.us.cooking.mapper.RecipeMapper;
import com.us.cooking.model.RecipeEntity;
import com.us.cooking.repository.DictionaryRepository;
import com.us.cooking.repository.RecipeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RecipeService {

    private final RecipeRepository recipeRepository;
    private final DictionaryRepository dictionaryRepository;

    public List<ShortRecipeDTO> getShortRecipes(List<FilterQuestionnaireDTO> filter) {
        return null;
    }

//    public void saveRecipe() {
//        RecipeEntity recipeEntity = new RecipeEntity();
//        recipeEntity.setCalories("200");
//        recipeEntity.setCreatedAt(LocalDate.now());
//        recipeEntity.setModifiedAt(LocalDate.now());
//        recipeEntity.setName("Chicken salad");
//        recipeEntity.setDescription("desc");
//        recipeEntity.setImage("https://cookingstorage.blob.core.windows.net/images/chicken.jpg");
//
//        recipeEntity.setRate("5");
//        recipeEntity.setServings("6");
//
//        recipeEntity.setCuisineType(5);
//        recipeEntity.setMealType(1);
//        recipeEntity.setPrepareTime(10);
//        recipeEntity.setDifficultyLevel(17);
//
//        recipeRepository.save(recipeEntity);
//
//        RecipeEntity recipeEntity1 = new RecipeEntity();
//        recipeEntity1.setCalories("300");
//        recipeEntity1.setCreatedAt(LocalDate.now());
//        recipeEntity1.setModifiedAt(LocalDate.now());
//        recipeEntity1.setName("Chicken supper");
//        recipeEntity1.setDescription("desccc");
//        recipeEntity1.setImage("https://cookingstorage.blob.core.windows.net/images/chicken.jpg");
//
//        recipeEntity1.setRate("4");
//        recipeEntity1.setServings("3");
//
//        recipeEntity1.setCuisineType(8);
//        recipeEntity1.setMealType(4);
//        recipeEntity1.setPrepareTime(13);
//        recipeEntity1.setDifficultyLevel(15);
//
//        recipeRepository.save(recipeEntity1);
//    }

    public List<ShortRecipeDTO> getShortRecipes(FilterQuestionnaireDTO filter) {
        return null;
    }

    @Transactional
    public RecipeDTO getRecipe(Integer id) {
        RecipeEntity recipeEntity = recipeRepository.findById(id).orElseThrow();
        RecipeDTO recipeDTO = RecipeMapper.mapToRecipeDTO(recipeEntity);
        recipeDTO.setCuisineTypeValue(
                dictionaryRepository.findById(recipeEntity.getCuisineType())
                .orElseThrow()
                .getValue());
        recipeDTO.setCuisineTypeValue(
                dictionaryRepository.findById(recipeEntity.getCuisineType())
                .orElseThrow()
                .getValue());
        recipeDTO.setMealTypeValue(
                dictionaryRepository.findById(recipeEntity.getMealType())
                .orElseThrow()
                .getValue());
        recipeDTO.setPrepareTimeValue(
                dictionaryRepository.findById(recipeEntity.getPrepareTime())
                .orElseThrow()
                .getValue());
        recipeDTO.setDifficultyLevelValue(
                dictionaryRepository.findById(recipeEntity.getDifficultyLevel())
                .orElseThrow()
                .getValue());

        return recipeDTO;
    }
}
