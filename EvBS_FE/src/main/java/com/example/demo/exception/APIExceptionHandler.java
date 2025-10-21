package com.example.demo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.lang.reflect.Field;

@RestControllerAdvice
public class APIExceptionHandler {
    // chạy mỗi khi dính lỗi
    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity handleBadRequest(MethodArgumentNotValidException exception){
        String message = "";

        for(FieldError fieldError: exception.getBindingResult().getFieldErrors()){
            message += fieldError.getField() + ": "  + fieldError.getDefaultMessage();
        }
        return ResponseEntity.badRequest().body(message);
    }

    //ORM : Object Relationship Mapping => Data JPA
    //code first

}
