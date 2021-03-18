package com.us.cooking.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@Table(name = "recipe")
public class RecipeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer recipeId;
    private String name;
    private String description;
    private Byte[] image;
    private String rate;
    private String calories;
    private String servings;
    private String ingredientsAmount;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "dictionaryId")
    private DictionaryEntity cuisineType;
    @ManyToOne
    @JoinColumn(name = "dictionaryId")
    private DictionaryEntity mealType;
    @ManyToOne
    @JoinColumn(name = "dictionaryId")
    private DictionaryEntity prepareTime;
    @ManyToOne
    @JoinColumn(name = "dictionaryId")
    private DictionaryEntity difficultyLevel;
    private LocalDate createdAt;
    private LocalDate modifiedAt;


}
