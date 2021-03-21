package com.us.cooking.service;

import com.us.cooking.dto.QuestionnaireDTO;
import com.us.cooking.mapper.DictionaryMapper;
import com.us.cooking.model.DictionaryEntity;
import com.us.cooking.repository.DictionaryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DictionaryService {

    private final DictionaryRepository dictionaryRepository;

    public List<QuestionnaireDTO> getAllValuesForQuestionnaire() {
        List<QuestionnaireDTO> questionnaireDTOS = new ArrayList<>();
        List<String> types = dictionaryRepository.findDistinctTypes();

        for (String type : types) {
            List<String> values = dictionaryRepository.findValueByType(type);
            questionnaireDTOS.add(DictionaryMapper.mapToQuestionnaireDTO(type, values));
        }

        return questionnaireDTOS;
    }
}
