package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    @NotEmpty(message = "Fullname can not empty!")
    String fullname;

    @Email
    String email;

    @NotEmpty(message = "Password can not empty!")
    String password;

    String gender;

    @Pattern(regexp = "^(03|05|07|08|09|012|016|018|019)[0-9]{8}$", message = "Phone invalid!")
    String phone;

}
