package com.us.cooking.controller;

import com.us.cooking.dto.QuestionnaireDTO;
import com.us.cooking.dto.QuestionnaireQuestionDTO;
import com.us.cooking.service.DictionaryService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class QuestionnaireController {

    private final DictionaryService dictionaryService;

    @GetMapping("/questionnaire")
    public List<QuestionnaireDTO> getQuestionnaire() {
        return dictionaryService.getAllValuesForQuestionnaire();
    }

    @GetMapping("/questions")
    public List<QuestionnaireQuestionDTO> getAllQuestions() {
        return dictionaryService.getAllQuestionsForQuestionnaire();
    }

}
