package com.us.cooking.mapper;

import com.us.cooking.dto.QuestionnaireDTO;
import com.us.cooking.model.DictionaryEntity;

import java.util.List;

public class DictionaryMapper {

    public static QuestionnaireDTO mapToQuestionnaireDTO(DictionaryEntity.QuestionnaireTypes type, List<String> values) {
        return QuestionnaireDTO.builder()
                .type(type)
                .values(values)
                .build();
    }
}
