package com.us.cooking.dto;

import com.us.cooking.model.DictionaryEntity;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class QuestionnaireQuestionDTO {
    private DictionaryEntity.QuestionnaireQuestionTypes type;
    private String value;
}
