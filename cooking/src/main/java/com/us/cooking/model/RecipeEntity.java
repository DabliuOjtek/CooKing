package com.us.cooking.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "recipe")
public class RecipeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer recipeId;

    private String name;
    private String description;
    private String image;
    private String rate;
    private String calories;
    private String servings;
    @Column(name = "cuisine_dict_id")
    private Integer cuisineTypeId;
    @Column(name = "meal_dict_id")
    private Integer mealTypeId;
    @Column(name = "prepare_time_dict_id")
    private Integer prepareTimeId;
    @Column(name = "difficulty_level_dict_id")
    private Integer difficultyLevelId;
    private LocalDate createdAt;
    private LocalDate modifiedAt;

    @OneToMany(mappedBy = "recipeEntity", fetch = FetchType.LAZY)
    private List<RecipeIngredientsEntity> ingredients;

}
