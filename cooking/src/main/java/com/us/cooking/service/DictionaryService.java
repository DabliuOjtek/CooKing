package com.us.cooking.service;

import com.us.cooking.dto.QuestionnaireDTO;
import com.us.cooking.mapper.DictionaryMapper;
import com.us.cooking.model.DictionaryEntity;
import com.us.cooking.repository.DictionaryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DictionaryService {

    private final DictionaryRepository dictionaryRepository;

    public List<QuestionnaireDTO> getAllValuesForQuestionnaire() {
        return Arrays.stream(DictionaryEntity.QuestionnaireTypes.values())
                .map(t -> DictionaryMapper.mapToQuestionnaireDTO(t, dictionaryRepository.findValueByType(t.name())))
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

//    public void saveQuestion() {
//        DictionaryEntity dictionaryEntity = new DictionaryEntity();
//        dictionaryEntity.setType("MEAL_TYPE_QUESTION");
//        dictionaryEntity.setValue("What type of meal do you want to choose?");
//
//        DictionaryEntity dictionaryEntity1 = new DictionaryEntity();
//        dictionaryEntity1.setType("CUISINE_TYPE_QUESTION");
//        dictionaryEntity1.setValue("What are your favorite cuisines?");
//
//        DictionaryEntity dictionaryEntity2 = new DictionaryEntity();
//        dictionaryEntity2.setType("PREPARATION_TIME_QUESTION");
//        dictionaryEntity2.setValue("How much time do you have?");
//
//        DictionaryEntity dictionaryEntity3 = new DictionaryEntity();
//        dictionaryEntity3.setType("LEVEL_OF_COOKING_SKILL_QUESTION");
//        dictionaryEntity3.setValue("How would you describe your cooking skills?");
//
//        dictionaryRepository.save(dictionaryEntity);
//        dictionaryRepository.save(dictionaryEntity1);
//        dictionaryRepository.save(dictionaryEntity2);
//        dictionaryRepository.save(dictionaryEntity3);
//    }
}
