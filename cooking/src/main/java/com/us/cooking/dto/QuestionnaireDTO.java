package com.us.cooking.dto;

import lombok.Data;

import java.util.List;

@Data
public class QuestionnaireDTO {
    private Integer dictionaryId;
    private String type;
    private List<String> values;
}
