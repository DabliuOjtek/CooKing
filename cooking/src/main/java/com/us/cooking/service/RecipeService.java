package com.us.cooking.service;

import com.us.cooking.model.RecipeEntity;
import com.us.cooking.repository.DictionaryRepository;
import com.us.cooking.repository.RecipeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
@RequiredArgsConstructor
public class RecipeService {
    private final RecipeRepository recipeRepository;
    private final DictionaryRepository dictionaryRepository;

    public void saveRecipe() {
//        DictionaryEntity dictionaryEntity = new DictionaryEntity();
//        dictionaryEntity.setType("test");
//        dictionaryEntity.setValue("testValue");
//        dictionaryRepository.save(dictionaryEntity);
        RecipeEntity recipeEntity = new RecipeEntity();
        recipeEntity.setCalories("test");
        recipeEntity.setCreatedAt(LocalDate.now());
        recipeEntity.setName("testName");
        recipeEntity.setDescription("testDec");
        recipeEntity.setImage(new Byte[]{0,1,0});
        recipeEntity.setRate("1");
        recipeEntity.setServings("2");
        recipeEntity.setIngredientsAmount("1");
        int id = 5;
//        dictionaryRepository.findById(id);
//        if (dictionaryRepository.findById(id).isEmpty())
//            throw new RuntimeException("test");
        recipeEntity.setCuisineType(id);
        recipeEntity.setMealType(id);
        recipeEntity.setPrepareTime(id);
        recipeEntity.setDifficultyLevel(id);
        recipeEntity.setModifiedAt(LocalDate.now());
        recipeRepository.save(recipeEntity);
    }

}
