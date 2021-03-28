package com.us.cooking.service;

import com.us.cooking.dto.FilterQuestionnaireDTO;
import com.us.cooking.dto.RecipeDTO;
import com.us.cooking.dto.ShortRecipeDTO;
import com.us.cooking.exception.DefaultException;
import com.us.cooking.mapper.RecipeMapper;
import com.us.cooking.model.RecipeEntity;
import com.us.cooking.repository.DictionaryRepository;
import com.us.cooking.repository.RecipeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Collections;
import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class RecipeService {

    private final RecipeRepository recipeRepository;
    private final DictionaryRepository dictionaryRepository;

    public List<ShortRecipeDTO> getRandomizedShortRecipes(FilterQuestionnaireDTO filter) {
        ShortRecipeService shortRecipeService = new ShortRecipeService(dictionaryRepository, recipeRepository);
        shortRecipeService.setFilter(filter);
        shortRecipeService.setAllQuestionnaireValues();
        List<String> errors = shortRecipeService.getErrors();
        if (!errors.isEmpty())
            throw new DefaultException(errors);
        List<ShortRecipeDTO> shortRecipes = shortRecipeService.getShortRecipes();
        Collections.shuffle(shortRecipes);
        if (shortRecipes.isEmpty())
            throw new DefaultException("Cannot find any recipes from given filter");
        //to jeszcze bardziej mozna zrefaktorowac
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
        RecipeEntity recipeEntity = new RecipeEntity();
        try {
            recipeEntity = getRecipeEntity(id);
        } catch (NoSuchElementException e) {
            throw new DefaultException(e.getMessage());
        }
        RecipeDTO recipeDTO = RecipeMapper.mapToRecipeDTO(recipeEntity);

        String cuisineTypeValue = getCuisineTypeValue(recipeEntity);
        recipeDTO.setCuisineTypeValue(cuisineTypeValue);

        String mealTypeValue = getMealTypeValue(recipeEntity);
        recipeDTO.setMealTypeValue(mealTypeValue);

        String prepareTimeValue = getPrepareTimeValue(recipeEntity);
        recipeDTO.setPrepareTimeValue(prepareTimeValue);

        String difficultyLevelValue = getDifficultyLevelValue(recipeEntity);
        recipeDTO.setDifficultyLevelValue(difficultyLevelValue);
        //nie wiem czy chcesz to wszystko oddzielnie try'owac tak jak jest w ShortRecipeService ale chyba tak trzeba

        return recipeDTO;
    }

    private RecipeEntity getRecipeEntity(Integer id) {
        return recipeRepository.findById(id).
                orElseThrow(() -> DefaultException.throwExceptionWithProperMessage("Cannot find any recipe from given id"));
    }

    private String getCuisineTypeValue(RecipeEntity recipeEntity) {
        return dictionaryRepository.findById(recipeEntity.getCuisineTypeId())
                .orElseThrow(() -> DefaultException.throwExceptionWithProperMessage("Invalid cuisine type in found recipe"))
                .getValue();
    }

    private String getMealTypeValue(RecipeEntity recipeEntity) {
        return dictionaryRepository.findById(recipeEntity.getMealTypeId())
                .orElseThrow(() -> DefaultException.throwExceptionWithProperMessage("Invalid meal type in found recipe"))
                .getValue();
    }

    private String getPrepareTimeValue(RecipeEntity recipeEntity) {
        return dictionaryRepository.findById(recipeEntity.getPrepareTimeId())
                .orElseThrow(() -> DefaultException.throwExceptionWithProperMessage("Invalid prepare time in found recipe"))
                .getValue();
    }

    private String getDifficultyLevelValue(RecipeEntity recipeEntity) {
        return dictionaryRepository.findById(recipeEntity.getDifficultyLevelId())
                .orElseThrow(() -> DefaultException.throwExceptionWithProperMessage("Invalid difficulty level in found recipe"))
                .getValue();
    }
}
