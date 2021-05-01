package com.us.cooking.dto;

import lombok.Getter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Getter
public class UserDTO {
    @NotNull
    @Size(min = 5, max = 50)
    private String username;
    @NotNull
    @Size(min = 6, max = 100)
    private String password;
}
