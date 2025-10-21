import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ServicePlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [billingPeriod, setBillingPeriod] = useState('monthly'); // monthly or yearly
  
  // Demo data for service plans
  const servicePlans = [
    {
      id: 'basic',
      name: 'Cơ bản',
      description: 'Dành cho người sử dụng ít, phù hợp với quãng đường ngắn trong thành phố.',
      monthlyPrice: 300000,
      yearlyPrice: 3000000, // 10 months price for yearly subscription (2 months free)
      features: [
        { text: '5 lần đổi pin/tháng', included: true },
        { text: 'Truy cập mạng lưới trạm toàn quốc', included: true },
        { text: 'Hỗ trợ kỹ thuật cơ bản', included: true },
        { text: 'Ưu tiên đổi pin tại trạm', included: false },
        { text: 'Hỗ trợ kỹ thuật 24/7', included: false },
        { text: 'Dịch vụ cứu hộ miễn phí', included: false },
      ],
      popular: false,
    },
    {
      id: 'standard',
      name: 'Tiêu chuẩn',
      description: 'Dành cho người sử dụng thường xuyên, cân bằng giữa chi phí và tiện ích.',
      monthlyPrice: 500000,
      yearlyPrice: 5000000, // 10 months price for yearly subscription (2 months free)
      features: [
        { text: '10 lần đổi pin/tháng', included: true },
        { text: 'Truy cập mạng lưới trạm toàn quốc', included: true },
        { text: 'Hỗ trợ kỹ thuật cơ bản', included: true },
        { text: 'Ưu tiên đổi pin tại trạm', included: true },
        { text: 'Hỗ trợ kỹ thuật 24/7', included: true },
        { text: 'Dịch vụ cứu hộ miễn phí', included: false },
      ],
      popular: true,
    },
    {
      id: 'premium',
      name: 'Cao cấp',
      description: 'Dành cho người sử dụng thường xuyên, cần độ linh hoạt cao và dịch vụ đầy đủ.',
      monthlyPrice: 800000,
      yearlyPrice: 8000000, // 10 months price for yearly subscription (2 months free)
      features: [
        { text: 'Không giới hạn số lần đổi pin', included: true },
        { text: 'Truy cập mạng lưới trạm toàn quốc', included: true },
        { text: 'Hỗ trợ kỹ thuật cơ bản', included: true },
        { text: 'Ưu tiên cao nhất tại trạm', included: true },
        { text: 'Hỗ trợ kỹ thuật VIP 24/7', included: true },
        { text: 'Dịch vụ cứu hộ miễn phí', included: true },
      ],
      popular: false,
    },
  ];

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId);
  };

  const formatPrice = (price) => {
    return price.toLocaleString('vi-VN');
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">Gói dịch vụ đổi pin</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Lựa chọn gói dịch vụ phù hợp với nhu cầu sử dụng của bạn. Thanh toán linh hoạt, nâng cấp hoặc hạ cấp bất kỳ lúc nào.
          </p>

          {/* Billing period toggle */}
          <div className="mt-8 flex justify-center">
            <div className="relative bg-white rounded-full p-1 flex border border-gray-300">
              <button
                className={`${
                  billingPeriod === 'monthly' ? 'bg-navy text-white' : 'bg-white text-gray-700'
                } rounded-full py-2 px-6 font-medium transition-all`}
                onClick={() => setBillingPeriod('monthly')}
              >
                Thanh toán hàng tháng
              </button>
              <button
                className={`${
                  billingPeriod === 'yearly' ? 'bg-navy text-white' : 'bg-white text-gray-700'
                } rounded-full py-2 px-6 font-medium transition-all`}
                onClick={() => setBillingPeriod('yearly')}
              >
                Thanh toán hàng năm
                <span className="ml-2 bg-green-100 text-green-800 text-xs px-1.5 py-0.5 rounded">Tiết kiệm 16.7%</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {servicePlans.map((plan) => (
            <div
              key={plan.id}
              className={`card border-2 ${
                plan.popular ? 'border-navy' : 'border-gray-200'
              } relative transition-all duration-300 ${
                selectedPlan === plan.id ? 'ring-2 ring-navy ring-offset-2' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-navy text-white px-3 py-1 text-sm font-semibold rounded-bl-md">
                  Phổ biến
                </div>
              )}

              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-6 h-12">{plan.description}</p>
              
              <div className="text-4xl font-bold text-navy mb-1">
                {formatPrice(billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice)} đ
              </div>
              <p className="text-gray-500 mb-6">
                {billingPeriod === 'monthly' ? '/tháng' : '/năm'}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    {feature.included ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                    <span className={feature.included ? '' : 'text-gray-500'}>{feature.text}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handlePlanSelect(plan.id)}
                className={`w-full py-3 px-4 rounded-md font-medium transition-colors ${
                  plan.popular
                    ? 'bg-navy text-white hover:bg-navy-light'
                    : 'bg-white text-navy border border-navy hover:bg-gray-50'
                }`}
              >
                {selectedPlan === plan.id ? 'Đã chọn' : 'Chọn gói'}
              </button>
            </div>
          ))}
        </div>

        {/* Checkout section */}
        {selectedPlan && (
          <div className="max-w-3xl mx-auto">
            <div className="card">
              <h3 className="text-xl font-medium mb-6">Hoàn tất đăng ký</h3>

              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-md mb-6">
                <div>
                  <p className="font-medium">
                    Gói {servicePlans.find(p => p.id === selectedPlan)?.name} - {billingPeriod === 'monthly' ? 'Thanh toán hàng tháng' : 'Thanh toán hàng năm'}
                  </p>
                  <p className="text-sm text-gray-600">
                    {servicePlans.find(p => p.id === selectedPlan)?.features.filter(f => f.included).length} tính năng
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-xl text-navy">
                    {formatPrice(
                      billingPeriod === 'monthly'
                        ? servicePlans.find(p => p.id === selectedPlan)?.monthlyPrice
                        : servicePlans.find(p => p.id === selectedPlan)?.yearlyPrice
                    )} đ
                  </p>
                  <p className="text-sm text-gray-600">
                    {billingPeriod === 'yearly' && 'Tiết kiệm 2 tháng phí'}
                  </p>
                </div>
              </div>

              {/* Payment method */}
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-4">Phương thức thanh toán</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-md p-4 cursor-pointer hover:border-navy">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="payment-card"
                        name="payment-method"
                        className="h-4 w-4 text-navy focus:ring-navy border-gray-300"
                        defaultChecked
                      />
                      <label htmlFor="payment-card" className="ml-3 cursor-pointer flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                        Thẻ tín dụng / Thẻ ghi nợ
                      </label>
                    </div>
                  </div>
                  <div className="border rounded-md p-4 cursor-pointer hover:border-navy">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="payment-banking"
                        name="payment-method"
                        className="h-4 w-4 text-navy focus:ring-navy border-gray-300"
                      />
                      <label htmlFor="payment-banking" className="ml-3 cursor-pointer flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                        </svg>
                        Internet Banking
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms & Conditions */}
              <div className="mb-6">
                <div className="flex items-start">
                  <input
                    id="agree-terms"
                    name="agree-terms"
                    type="checkbox"
                    className="h-4 w-4 mt-1 text-navy focus:ring-navy border-gray-300 rounded"
                  />
                  <label htmlFor="agree-terms" className="ml-2 block text-sm text-gray-700">
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
              </div>

              <Link to="/dashboard" className="btn-primary w-full text-center">
                Hoàn tất đăng ký
              </Link>
            </div>
          </div>
        )}

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Câu hỏi thường gặp</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-lg font-medium text-navy mb-2">Tôi có thể đổi gói dịch vụ bất kỳ lúc nào không?</h3>
                <p className="text-gray-600">
                  Có, bạn có thể nâng cấp hoặc hạ cấp gói dịch vụ bất kỳ lúc nào. Khi nâng cấp, chúng tôi sẽ tính phí chênh lệch tương ứng với thời gian còn lại của gói hiện tại. Khi hạ cấp, khoản tiền chênh lệch sẽ được chuyển vào lần thanh toán tiếp theo.
                </p>
              </div>

              <div className="card">
                <h3 className="text-lg font-medium text-navy mb-2">Làm thế nào để tôi sử dụng dịch vụ đổi pin?</h3>
                <p className="text-gray-600">
                  Sau khi đăng ký gói dịch vụ, bạn có thể đặt lịch đổi pin trực tiếp trên ứng dụng hoặc website. Hoặc bạn có thể đến trực tiếp các trạm đổi pin trong hệ thống của chúng tôi. Nhân viên tại trạm sẽ hỗ trợ bạn đổi pin trong vòng chỉ 3-5 phút.
                </p>
              </div>

              <div className="card">
                <h3 className="text-lg font-medium text-navy mb-2">Những mẫu xe nào được hỗ trợ?</h3>
                <p className="text-gray-600">
                  Hiện tại, hệ thống của chúng tôi hỗ trợ các mẫu xe điện phổ biến như VinFast VF e34, VF 8, VF 9 và các mẫu xe điện khác có pin tương thích. Bạn có thể kiểm tra tính tương thích của xe trên trang "Danh sách xe hỗ trợ" hoặc liên hệ với bộ phận hỗ trợ khách hàng.
                </p>
              </div>

              <div className="card">
                <h3 className="text-lg font-medium text-navy mb-2">Chính sách hủy và hoàn tiền như thế nào?</h3>
                <p className="text-gray-600">
                  Bạn có thể hủy gói dịch vụ bất kỳ lúc nào. Đối với thanh toán hàng tháng, chúng tôi không hoàn tiền cho tháng hiện tại. Đối với thanh toán hàng năm, chúng tôi sẽ hoàn lại số tiền tương ứng với thời gian còn lại sau khi trừ đi phí đã sử dụng (tính theo giá gói hàng tháng).
                </p>
              </div>

              <div className="card">
                <h3 className="text-lg font-medium text-navy mb-2">Tôi có thể sử dụng dịch vụ đổi pin ở đâu?</h3>
                <p className="text-gray-600">
                  Bạn có thể sử dụng dịch vụ đổi pin tại bất kỳ trạm nào trong hệ thống của chúng tôi trên toàn quốc. Hiện tại, chúng tôi có hơn 200 trạm đặt tại các vị trí chiến lược trên toàn quốc, bao gồm các thành phố lớn và các tuyến đường chính.
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600">Bạn còn câu hỏi nào khác?</p>
              <Link to="/support" className="inline-block mt-2 text-navy hover:text-navy-light font-medium">
                Liên hệ bộ phận hỗ trợ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePlans;