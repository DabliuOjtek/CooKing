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
import java.util.Collections;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class RecipeService {

    private final RecipeRepository recipeRepository;
    private final DictionaryRepository dictionaryRepository;

    public List<ShortRecipeDTO> getShortRecipes(List<FilterQuestionnaireDTO> filters) {
        Integer cuisineTypeId = null;
        Integer levelOfCookingSkillId = null;
        Integer mealTypeId = null;
        Integer preparationTimeId = null;

        for (FilterQuestionnaireDTO filter : filters) {
            switch (filter.getType()) {
                case CUISINE_TYPE:
                    cuisineTypeId = dictionaryRepository.findByTypeAndValue(filter.getType().name(), filter.getChosenValue())
                            .orElseThrow()
                            .getDictionaryId();
                    break;
                case LEVEL_OF_COOKING_SKILL:
                    levelOfCookingSkillId = dictionaryRepository.findByTypeAndValue(filter.getType().name(), filter.getChosenValue())
                            .orElseThrow()
                            .getDictionaryId();
                    break;
                case MEAL_TYPE:
                    mealTypeId = dictionaryRepository.findByTypeAndValue(filter.getType().name(), filter.getChosenValue())
                            .orElseThrow()
                            .getDictionaryId();
                    break;
                case PREPARATION_TIME:
                    preparationTimeId = dictionaryRepository.findByTypeAndValue(filter.getType().name(), filter.getChosenValue())
                            .orElseThrow()
                            .getDictionaryId();
                    break;
            }
        }

        List<ShortRecipeDTO> shortRecipes = recipeRepository.findByCuisineTypeIdAndDifficultyLevelIdAndMealTypeIdAndPrepareTimeId(
                cuisineTypeId, levelOfCookingSkillId, mealTypeId, preparationTimeId)
            .orElseThrow()
            .stream()
            .map(RecipeMapper::mapToShortRecipeDTO)
            .collect(Collectors.toList());

        Collections.shuffle(shortRecipes);

        return shortRecipes;
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

    @Transactional
    public RecipeDTO getRecipe(Integer id) {
        RecipeEntity recipeEntity = recipeRepository.findById(id).orElseThrow();
        RecipeDTO recipeDTO = RecipeMapper.mapToRecipeDTO(recipeEntity);
        recipeDTO.setCuisineTypeValue(
                dictionaryRepository.findById(recipeEntity.getCuisineTypeId())
                .orElseThrow()
                .getValue());
        recipeDTO.setMealTypeValue(
                dictionaryRepository.findById(recipeEntity.getMealTypeId())
                .orElseThrow()
                .getValue());
        recipeDTO.setPrepareTimeValue(
                dictionaryRepository.findById(recipeEntity.getPrepareTimeId())
                .orElseThrow()
                .getValue());
        recipeDTO.setDifficultyLevelValue(
                dictionaryRepository.findById(recipeEntity.getDifficultyLevelId())
                .orElseThrow()
                .getValue());

        return recipeDTO;
    }
}
