package com.example.demo.controller;

import com.example.demo.entity.Account;
import com.example.demo.service.AuthenticationService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AuthenticationController {
    //S.O.L.I.D

    // điều hướng (controller) => xử lý logic (service) => lưu DB (repository) (JPA)
    @Autowired
    AuthenticationService authenticationService;

    @PostMapping("/api/account")
    public ResponseEntity register(@Valid @RequestBody Account account){
        // nhận yêu cầu từ FE
        // => Đẩy qua AuthenticationService
        Account newAccount = authenticationService.register(account);
        return ResponseEntity.ok(newAccount);
    }

    @GetMapping("/api/account")
    public ResponseEntity getAllAccount(){
        List<Account> accounts = authenticationService.getAllAccount();
        return ResponseEntity.ok(accounts);
    }

}
