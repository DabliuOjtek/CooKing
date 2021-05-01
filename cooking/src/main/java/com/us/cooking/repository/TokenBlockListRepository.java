package com.us.cooking.repository;

import com.us.cooking.model.TokenBlockListEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TokenBlockListRepository extends JpaRepository<TokenBlockListEntity, Integer> {

    boolean existsByToken(String token);
}
