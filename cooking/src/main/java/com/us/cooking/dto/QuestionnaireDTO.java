package com.us.cooking.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class QuestionnaireDTO {
    private String type;
    private List<String> values;
}
