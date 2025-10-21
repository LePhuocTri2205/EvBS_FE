package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	//Restfull API
	//Quản lí sinh viên

	// 1.Method(GET, POST: create new, PUT: update, DELETE: xóa)
	// 2.Url

	// 1a. Lấy danh sách tất cả sinh viên
	// => GET: /api/student

	// 1b. Lấy thông tin của sinh viên bằng id
	// => GET: /api/student/id

	// 2. Tạo ra một thằng sinh viên mới
	// => POST: /api/student

	// 3. Update thông tin của 1 thằng sinh viên
	// => PUT: /api/student/id

	//4. Delete thông tin 1 thằng nào đó
	// => DELETE: /api/student/id
}
