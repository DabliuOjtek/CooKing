package com.us.cooking.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
@Table(name = "token_blocklist")
public class TokenBlockListEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer tokenBlocklistId;
    private String token;
    private Date expiredAt;
}
