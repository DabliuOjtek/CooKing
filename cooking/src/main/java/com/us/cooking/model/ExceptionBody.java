package com.us.cooking.model;

import lombok.Getter;
import org.springframework.stereotype.Component;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Getter
public class ExceptionBody {

    private final Integer status;
    private final String error;
    private final Integer errorsCount;
    private final List<String> errors;

    public ExceptionBody(Integer status, String error, List<String> errors) {
        this.status = status;
        this.error = error;
        this.errorsCount = errors.size();
        this.errors = errors;
    }

    public ExceptionBody(Integer status, String error, String errorMessage) {
        this.status = status;
        this.error = error;
        this.errorsCount = 1;
        this.errors = Collections.singletonList(errorMessage);
    }
}
