package com.example.demo.controller;

import com.example.demo.model.Student;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController // đánh dấu cho string boot biết đây là lớp chứa API
public class StudentController {

    List<Student> students = new ArrayList<>();

    // 1a. Lấy danh sách tất cả sinh viên
    // => GET: /api/student
    @GetMapping("/api/student")
    public ResponseEntity get(){
        return ResponseEntity.ok(students);
    }
    // 1b. Lấy thông tin của sinh viên bằng id
    // => GET: /api/student/id

    // 2. Tạo ra một thằng sinh viên mới
    // => POST: /api/student
    @PostMapping("/api/student")
    public ResponseEntity create(@Valid  @RequestBody Student student){
        students.add(student);
        return ResponseEntity.ok(student);
    }

    // 3. Update thông tin của 1 thằng sinh viên
    // => PUT: /api/student/id

    //4. Delete thông tin 1 thằng nào đó
    // => DELETE: /api/student/id
}
