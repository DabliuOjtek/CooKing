package com.us.cooking.repository;

import com.us.cooking.model.DictionaryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DictionaryRepository extends JpaRepository<DictionaryEntity, Integer> {
}
