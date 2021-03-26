package com.us.cooking.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "dictionary")
public class DictionaryEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer dictionaryId;

    private String type;
    private String value;

    public enum QuestionnaireTypes {
        MEAL_TYPE,
        CUISINE_TYPE,
        PREPARATION_TIME,
        LEVEL_OF_COOKING_SKILL
    }
}
