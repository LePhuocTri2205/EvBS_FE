package com.example.demo.model;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Getter;

@Getter
public class Student {
    private int id;

    @NotNull(message = "Name can not be null!")
    private String name;

    @Pattern(regexp = "SE\\d{6}", message = "Code must be follow format: SExxxxxx")
    private String code; //SE130280
}
