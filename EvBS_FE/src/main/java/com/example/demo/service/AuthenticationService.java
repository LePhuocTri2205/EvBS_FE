package com.example.demo.service;

import com.example.demo.entity.Account;
import com.example.demo.repository.AuthenticationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuthenticationService {
    //Xử lý logic của controller đưa vô
    @Autowired
    AuthenticationRepository authenticationRepository;

    public Account register(Account account){
        //xử lý logic cho register

        //lưu vào database
        return authenticationRepository.save(account);
    }

    public List<Account> getAllAccount(){
        List<Account> accounts = authenticationRepository.findAll();
        return accounts;
    }
}
