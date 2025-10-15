import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [registerData, setRegisterData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
    userType: 'driver', // Default user type is driver
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setRegisterData({
      ...registerData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement registration logic here
    console.log('Registration data:', registerData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">Đăng ký tài khoản</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Hoặc{' '}
            <Link to="/login" className="font-medium text-navy hover:text-navy-light">
              đăng nhập vào tài khoản hiện có
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            {/* User Type Selection */}
            <div className="flex justify-center space-x-4 mb-4">
              <div className="flex items-center">
                <input
                  id="driver"
                  name="userType"
                  type="radio"
                  value="driver"
                  checked={registerData.userType === 'driver'}
                  onChange={handleChange}
                  className="h-4 w-4 text-navy focus:ring-navy border-gray-300"
                />
                <label htmlFor="driver" className="ml-2 block text-sm text-gray-900">
                  Tài xế
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="staff"
                  name="userType"
                  type="radio"
                  value="staff"
                  checked={registerData.userType === 'staff'}
                  onChange={handleChange}
                  className="h-4 w-4 text-navy focus:ring-navy border-gray-300"
                />
                <label htmlFor="staff" className="ml-2 block text-sm text-gray-900">
                  Nhân viên trạm
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="fullName" className="sr-only">
                Họ và tên
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                className="input-field"
                placeholder="Họ và tên"
                value={registerData.fullName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="input-field"
                placeholder="Email"
                value={registerData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">
                Số điện thoại
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="input-field"
                placeholder="Số điện thoại"
                value={registerData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Mật khẩu
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="input-field"
                placeholder="Mật khẩu"
                value={registerData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="sr-only">
                Xác nhận mật khẩu
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="input-field"
                placeholder="Xác nhận mật khẩu"
                value={registerData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="agree-terms"
              name="agreeTerms"
              type="checkbox"
              required
              className="h-4 w-4 text-navy focus:ring-navy border-gray-300 rounded"
              checked={registerData.agreeTerms}
              onChange={handleChange}
            />
            <label htmlFor="agree-terms" className="ml-2 block text-sm text-gray-900">
              Tôi đồng ý với{' '}
              <Link to="/terms" className="text-navy hover:text-navy-light">
                điều khoản sử dụng
              </Link>{' '}
              và{' '}
              <Link to="/privacy-policy" className="text-navy hover:text-navy-light">
                chính sách bảo mật
              </Link>
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-navy hover:bg-navy-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy"
            >
              Đăng ký
            </button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-50 text-gray-500">Hoặc đăng ký với</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div>
              <button
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </button>
            </div>

            <div>
              <button
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 110-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0012.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;