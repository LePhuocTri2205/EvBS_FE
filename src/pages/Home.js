import React from 'react';
import { Link } from 'react-router-dom';

// Components
import FeatureCard from '../components/FeatureCard';

const Home = () => {
  const features = [
    {
      title: 'Đổi pin nhanh chóng',
      description: 'Chỉ mất 3 phút để thay pin mới, tiết kiệm thời gian di chuyển.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Mạng lưới rộng khắp',
      description: 'Hơn 200 trạm đổi pin trên toàn quốc, dễ dàng tìm kiếm trạm gần nhất.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'Đặt lịch trước',
      description: 'Chủ động đặt lịch trước để không phải chờ đợi khi đến trạm.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Gói dịch vụ linh hoạt',
      description: 'Nhiều gói dịch vụ phù hợp với nhu cầu sử dụng và ngân sách.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Giải pháp đổi pin thông minh cho xe điện của bạn
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Tiết kiệm thời gian với dịch vụ đổi pin nhanh chóng chỉ trong vài phút, tại hơn 200 trạm trên toàn quốc.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/book-appointment" className="btn-primary text-lg px-8 py-3">
                Đặt lịch ngay
              </Link>
              <Link to="/stations" className="bg-white text-navy hover:bg-gray-100 font-bold py-3 px-8 rounded-md transition-all duration-300 text-lg">
                Tìm trạm gần nhất
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="rounded-lg shadow-xl bg-gradient-to-r from-blue-500 to-navy p-8 h-full flex flex-col items-center justify-center">
              <div className="text-4xl font-bold text-white mb-4 text-center">Hệ Thống Đổi Pin</div>
              <div className="text-2xl text-white text-center">Nhanh chóng • Tiện lợi • Hiệu quả</div>
              <div className="mt-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Giải pháp đổi pin hiện đại</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hệ thống trạm đổi pin xe điện thông minh, tiết kiệm thời gian và chi phí cho người dùng.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card hover:border-navy">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quy trình đổi pin</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Đổi pin xe điện chưa bao giờ đơn giản và nhanh chóng như thế.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-navy text-white text-2xl font-bold mb-4">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Đặt lịch trên ứng dụng</h3>
              <p className="text-gray-600">Chọn trạm gần nhất và thời gian phù hợp để đổi pin thông qua ứng dụng di động.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-navy text-white text-2xl font-bold mb-4">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Đến trạm và quét QR</h3>
              <p className="text-gray-600">Đến trạm theo lịch hẹn, quét mã QR để xác nhận và bắt đầu quy trình đổi pin.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-navy text-white text-2xl font-bold mb-4">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Nhận pin mới và lên đường</h3>
              <p className="text-gray-600">Nhân viên sẽ thay pin mới cho xe của bạn chỉ trong vòng 3 phút, sau đó bạn có thể tiếp tục hành trình.</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/book-appointment" className="btn-primary text-lg px-8 py-3">
              Trải nghiệm ngay
            </Link>
          </div>
        </div>
      </section>

      {/* Service Plans Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Gói dịch vụ</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lựa chọn gói dịch vụ phù hợp với nhu cầu sử dụng của bạn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cơ bản</h3>
              <div className="text-4xl font-bold text-navy mb-4">300.000 đ<span className="text-lg text-gray-600">/tháng</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>5 lần đổi pin/tháng</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Truy cập mạng lưới trạm toàn quốc</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Hỗ trợ kỹ thuật cơ bản</span>
                </li>
              </ul>
              <Link to="/service-plans" className="btn-secondary w-full text-center">
                Đăng ký
              </Link>
            </div>

            <div className="card border-2 border-navy relative">
              <div className="absolute top-0 right-0 bg-navy text-white px-3 py-1 text-sm font-semibold rounded-bl-md">
                Phổ biến
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tiêu chuẩn</h3>
              <div className="text-4xl font-bold text-navy mb-4">500.000 đ<span className="text-lg text-gray-600">/tháng</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>10 lần đổi pin/tháng</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Truy cập mạng lưới trạm toàn quốc</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Ưu tiên đổi pin tại trạm</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Hỗ trợ kỹ thuật 24/7</span>
                </li>
              </ul>
              <Link to="/service-plans" className="btn-primary w-full text-center">
                Đăng ký
              </Link>
            </div>

            <div className="card border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cao cấp</h3>
              <div className="text-4xl font-bold text-navy mb-4">800.000 đ<span className="text-lg text-gray-600">/tháng</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Không giới hạn số lần đổi pin</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Truy cập mạng lưới trạm toàn quốc</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Ưu tiên cao nhất tại trạm</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Hỗ trợ kỹ thuật VIP 24/7</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Dịch vụ cứu hộ miễn phí</span>
                </li>
              </ul>
              <Link to="/service-plans" className="btn-secondary w-full text-center">
                Đăng ký
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Sẵn sàng trải nghiệm dịch vụ đổi pin thông minh?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Tham gia cùng hơn 50.000 khách hàng đang sử dụng hệ thống đổi pin xe điện EvBS.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register" className="bg-white text-navy hover:bg-gray-100 font-bold py-3 px-8 rounded-md transition-all duration-300 text-lg">
              Đăng ký ngay
            </Link>
            <Link to="/stations" className="border-2 border-white text-white hover:bg-white hover:text-navy font-bold py-3 px-8 rounded-md transition-all duration-300 text-lg">
              Tìm trạm gần nhất
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;