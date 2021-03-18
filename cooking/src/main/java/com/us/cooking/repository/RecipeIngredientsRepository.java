package com.us.cooking.repository;

import com.us.cooking.model.RecipeIngredientsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecipeIngredientsRepository extends JpaRepository<RecipeIngredientsEntity, Integer> {
}
