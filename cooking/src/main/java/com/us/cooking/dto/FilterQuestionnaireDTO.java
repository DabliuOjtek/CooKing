package com.us.cooking.dto;

import com.us.cooking.model.DictionaryEntity;
import lombok.Data;

@Data
public class FilterQuestionnaireDTO {
    private DictionaryEntity.QuestionnaireTypes type;
    private String chosenValue;
}
