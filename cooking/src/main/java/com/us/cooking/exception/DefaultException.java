package com.us.cooking.exception;

import lombok.Getter;

import java.util.List;
import java.util.NoSuchElementException;

@Getter
public class DefaultException extends RuntimeException {

    private List<String> errors;

    public DefaultException(String message) {
        super(message);
    }

    public DefaultException(List<String> errors) {
        this.errors = errors;
    }

    public static NoSuchElementException throwExceptionWithProperMessage(String message) {
        return new NoSuchElementException(message);
    }
}
