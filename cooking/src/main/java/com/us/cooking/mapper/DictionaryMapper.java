package com.us.cooking.mapper;

import com.us.cooking.dto.QuestionnaireDTO;

import java.util.List;

public class DictionaryMapper {

    public static QuestionnaireDTO mapToQuestionnaireDTO(String type, List<String> values) {
        return QuestionnaireDTO.builder()
                .type(type)
                .values(values)
                .build();
    }
}
