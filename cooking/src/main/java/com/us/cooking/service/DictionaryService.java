package com.us.cooking.service;

import com.us.cooking.dto.QuestionnaireDTO;
import com.us.cooking.dto.QuestionnaireQuestionDTO;
import com.us.cooking.mapper.DictionaryMapper;
import com.us.cooking.model.DictionaryEntity;
import com.us.cooking.repository.DictionaryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DictionaryService {

    private final DictionaryRepository dictionaryRepository;

    public List<QuestionnaireDTO> getAllValuesForQuestionnaire() {
        return Arrays.stream(DictionaryEntity.QuestionnaireTypes.values())
                .map(t -> DictionaryMapper.mapToQuestionnaireDTO(t, dictionaryRepository.findValuesByType(t.name())))
                .collect(Collectors.toList());
    }

    public List<QuestionnaireQuestionDTO> getAllQuestionsForQuestionnaire() {
        return Arrays.stream(DictionaryEntity.QuestionnaireQuestionTypes.values())
                .map(t -> DictionaryMapper.mapToQuestionnaireQuestionDTO(t, dictionaryRepository.findValueByType(t.name())))
                .collect(Collectors.toList());
    }

}
