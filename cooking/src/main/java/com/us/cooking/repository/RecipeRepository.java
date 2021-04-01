package com.us.cooking.repository;

import com.us.cooking.model.RecipeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RecipeRepository extends JpaRepository<RecipeEntity, Integer> {

    List<RecipeEntity> findByCuisineTypeIdAndDifficultyLevelIdAndMealTypeIdAndPrepareTimeId(
            Integer cuisineTypeId, Integer difficultyLevelId, Integer mealTypeId, Integer prepareTimeId
    );
}
