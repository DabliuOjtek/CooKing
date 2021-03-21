package com.us.cooking.service;

import com.us.cooking.model.IngredientEntity;
import com.us.cooking.repository.IngredientRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class IngredientService {

    private final IngredientRepository ingredientRepository;

//    public void saveIng() {
//        IngredientEntity ingredientEntity = new IngredientEntity();
//        ingredientEntity.setName("white rice");
//        ingredientRepository.save(ingredientEntity);
//
//        IngredientEntity ingredientEntity1 = new IngredientEntity();
//        ingredientEntity1.setName("water");
//        ingredientRepository.save(ingredientEntity1);
//
//        IngredientEntity ingredientEntity2 = new IngredientEntity();
//        ingredientEntity2.setName("tomato");
//        ingredientRepository.save(ingredientEntity2);
//
//        IngredientEntity ingredientEntity3 = new IngredientEntity();
//        ingredientEntity3.setName("olive oil");
//        ingredientRepository.save(ingredientEntity3);
//
//        IngredientEntity ingredientEntity4 = new IngredientEntity();
//        ingredientEntity4.setName("garlic powder");
//        ingredientRepository.save(ingredientEntity4);
//
//        IngredientEntity ingredientEntity5 = new IngredientEntity();
//        ingredientEntity5.setName("spinach");
//        ingredientRepository.save(ingredientEntity5);
//    }
}
