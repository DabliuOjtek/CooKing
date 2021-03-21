package com.us.cooking.repository;

import com.us.cooking.model.DictionaryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DictionaryRepository extends JpaRepository<DictionaryEntity, Integer> {

    @Query("select distinct type from DictionaryEntity")
    List<String> findDistinctTypes();

    @Query("select value from DictionaryEntity where type = ?1")
    List<String> findValueByType(String type);
}
