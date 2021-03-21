package com.us.cooking.dto;

import lombok.Data;

@Data
public class FilterQuestionnaireDTO {
    private Integer dictionaryId;
    private String type;
    private String chosenValue;
}
