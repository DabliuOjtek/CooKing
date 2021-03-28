package com.us.cooking.model;

import lombok.Getter;

import java.util.List;

@Getter
public class ExceptionBody {

    private Integer status;
    private Integer errorsCount;
    private String error;
    private Object errors;

    public ExceptionBody(Integer status, String error, String message) {
        this.status = status;
        this.errorsCount = 1;
        this.error = error;
        this.errors = message;
    }

    public ExceptionBody(Integer status, String error, List<String> errors) {
        this.status = status;
        this.errorsCount = errors.size();
        this.error = error;
        this.errors = errors;
    }
}
