# Hệ Thống Quản Lý Trạm Đổi Pin Xe Điện (EVBS)

![EVBS Management System](https://img.shields.io/badge/EVBS-Management%20System-blue)
![React](https://img.shields.io/badge/React-v18.2.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v3.3.2-38b2ac)

## 📋 Tổng Quan

Hệ thống quản lý trạm đổi pin xe điện (EVBS - Electric Vehicle Battery Swap) là giải pháp toàn diện kết nối người sử dụng xe điện với hệ thống các trạm đổi pin hiện đại. Dự án bao gồm giao diện người dùng cho khách hàng, nhân viên trạm và quản trị viên hệ thống.

## 🚀 Tính Năng Chính

### 👤 Người Dùng (EV Driver)
- **Đăng ký & đăng nhập** tài khoản với xác thực bảo mật
- **Tìm kiếm trạm đổi pin** gần nhất thông qua bản đồ tương tác
- **Đặt lịch đổi pin** với các khoảng thời gian linh hoạt
- **Quản lý gói dịch vụ** và thanh toán trực tuyến
- **Theo dõi lịch sử giao dịch** và sức khỏe pin
- **Nhận thông báo** về lịch hẹn, ưu đãi và bảo trì

### 👨‍💼 Nhân Viên Trạm (Staff Panel)
- **Dashboard** theo dõi hoạt động trạm theo thời gian thực
- **Quản lý lịch hẹn** và xử lý quy trình đổi pin
- **Kiểm soát kho pin** và trạng thái sạc
- **Báo cáo sự cố** và yêu cầu bảo trì
- **Hỗ trợ khách hàng** tại trạm

### 👑 Quản Trị Viên (Admin Panel)
- **Quản lý toàn bộ hệ thống trạm** trên bản đồ
- **Phân tích dữ liệu** sử dụng, doanh thu và hiệu suất
- **Quản lý người dùng** và phân quyền nhân viên
- **Thiết lập gói dịch vụ** và chiến lược giá
- **Báo cáo tổng hợp** và dự báo xu hướng

## 🛠️ Công Nghệ Sử Dụng

### Frontend
- **React.js**: Thư viện JavaScript để xây dựng giao diện người dùng
- **React Router**: Điều hướng trong ứng dụng
- **Tailwind CSS**: Framework CSS tiện ích
- **Heroicons**: Bộ icon đẹp và đa dạng
- **Chart.js**: Tạo biểu đồ tương tác

### Backend (Không bao gồm trong repo này)
- **Node.js**: Runtime JavaScript cho server
- **Express**: Web framework cho Node.js
- **MongoDB**: Cơ sở dữ liệu NoSQL
- **JWT**: Xác thực và phân quyền người dùng

## 📦 Cài Đặt & Sử Dụng

### Yêu Cầu Hệ Thống
- **Node.js**: v16.0.0 trở lên
- **npm**: v8.0.0 trở lên
- **Trình duyệt hiện đại**: Chrome, Firefox, Edge, Safari

### Bước 1: Clone Dự Án
```bash
# Clone repository
git clone https://github.com/LePhuocTri2205/EvBS_FE.git

# Di chuyển vào thư mục dự án
cd EvBS_FE
```

### Bước 2: Cài Đặt Dependencies
```bash
# Sử dụng npm
npm install

# Hoặc sử dụng yarn
yarn install
```

### Bước 3: Chạy Ứng Dụng
```bash
# Khởi chạy môi trường development
npm start

# Hoặc sử dụng yarn
yarn start
```

Ứng dụng sẽ được chạy ở địa chỉ [http://localhost:3000](http://localhost:3000) (hoặc cổng khác nếu 3000 đã được sử dụng).

> **Lưu ý**: Lần đầu khởi động có thể mất từ 1-2 phút để webpack biên dịch toàn bộ mã nguồn.

### Bước 4: Build Cho Production
```bash
# Tạo phiên bản production
npm run build

# Hoặc sử dụng yarn
yarn build
```

Các file build sẽ được tạo trong thư mục `build/` sẵn sàng để triển khai.

## 🚦 Khắc Phục Sự Cố

### Lỗi "npm start takes too long"

Nếu quá trình khởi động quá chậm:

1. **Xóa và cài đặt lại node_modules**:
   ```bash
   npm cache clean --force
   rm -rf node_modules
   npm install
   ```

2. **Tắt Fast Refresh và Browser Auto-Open**:
   - Tạo file `.env` trong thư mục gốc với nội dung:
   ```
   FAST_REFRESH=false
   BROWSER=none
   ```

3. **Sử dụng Yarn thay vì NPM**:
   ```bash
   npm install -g yarn
   yarn
   yarn start
   ```

### Lỗi "Module not found" hoặc "Cannot find module"

Kiểm tra các import trong code và cài đặt lại dependencies:

```bash
npm install
# Hoặc cài đặt thư viện cụ thể bị thiếu
npm install <tên-thư-viện>
```

## 📂 Cấu Trúc Dự Án

```
evbs-management-system/
├── public/                 # Tài nguyên tĩnh
│   ├── images/             # Hình ảnh và icons
│   └── index.html          # HTML template
│
├── src/                    # Mã nguồn
│   ├── components/         # Components tái sử dụng
│   │   ├── Header.js       # Navigation header
│   │   ├── Footer.js       # Footer component
│   │   └── ...             # Các components khác
│   │
│   ├── pages/              # Các trang chính
│   │   ├── Home.js         # Trang chủ
│   │   ├── Login.js        # Trang đăng nhập
│   │   ├── Register.js     # Trang đăng ký
│   │   ├── AdminPanel.js   # Giao diện quản trị
│   │   ├── StaffPanel.js   # Giao diện nhân viên
│   │   ├── UserDashboard.js # Dashboard người dùng
│   │   └── ...             # Các trang khác
│   │
│   ├── App.js              # Component gốc
│   └── index.js            # Điểm khởi đầu
│
├── package.json            # Cấu hình npm và dependencies
└── README.md               # Tài liệu dự án
```

## 👥 Đăng Nhập Mẫu

### Tài khoản Admin
- **Email**: admin@evbs.com
- **Password**: admin123

### Tài khoản Nhân Viên
- **Email**: staff@evbs.com
- **Password**: staff123

### Tài khoản Người Dùng
- **Email**: user@example.com
- **Password**: user123

## 🌟 Tính Năng Sắp Tới

- **Tích hợp bản đồ thời gian thực** để hiển thị trạm và tình trạng pin
- **Ứng dụng di động** cho iOS và Android
- **Tích hợp thanh toán** qua ví điện tử và thẻ tín dụng
- **Hệ thống đánh giá và phản hồi** cho trạm đổi pin
- **Mô hình dự báo nhu cầu** sử dụng AI/ML

## 📝 Ghi Chú Phát Triển

- Dự án sử dụng cấu trúc component-based để dễ dàng mở rộng và bảo trì
- Tailwind CSS được sử dụng để styling nhanh chóng và responsive
- Mô hình quản lý state sử dụng React Hooks và Context API
- Dự án được thiết kế với khả năng mở rộng và tích hợp với backend API

## 📄 Giấy Phép

Dự án này được phân phối dưới giấy phép [MIT](LICENSE).

## 🙏 Lời Cảm Ơn

Cảm ơn tất cả những người đã đóng góp vào dự án này, từ ý tưởng ban đầu đến phát triển và thử nghiệm.

---

© 2025 EvBS - Electric Vehicle Battery Swap Management System