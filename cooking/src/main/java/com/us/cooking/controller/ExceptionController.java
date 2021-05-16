package com.us.cooking.controller;

import com.us.cooking.exception.DefaultException;
import com.us.cooking.model.ExceptionBody;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.validation.FieldError;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.MissingPathVariableException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.NoHandlerFoundException;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.ArrayList;
import java.util.List;

@ControllerAdvice
public class ExceptionController extends ResponseEntityExceptionHandler {

    @ExceptionHandler(DefaultException.class)
    protected ResponseEntity<ExceptionBody> handleDefaultException(DefaultException e) {
        HttpStatus status = HttpStatus.BAD_REQUEST;
        ExceptionBody body = new ExceptionBody(status.value(), status.getReasonPhrase(), e.getErrors());
        return new ResponseEntity<>(body, HttpStatus.valueOf(body.getStatus()));
    }

    @ExceptionHandler(AuthenticationException.class)
    protected ResponseEntity<ExceptionBody> handleAuthenticationException(AuthenticationException e) {
        HttpStatus status = HttpStatus.UNAUTHORIZED;
        ExceptionBody body = new ExceptionBody(status.value(), status.getReasonPhrase(), e.getMessage());
        return new ResponseEntity<>(body, HttpStatus.valueOf(body.getStatus()));
    }

    @ExceptionHandler(UsernameNotFoundException.class)
    protected ResponseEntity<ExceptionBody> handleUserNotFound(UsernameNotFoundException e) {
        HttpStatus status = HttpStatus.UNAUTHORIZED;
        ExceptionBody body = new ExceptionBody(status.value(), status.getReasonPhrase(), e.getMessage());
        return new ResponseEntity<>(body, HttpStatus.valueOf(body.getStatus()));
    }

    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        List<String> errors = new ArrayList<>();
        for (FieldError error : ex.getFieldErrors())
            errors.add(error.getField() + ": " + error.getDefaultMessage());
        ExceptionBody body = new ExceptionBody(status.value(), status.getReasonPhrase(), errors);
        return new ResponseEntity<>(body, HttpStatus.valueOf(body.getStatus()));
    }

    @Override
    protected ResponseEntity<Object> handleMissingServletRequestParameter(MissingServletRequestParameterException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        String message = "Missing parameter";
        ExceptionBody body = new ExceptionBody(status.value(), status.getReasonPhrase(), message);
        return new ResponseEntity<>(body, HttpStatus.valueOf(body.getStatus()));
    }

    @Override
    protected ResponseEntity<Object> handleHttpRequestMethodNotSupported(HttpRequestMethodNotSupportedException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        String message = "Bad HTTP method";
        ExceptionBody body = new ExceptionBody(status.value(), status.getReasonPhrase(), message);
        return new ResponseEntity<>(body, HttpStatus.valueOf(body.getStatus()));
    }

    @Override
    protected ResponseEntity<Object> handleMissingPathVariable(MissingPathVariableException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        String message = "Missing path variable";
        ExceptionBody body = new ExceptionBody(status.value(), status.getReasonPhrase(), message);
        return new ResponseEntity<>(body, HttpStatus.valueOf(body.getStatus()));
    }

    @Override
    protected ResponseEntity<Object> handleHttpMessageNotReadable(HttpMessageNotReadableException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        String message = "No request body or wrong structure of JSON";
        ExceptionBody body = new ExceptionBody(status.value(), status.getReasonPhrase(), message);
        return new ResponseEntity<>(body, HttpStatus.valueOf(body.getStatus()));
    }

    @Override
    protected ResponseEntity<Object> handleNoHandlerFoundException(NoHandlerFoundException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        String message = "No method found for this request";
        ExceptionBody body = new ExceptionBody(status.value(), status.getReasonPhrase(), message);
        return new ResponseEntity<>(body, HttpStatus.valueOf(body.getStatus()));
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Object> handleAllException(Exception ex, WebRequest request){
        String message = "Something went wrong";
        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;
        ExceptionBody body = new ExceptionBody(status.value(), status.getReasonPhrase(), message);
        return new ResponseEntity<>(body, HttpStatus.valueOf(body.getStatus()));
    }
}