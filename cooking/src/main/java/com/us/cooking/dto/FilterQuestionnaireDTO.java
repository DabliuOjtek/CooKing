package com.us.cooking.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
public class FilterQuestionnaireDTO {
    @NotBlank
    @Size(max = 300)
    private String cuisineTypeValue;
    private String levelOfCookingSkillValue;
    private String mealTypeValue;
    private String preparationTimeValue;
}
