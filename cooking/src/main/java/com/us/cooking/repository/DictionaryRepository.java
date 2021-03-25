package com.us.cooking.repository;

import com.us.cooking.model.DictionaryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DictionaryRepository extends JpaRepository<DictionaryEntity, Integer> {

    @Query("select value from DictionaryEntity where type = ?1")
    List<String> findValueByType(String type);

    Optional<DictionaryEntity> findByTypeAndValue(String type, String value);
}