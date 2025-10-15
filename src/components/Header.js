import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <div className="h-10 w-10 bg-navy rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">EV</span>
              </div>
              <span className="ml-3 text-xl font-bold text-navy">EvBS</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-navy hover:text-navy-light font-medium">
              Trang chủ
            </Link>
            <Link to="/service-plans" className="text-navy hover:text-navy-light font-medium">
              Dịch vụ
            </Link>
            <Link to="/book-appointment" className="text-navy hover:text-navy-light font-medium">
              Đặt lịch
            </Link>
            <Link to="/stations" className="text-navy hover:text-navy-light font-medium">
              Trạm đổi pin
            </Link>
            <Link to="/support" className="text-navy hover:text-navy-light font-medium">
              Liên hệ
            </Link>
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="text-navy font-medium hover:text-navy-light">
              Đăng nhập
            </Link>
            <Link to="/register" className="btn-primary">
              Đăng ký
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-navy hover:text-navy-light focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-navy hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Trang chủ
            </Link>
            <Link
              to="/service-plans"
              className="block px-3 py-2 rounded-md text-base font-medium text-navy hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Dịch vụ
            </Link>
            <Link
              to="/book-appointment"
              className="block px-3 py-2 rounded-md text-base font-medium text-navy hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Đặt lịch
            </Link>
            <Link
              to="/stations"
              className="block px-3 py-2 rounded-md text-base font-medium text-navy hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Trạm đổi pin
            </Link>
            <Link
              to="/support"
              className="block px-3 py-2 rounded-md text-base font-medium text-navy hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Liên hệ
            </Link>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <Link
                to="/login"
                className="block px-3 py-2 rounded-md text-base font-medium text-navy hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Đăng nhập
              </Link>
              <Link
                to="/register"
                className="block px-3 py-2 mt-2 rounded-md text-base font-medium bg-navy text-white hover:bg-navy-light"
                onClick={() => setIsOpen(false)}
              >
                Đăng ký
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;