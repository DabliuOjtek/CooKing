package com.us.cooking.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
public class FilterQuestionnaireDTO {
    @NotBlank(message = "Cannot be null")
    @Size(max = 100, message = "Too many character [max 100]")
    private String cuisineTypeValue;
    @NotBlank(message = "Cannot be null")
    @Size(max = 100, message = "Too many character [max 100]")
    private String levelOfCookingSkillValue;
    @NotBlank(message = "Cannot be null")
    @Size(max = 100, message = "Too many character [max 100]")
    private String mealTypeValue;
    @NotBlank(message = "Cannot be null")
    @Size(max = 100, message = "Too many character [max 100]")
    private String preparationTimeValue;
}
