package com.us.cooking.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
public class FilterQuestionnaireDTO {
    @NotBlank()
    @Size(max = 100)
    private String cuisineTypeValue;
    @NotBlank()
    @Size(max = 100)
    private String levelOfCookingSkillValue;
    @NotBlank()
    @Size(max = 100)
    private String mealTypeValue;
    @NotBlank()
    @Size(max = 100)
    private String preparationTimeValue;
}
