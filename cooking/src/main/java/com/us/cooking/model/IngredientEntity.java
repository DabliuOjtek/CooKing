package com.us.cooking.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Setter
@Getter
@Table(name = "ingredient")
public class IngredientEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer ingredientId;

    private String name;
}
