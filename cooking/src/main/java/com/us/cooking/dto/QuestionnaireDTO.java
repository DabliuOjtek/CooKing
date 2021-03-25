package com.us.cooking.dto;

import com.us.cooking.model.DictionaryEntity;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class QuestionnaireDTO {
    private DictionaryEntity.QuestionnaireTypes type;
    private List<String> values;
}
