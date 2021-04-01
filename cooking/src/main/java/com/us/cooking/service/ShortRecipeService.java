package com.us.cooking.service;

import com.us.cooking.dto.FilterQuestionnaireDTO;
import com.us.cooking.dto.ShortRecipeDTO;
import com.us.cooking.exception.DefaultException;
import com.us.cooking.mapper.RecipeMapper;
import com.us.cooking.model.DictionaryEntity;
import com.us.cooking.repository.DictionaryRepository;
import com.us.cooking.repository.RecipeRepository;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@Service
@Setter
@Getter
@RequiredArgsConstructor
public class ShortRecipeService {

    private final DictionaryRepository dictionaryRepository;
    private final RecipeRepository recipeRepository;

    private Integer cuisineTypeId; //TODO poczytac o tych polach i ich umiesczeiu
    private Integer levelOfCookingSkillId;
    private Integer mealTypeId;
    private Integer preparationTimeId;
    private FilterQuestionnaireDTO filter;

    public List<ShortRecipeDTO> getRandomizedShortRecipes(FilterQuestionnaireDTO filter) {
        this.setFilter(filter);
        List<String> errors = this.setAndCheckAllQuestionnaireValues();

        if (!errors.isEmpty())
            throw new DefaultException(errors);

        List<ShortRecipeDTO> shortRecipes = this.getShortRecipes();
        if (shortRecipes.isEmpty())
            throw new DefaultException("Cannot find any recipes from given filter");

        Collections.shuffle(shortRecipes);
        return shortRecipes;
    }

    public List<String> setAndCheckAllQuestionnaireValues() {
        List<String> errors = new ArrayList<>();

        try {
            this.cuisineTypeId = setCuisineType();
        } catch (NoSuchElementException e) {
            errors.add(e.getMessage());
        }
        try {
            this.levelOfCookingSkillId = setLevelOfCookingSkillId();
        } catch (NoSuchElementException e) {
            errors.add(e.getMessage());
        }
        try {
            this.mealTypeId = setMealTypeId();
        } catch (NoSuchElementException e) {
            errors.add(e.getMessage());
        }
        try {
            this.preparationTimeId = setPreparationTimeId();
        } catch (NoSuchElementException e) {
            errors.add(e.getMessage());
        }

        return errors;
    }

    public List<ShortRecipeDTO> getShortRecipes() {
        return recipeRepository.findByCuisineTypeIdAndDifficultyLevelIdAndMealTypeIdAndPrepareTimeId(
                this.cuisineTypeId, this.levelOfCookingSkillId, this.mealTypeId, this.preparationTimeId).stream()
                    .map(RecipeMapper::mapToShortRecipeDTO)
                    .collect(Collectors.toList());
    }

    private Integer setCuisineType() {
        DictionaryEntity.QuestionnaireTypes questionnaireType = DictionaryEntity.QuestionnaireTypes.CUISINE_TYPE;
        String cuisineType = questionnaireType.name();
        return dictionaryRepository.findByTypeAndValue(cuisineType, filter.getCuisineTypeValue())
                .orElseThrow(() -> new NoSuchElementException("Invalid cuisine type"))
                .getDictionaryId();
    }

    private Integer setLevelOfCookingSkillId() {
        DictionaryEntity.QuestionnaireTypes questionnaireType = DictionaryEntity.QuestionnaireTypes.LEVEL_OF_COOKING_SKILL;
        String levelOfCookingSkill = questionnaireType.name();
        return dictionaryRepository.findByTypeAndValue(levelOfCookingSkill, filter.getLevelOfCookingSkillValue())
                .orElseThrow(() -> new NoSuchElementException("Invalid level of cooking skill"))
                .getDictionaryId();
    }

    private Integer setMealTypeId() {
        DictionaryEntity.QuestionnaireTypes questionnaireType = DictionaryEntity.QuestionnaireTypes.MEAL_TYPE;
        String mealType = questionnaireType.name();
        return dictionaryRepository.findByTypeAndValue(mealType, filter.getMealTypeValue())
                .orElseThrow(() -> new NoSuchElementException("Invalid meal type"))
                .getDictionaryId();
    }

    private Integer setPreparationTimeId() {
        DictionaryEntity.QuestionnaireTypes questionnaireType = DictionaryEntity.QuestionnaireTypes.PREPARATION_TIME;
        String preparationTime = questionnaireType.name();
        return dictionaryRepository.findByTypeAndValue(preparationTime, filter.getPreparationTimeValue())
                .orElseThrow(() -> new NoSuchElementException("Invalid preparation time"))
                .getDictionaryId();
    }
}
