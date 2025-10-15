import React, { useState } from 'react';
import FeedbackForm from '../components/FeedbackForm';

const Support = () => {
  const [activeTab, setActiveTab] = useState('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    supportType: 'general',
  });
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Cảm ơn bạn đã gửi yêu cầu hỗ trợ. Chúng tôi sẽ phản hồi sớm nhất có thể!');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      supportType: 'general',
    });
  };

  // Demo FAQ data
  const faqs = [
    {
      question: 'Làm thế nào để đăng ký sử dụng dịch vụ đổi pin?',
      answer: 'Bạn có thể đăng ký tài khoản trên website hoặc ứng dụng di động của chúng tôi. Sau đó, chọn gói dịch vụ phù hợp và hoàn tất thanh toán để bắt đầu sử dụng dịch vụ đổi pin.',
      category: 'account',
    },
    {
      question: 'Tôi cần mang theo những gì khi đến trạm đổi pin?',
      answer: 'Bạn cần mang theo điện thoại có cài đặt ứng dụng EvBS đã đăng nhập tài khoản của bạn (để quét mã QR), giấy tờ tùy thân và giấy đăng ký xe (nếu đây là lần đầu tiên bạn sử dụng dịch vụ).',
      category: 'service',
    },
    {
      question: 'Nếu tôi không hài lòng với pin được đổi thì sao?',
      answer: 'Nếu pin được đổi không đáp ứng tiêu chuẩn chất lượng hoặc gặp vấn đề kỹ thuật, bạn có thể quay lại trạm trong vòng 24 giờ để được kiểm tra và thay thế miễn phí. Trong trường hợp cần thiết, bạn có thể liên hệ hotline 1900 2345 67 để được hỗ trợ.',
      category: 'service',
    },
    {
      question: 'Làm thế nào để tôi hủy hoặc thay đổi lịch hẹn đổi pin?',
      answer: 'Bạn có thể hủy hoặc thay đổi lịch hẹn trực tiếp trên ứng dụng hoặc website của chúng tôi, trong mục "Lịch hẹn". Việc hủy lịch cần được thực hiện ít nhất 2 giờ trước thời điểm hẹn để không bị tính phí hủy trễ.',
      category: 'booking',
    },
    {
      question: 'Tôi có thể nâng cấp hoặc hạ cấp gói dịch vụ không?',
      answer: 'Có, bạn có thể thay đổi gói dịch vụ bất kỳ lúc nào trong phần "Quản lý gói dịch vụ" trên tài khoản của bạn. Việc nâng cấp sẽ được áp dụng ngay lập tức, trong khi hạ cấp sẽ có hiệu lực từ kỳ thanh toán tiếp theo.',
      category: 'billing',
    },
    {
      question: 'Thời gian đổi pin thông thường mất bao lâu?',
      answer: 'Quy trình đổi pin tiêu chuẩn của chúng tôi chỉ mất khoảng 3-5 phút, tùy thuộc vào loại xe và tình trạng pin. Trong trường hợp trạm đông khách, thời gian chờ có thể kéo dài, nhưng bạn có thể đặt lịch trước để giảm thời gian chờ đợi.',
      category: 'service',
    },
    {
      question: 'Làm thế nào để tìm trạm đổi pin gần nhất?',
      answer: 'Bạn có thể sử dụng tính năng "Tìm trạm" trên ứng dụng hoặc website của chúng tôi. Ứng dụng sẽ hiển thị các trạm gần nhất dựa trên vị trí của bạn, kèm theo thông tin về khoảng cách, số lượng pin có sẵn và thời gian hoạt động.',
      category: 'station',
    },
    {
      question: 'Các phương thức thanh toán nào được chấp nhận?',
      answer: 'Chúng tôi chấp nhận thanh toán qua thẻ tín dụng/ghi nợ, chuyển khoản ngân hàng, ví điện tử (MoMo, ZaloPay, VNPay) và tiền mặt tại một số trạm đổi pin nhất định.',
      category: 'billing',
    },
  ];

  // Filter FAQs based on search query
  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">Hỗ trợ & Liên hệ</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Chúng tôi luôn sẵn sàng hỗ trợ bạn. Hãy cho chúng tôi biết câu hỏi hoặc vấn đề bạn đang gặp phải.
          </p>
        </div>

        {/* Tab navigation */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px space-x-8">
              <button
                onClick={() => setActiveTab('contact')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'contact'
                    ? 'border-navy text-navy'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Liên hệ
              </button>
              <button
                onClick={() => setActiveTab('faq')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'faq'
                    ? 'border-navy text-navy'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Câu hỏi thường gặp
              </button>
              <button
                onClick={() => setActiveTab('guides')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'guides'
                    ? 'border-navy text-navy'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Hướng dẫn sử dụng
              </button>
            </nav>
          </div>
        </div>

        {/* Tab content */}
        <div className="max-w-4xl mx-auto">
          {/* Contact form */}
          {activeTab === 'contact' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="card">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Gửi yêu cầu hỗ trợ</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="supportType" className="block text-sm font-medium text-gray-700 mb-1">
                        Loại hỗ trợ
                      </label>
                      <select
                        id="supportType"
                        name="supportType"
                        value={formData.supportType}
                        onChange={handleChange}
                        className="input-field"
                        required
                      >
                        <option value="general">Hỗ trợ chung</option>
                        <option value="technical">Hỗ trợ kỹ thuật</option>
                        <option value="billing">Thanh toán & Hoá đơn</option>
                        <option value="booking">Đặt lịch & Huỷ lịch</option>
                        <option value="complaint">Khiếu nại</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Họ và tên
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="input-field"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="input-field"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Số điện thoại
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="input-field"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Tiêu đề
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="input-field"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Nội dung
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="input-field"
                        required
                      ></textarea>
                    </div>

                    <div>
                      <button type="submit" className="btn-primary w-full">
                        Gửi yêu cầu
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="md:col-span-1">
                <div className="card mb-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Thông tin liên hệ</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-navy mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <div>
                        <p className="font-medium">Hotline</p>
                        <p className="text-gray-600">1900 2345 67</p>
                        <p className="text-gray-500 text-sm">(8:00 - 22:00, mỗi ngày)</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-navy mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-600">support@evbs.vn</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-navy mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <p className="font-medium">Địa chỉ</p>
                        <p className="text-gray-600">Số 1 Đại Cồ Việt, Quận 1, Thành phố Hồ Chí Minh</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="card">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Giờ làm việc</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Thứ Hai - Thứ Sáu:</span>
                      <span>8:00 - 20:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Thứ Bảy:</span>
                      <span>8:00 - 18:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Chủ Nhật:</span>
                      <span>8:00 - 16:00</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-gray-500 text-sm">
                      Hotline hỗ trợ khẩn cấp 24/7: 1900 2345 68
                    </p>
                  </div>
                </div>

                <div className="card mt-6">
                  <FeedbackForm 
                    onSubmit={(data) => console.log('Feedback submitted:', data)}
                  />
                </div>
              </div>
            </div>
          )}

          {/* FAQ section */}
          {activeTab === 'faq' && (
            <div>
              <div className="mb-8">
                <div className="max-w-md mx-auto">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Tìm kiếm câu hỏi..."
                      className="input-field pl-10 pr-4 py-3"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {filteredFaqs.length > 0 ? (
                <div className="space-y-6">
                  {filteredFaqs.map((faq, index) => (
                    <div key={index} className="card">
                      <h3 className="text-lg font-medium text-navy mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                      <div className="mt-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {faq.category === 'account' && 'Tài khoản'}
                          {faq.category === 'service' && 'Dịch vụ'}
                          {faq.category === 'booking' && 'Đặt lịch'}
                          {faq.category === 'billing' && 'Thanh toán'}
                          {faq.category === 'station' && 'Trạm đổi pin'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="card text-center py-12">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">Không tìm thấy câu hỏi phù hợp</h3>
                  <p className="mt-2 text-gray-600">
                    Hãy thử tìm kiếm với từ khóa khác hoặc liên hệ trực tiếp với chúng tôi.
                  </p>
                  <button
                    className="mt-4 btn-primary"
                    onClick={() => {
                      setSearchQuery('');
                      setActiveTab('contact');
                    }}
                  >
                    Liên hệ hỗ trợ
                  </button>
                </div>
              )}

              <div className="mt-8 text-center">
                <p className="text-gray-600">Không tìm thấy câu trả lời bạn cần?</p>
                <button
                  className="mt-2 text-navy hover:text-navy-light font-medium"
                  onClick={() => setActiveTab('contact')}
                >
                  Liên hệ với chúng tôi
                </button>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-200">
                <FeedbackForm 
                  onSubmit={(data) => console.log('Feedback submitted:', data)} 
                  className="max-w-md mx-auto"
                />
              </div>
            </div>
          )}

          {/* Guides section */}
          {activeTab === 'guides' && (
            <div className="space-y-8">
              <div className="card">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Hướng dẫn sử dụng dịch vụ</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium text-navy mb-4">1. Đăng ký và thiết lập tài khoản</h3>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>Tải ứng dụng EvBS từ App Store hoặc Google Play.</li>
                      <li>Đăng ký tài khoản bằng số điện thoại hoặc email.</li>
                      <li>Xác thực tài khoản qua mã OTP được gửi đến số điện thoại hoặc email.</li>
                      <li>Hoàn thành hồ sơ cá nhân và thông tin phương tiện.</li>
                      <li>Chọn gói dịch vụ phù hợp và hoàn tất thanh toán.</li>
                    </ol>

                    <div className="mt-4">
                      <div className="rounded-lg shadow-md bg-gradient-to-r from-blue-100 to-blue-200 p-6 border-l-4 border-navy">
                        <div className="flex items-center mb-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-navy mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                          </svg>
                          <span className="text-lg font-bold text-navy">Đăng ký tài khoản</span>
                        </div>
                        <p className="text-navy-light">Hoàn thành quy trình đăng ký nhanh chóng để bắt đầu sử dụng dịch vụ đổi pin của chúng tôi.</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-navy mb-4">2. Đặt lịch đổi pin</h3>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>Đăng nhập vào ứng dụng EvBS.</li>
                      <li>Chọn mục "Đặt lịch" hoặc "Đổi pin".</li>
                      <li>Chọn trạm đổi pin gần bạn nhất hoặc trạm bạn muốn sử dụng.</li>
                      <li>Chọn ngày và giờ phù hợp.</li>
                      <li>Xác nhận thông tin đặt lịch.</li>
                      <li>Bạn sẽ nhận được mã QR xác nhận đặt lịch.</li>
                    </ol>

                    <div className="mt-4">
                      <div className="rounded-lg shadow-md bg-gradient-to-r from-green-100 to-green-200 p-6 border-l-4 border-green-600">
                        <div className="flex items-center mb-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="text-lg font-bold text-green-700">Đặt lịch đổi pin</span>
                        </div>
                        <p className="text-green-700">Chọn thời gian và địa điểm thuận tiện để đổi pin cho xe điện của bạn.</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-navy mb-4">3. Quy trình đổi pin tại trạm</h3>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>Đến trạm đổi pin theo lịch đã đặt.</li>
                      <li>Quét mã QR tại trạm để xác nhận lịch hẹn.</li>
                      <li>Nhân viên sẽ tiếp nhận và kiểm tra xe của bạn.</li>
                      <li>Quá trình thay pin sẽ được thực hiện (thường mất 3-5 phút).</li>
                      <li>Kiểm tra xe và pin mới trước khi nhận.</li>
                      <li>Xác nhận hoàn tất quá trình đổi pin trên ứng dụng.</li>
                    </ol>

                    <div className="mt-4">
                      <div className="rounded-lg shadow-md bg-gradient-to-r from-yellow-100 to-yellow-200 p-6 border-l-4 border-yellow-600">
                        <div className="flex items-center mb-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                          <span className="text-lg font-bold text-yellow-700">Quy trình đổi pin</span>
                        </div>
                        <p className="text-yellow-700">Quá trình đổi pin nhanh chóng và an toàn với các kỹ thuật viên chuyên nghiệp.</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-navy mb-4">4. Thanh toán và quản lý gói dịch vụ</h3>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>Đăng nhập vào tài khoản EvBS.</li>
                      <li>Truy cập mục "Gói dịch vụ" hoặc "Thanh toán".</li>
                      <li>Xem thông tin chi tiết về gói hiện tại và lịch sử thanh toán.</li>
                      <li>Nâng cấp hoặc hạ cấp gói dịch vụ nếu cần.</li>
                      <li>Cập nhật phương thức thanh toán hoặc thông tin hóa đơn.</li>
                    </ol>

                    <div className="mt-4">
                      <div className="rounded-lg shadow-md bg-gradient-to-r from-purple-100 to-purple-200 p-6 border-l-4 border-purple-600">
                        <div className="flex items-center mb-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                          </svg>
                          <span className="text-lg font-bold text-purple-700">Thanh toán dịch vụ</span>
                        </div>
                        <p className="text-purple-700">Nhiều phương thức thanh toán linh hoạt và quản lý gói dịch vụ dễ dàng.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Tài liệu hướng dẫn</h3>
                  <div className="space-y-3">
                    <a href="/documents/user-manual.pdf" className="flex items-center text-navy hover:text-navy-light">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      Hướng dẫn sử dụng đầy đủ (PDF)
                    </a>
                    <a href="/documents/quick-guide.pdf" className="flex items-center text-navy hover:text-navy-light">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      Hướng dẫn nhanh cho người mới (PDF)
                    </a>
                    <a href="/videos/tutorial" className="flex items-center text-navy hover:text-navy-light">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Video hướng dẫn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Support;