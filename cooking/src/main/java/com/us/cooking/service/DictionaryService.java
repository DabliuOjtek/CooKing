package com.us.cooking.service;

import com.us.cooking.dto.QuestionnaireDTO;
import com.us.cooking.repository.DictionaryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DictionaryService {

    private final DictionaryRepository dictionaryRepository;

    public List<QuestionnaireDTO> getAllValuesForQuestionnaire() {
        return null;
    }
}
