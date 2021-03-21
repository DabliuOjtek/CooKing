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
    private Byte[] image;
    private String rate;
    private String calories;
    private String servings;
    private String ingredientsAmount;
    @Column(name = "cuisine_dict_id")
    private Integer cuisineType;
    @Column(name = "meal_dict_id")
    private Integer mealType;
    @Column(name = "prepare_time_dict_id")
    private Integer prepareTime;
    @Column(name = "difficulty_level_dict_id")
    private Integer difficultyLevel;
    private LocalDate createdAt;
    private LocalDate modifiedAt;

    @OneToMany(mappedBy = "recipeEntity", fetch = FetchType.LAZY)
    private List<RecipeIngredientsEntity> ingredients;

}
