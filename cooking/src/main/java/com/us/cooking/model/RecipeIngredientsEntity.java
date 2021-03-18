package com.us.cooking.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Setter
@Getter
@Table(name = "recipe_ingredients")
public class RecipeIngredientsEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer recipeIngredientsId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "recipe_id")
    private RecipeEntity recipeId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ingredient_id")
    private IngredientEntity ingredientEntity;

    private String quantity;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "unit_dict_id")
    private DictionaryEntity unitDictEntity;
}
