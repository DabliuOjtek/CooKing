package com.us.cooking.dto;

import lombok.Data;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
public class ChangePasswordDTO {
    @NotNull
    @Size(min = 6, max = 100)
    private String oldPassword;
    @NotNull
    @Size(min = 6, max = 100)
    private String newPassword;
}
