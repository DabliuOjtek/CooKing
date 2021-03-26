package com.us.cooking.controller;

import com.us.cooking.exception.DefaultException;
import com.us.cooking.model.ExceptionBody;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.List;

@ControllerAdvice
public class ExceptionController extends ResponseEntityExceptionHandler {

    @ExceptionHandler(DefaultException.class)
    public ResponseEntity<Object> handleDefaultException(DefaultException e, WebRequest request) {
        List<String> errors = e.getErrors();
        HttpStatus status = HttpStatus.BAD_REQUEST;
        ExceptionBody body = new ExceptionBody(status.value(), status.getReasonPhrase(), e.getMessage());
        if (errors != null)
            body = new ExceptionBody(status.value(), status.getReasonPhrase(), e.getErrors());
        return new ResponseEntity<>(body, HttpStatus.valueOf(body.getStatus()));
    }
    //dorobic inne Handlery
}
