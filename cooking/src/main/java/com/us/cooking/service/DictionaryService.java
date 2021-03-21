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
            return dictionaryRepository.findDistinctTypes().stream()
                .map(t -> DictionaryMapper.mapToQuestionnaireDTO(t, dictionaryRepository.findValueByType(t)))
                .collect(Collectors.toList());
    }

//    public void saveDict() {
//        DictionaryEntity dictionaryEntity1 = new DictionaryEntity();
//        dictionaryEntity1.setType("UNIT_TYPE");
//        dictionaryEntity1.setValue("");
//
//        dictionaryRepository.save(dictionaryEntity1);
//
//        DictionaryEntity dictionaryEntity2 = new DictionaryEntity();
//        dictionaryEntity2.setType("UNIT_TYPE");
//        dictionaryEntity2.setValue("gram");
//
//        dictionaryRepository.save(dictionaryEntity2);
//
//        DictionaryEntity dictionaryEntity3 = new DictionaryEntity();
//        dictionaryEntity3.setType("UNIT_TYPE");
//        dictionaryEntity3.setValue("milliliter");
//
//        dictionaryRepository.save(dictionaryEntity3);
//
//        DictionaryEntity dictionaryEntity4 = new DictionaryEntity();
//        dictionaryEntity4.setType("UNIT_TYPE");
//        dictionaryEntity4.setValue("tablespoon");
//
//        dictionaryRepository.save(dictionaryEntity4);
//
//        DictionaryEntity dictionaryEntity5 = new DictionaryEntity();
//        dictionaryEntity5.setType("UNIT_TYPE");
//        dictionaryEntity5.setValue("cup");
//
//        dictionaryRepository.save(dictionaryEntity5);
//    }
}
