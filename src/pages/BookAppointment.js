import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BookAppointment = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    date: '',
    time: '',
    stationId: '',
    vehicleId: '',
    additionalServices: [],
    notes: '',
  });

  // Demo data
  const demoStations = [
    { id: 1, name: 'Trạm đổi pin Nguyễn Huệ', address: '123 Nguyễn Huệ, Quận 1, Thành phố Hồ Chí Minh', availableSlots: 8 },
    { id: 2, name: 'Trạm đổi pin Lê Lợi', address: '45 Lê Lợi, Quận 1, Thành phố Hồ Chí Minh', availableSlots: 5 },
    { id: 3, name: 'Trạm đổi pin Phú Mỹ Hưng', address: '78 Nguyễn Lương Bằng, Quận 7, Thành phố Hồ Chí Minh', availableSlots: 10 },
    { id: 4, name: 'Trạm đổi pin Thủ Đức', address: '22 Võ Văn Ngân, Thủ Đức, Thành phố Hồ Chí Minh', availableSlots: 6 },
    { id: 5, name: 'Trạm đổi pin Bình Thạnh', address: '156 Điện Biên Phủ, Bình Thạnh, Thành phố Hồ Chí Minh', availableSlots: 3 },
  ];

  const demoVehicles = [
    { id: 1, name: 'VinFast VF e34', licensePlate: '30A-123.45', batteryHealth: 85 },
    { id: 2, name: 'VinFast VF 8', licensePlate: '30A-678.90', batteryHealth: 92 },
  ];

  const demoTimeSlots = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', 
    '11:00', '11:30', '14:00', '14:30', '15:00', '15:30', 
    '16:00', '16:30', '17:00', '17:30'
  ];

  const demoAdditionalServices = [
    { id: 'battery-check', name: 'Kiểm tra sức khỏe pin', price: '50.000 đ' },
    { id: 'system-check', name: 'Kiểm tra hệ thống điện', price: '100.000 đ' },
    { id: 'cooling-check', name: 'Kiểm tra hệ thống làm mát', price: '80.000 đ' },
    { id: 'quick-clean', name: 'Vệ sinh nhanh xe', price: '120.000 đ' },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      // Handle checkbox for additional services
      const updatedServices = [...bookingData.additionalServices];
      if (checked) {
        updatedServices.push(value);
      } else {
        const index = updatedServices.indexOf(value);
        if (index > -1) {
          updatedServices.splice(index, 1);
        }
      }
      
      setBookingData({
        ...bookingData,
        additionalServices: updatedServices,
      });
    } else {
      // Handle other inputs
      setBookingData({
        ...bookingData,
        [name]: value,
      });
    }
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the booking data to your backend
    console.log('Booking submitted:', bookingData);
    // Move to confirmation step
    setActiveStep(4);
  };

  // Render different steps based on activeStep
  const renderStepContent = () => {
    switch (activeStep) {
      case 1:
        return renderSelectDateAndStation();
      case 2:
        return renderSelectVehicle();
      case 3:
        return renderConfirmDetails();
      case 4:
        return renderSuccess();
      default:
        return renderSelectDateAndStation();
    }
  };

  const renderSelectDateAndStation = () => {
    return (
      <div className="space-y-6">
        <div className="card">
          <h3 className="text-lg font-medium mb-4">Chọn ngày và giờ</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">Ngày</label>
              <input
                type="date"
                id="date"
                name="date"
                value={bookingData.date}
                onChange={handleChange}
                className="input-field"
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">Giờ</label>
              <select
                id="time"
                name="time"
                value={bookingData.time}
                onChange={handleChange}
                className="input-field"
                required
              >
                <option value="">Chọn thời gian</option>
                {demoTimeSlots.map((slot) => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-medium mb-4">Chọn trạm đổi pin</h3>
          <div className="space-y-4">
            {demoStations.map((station) => (
              <div key={station.id} className="border rounded-lg p-4 hover:border-navy cursor-pointer">
                <label className="flex items-start cursor-pointer">
                  <input
                    type="radio"
                    name="stationId"
                    value={station.id}
                    checked={bookingData.stationId === station.id.toString()}
                    onChange={handleChange}
                    className="mt-1 mr-3"
                  />
                  <div>
                    <h4 className="font-medium text-navy">{station.name}</h4>
                    <p className="text-gray-600 text-sm">{station.address}</p>
                    <div className="mt-2 flex items-center">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                        station.availableSlots > 5 ? 'bg-green-100 text-green-800' : 
                        station.availableSlots > 0 ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'
                      }`}>
                        {station.availableSlots} slot{station.availableSlots !== 1 ? 's' : ''} available
                      </span>
                    </div>
                  </div>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleNext}
            disabled={!bookingData.date || !bookingData.time || !bookingData.stationId}
            className={`btn-primary ${(!bookingData.date || !bookingData.time || !bookingData.stationId) ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Tiếp theo
          </button>
        </div>
      </div>
    );
  };

  const renderSelectVehicle = () => {
    return (
      <div className="space-y-6">
        <div className="card">
          <h3 className="text-lg font-medium mb-4">Chọn phương tiện</h3>
          <div className="space-y-4">
            {demoVehicles.map((vehicle) => (
              <div key={vehicle.id} className="border rounded-lg p-4 hover:border-navy cursor-pointer">
                <label className="flex items-start cursor-pointer">
                  <input
                    type="radio"
                    name="vehicleId"
                    value={vehicle.id}
                    checked={bookingData.vehicleId === vehicle.id.toString()}
                    onChange={handleChange}
                    className="mt-1 mr-3"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-medium text-navy">{vehicle.name}</h4>
                      <span className="text-gray-600 text-sm">
                        Biển số: {vehicle.licensePlate}
                      </span>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm text-gray-600">Sức khỏe pin: {vehicle.batteryHealth}%</p>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                        <div 
                          className={`h-2.5 rounded-full ${
                            vehicle.batteryHealth > 70 ? 'bg-green-500' :
                            vehicle.batteryHealth > 40 ? 'bg-yellow-500' : 'bg-red-500'
                          }`} 
                          style={{ width: `${vehicle.batteryHealth}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            ))}
            <div className="mt-4">
              <Link to="/vehicles/add" className="text-navy hover:text-navy-light text-sm font-medium flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Thêm phương tiện mới
              </Link>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-medium mb-4">Dịch vụ bổ sung</h3>
          <div className="space-y-3">
            {demoAdditionalServices.map((service) => (
              <div key={service.id} className="flex items-center justify-between">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="additionalServices"
                    value={service.id}
                    checked={bookingData.additionalServices.includes(service.id)}
                    onChange={handleChange}
                    className="mr-3 h-4 w-4 text-navy focus:ring-navy border-gray-300 rounded"
                  />
                  <span>{service.name}</span>
                </label>
                <span className="text-gray-600">{service.price}</span>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">Ghi chú</label>
            <textarea
              id="notes"
              name="notes"
              value={bookingData.notes}
              onChange={handleChange}
              className="input-field h-24"
              placeholder="Nhập ghi chú hoặc yêu cầu đặc biệt (nếu có)"
            ></textarea>
          </div>
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={handleBack}
            className="btn-secondary"
          >
            Quay lại
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={!bookingData.vehicleId}
            className={`btn-primary ${!bookingData.vehicleId ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Tiếp theo
          </button>
        </div>
      </div>
    );
  };

  const renderConfirmDetails = () => {
    // Find the selected station and vehicle
    const selectedStation = demoStations.find(s => s.id.toString() === bookingData.stationId);
    const selectedVehicle = demoVehicles.find(v => v.id.toString() === bookingData.vehicleId);
    
    // Calculate additional services
    const selectedServices = demoAdditionalServices.filter(service => 
      bookingData.additionalServices.includes(service.id)
    );
    
    const totalAdditionalCost = selectedServices.length > 0 ? 
      selectedServices.reduce((sum, service) => {
        const price = parseInt(service.price.replace(/\D/g, ''));
        return sum + price;
      }, 0) : 0;

    // Base cost for battery swap (for demo purposes)
    const baseCost = 120000;
    const totalCost = baseCost + totalAdditionalCost;

    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="card">
          <h3 className="text-lg font-medium mb-4">Xác nhận thông tin đặt lịch</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-500">Thời gian</h4>
              <p className="mt-1">{bookingData.date}, {bookingData.time}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-500">Phương tiện</h4>
              <p className="mt-1">{selectedVehicle?.name} ({selectedVehicle?.licensePlate})</p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-500">Trạm đổi pin</h4>
              <p className="mt-1">{selectedStation?.name}</p>
              <p className="text-sm text-gray-600">{selectedStation?.address}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-500">Dịch vụ bổ sung</h4>
              {selectedServices.length > 0 ? (
                <ul className="mt-1 text-sm">
                  {selectedServices.map(service => (
                    <li key={service.id} className="flex justify-between">
                      <span>{service.name}</span>
                      <span>{service.price}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-1">Không có</p>
              )}
            </div>
            
            {bookingData.notes && (
              <div className="md:col-span-2">
                <h4 className="text-sm font-medium text-gray-500">Ghi chú</h4>
                <p className="mt-1 text-sm">{bookingData.notes}</p>
              </div>
            )}
          </div>
        </div>

        <div className="card bg-gray-50">
          <h3 className="text-lg font-medium mb-4">Tóm tắt chi phí</h3>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Chi phí đổi pin cơ bản</span>
              <span>{baseCost.toLocaleString('vi-VN')} đ</span>
            </div>
            
            {totalAdditionalCost > 0 && (
              <div className="flex justify-between">
                <span>Dịch vụ bổ sung</span>
                <span>{totalAdditionalCost.toLocaleString('vi-VN')} đ</span>
              </div>
            )}
            
            <div className="border-t pt-2 mt-2 font-bold flex justify-between">
              <span>Tổng chi phí</span>
              <span className="text-navy">{totalCost.toLocaleString('vi-VN')} đ</span>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-start">
              <input
                id="agree-terms"
                name="agreeTerms"
                type="checkbox"
                className="h-4 w-4 mt-1 text-navy focus:ring-navy border-gray-300 rounded"
                required
              />
              <label htmlFor="agree-terms" className="ml-2 block text-sm text-gray-700">
                Tôi đồng ý với các{' '}
                <Link to="/terms" className="text-navy hover:text-navy-light">
                  điều khoản dịch vụ
                </Link>{' '}
                và{' '}
                <Link to="/cancellation-policy" className="text-navy hover:text-navy-light">
                  chính sách hủy đặt lịch
                </Link>
                .
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={handleBack}
            className="btn-secondary"
          >
            Quay lại
          </button>
          <button
            type="submit"
            className="btn-primary"
          >
            Xác nhận đặt lịch
          </button>
        </div>
      </form>
    );
  };

  const renderSuccess = () => {
    // Find the selected station
    const selectedStation = demoStations.find(s => s.id.toString() === bookingData.stationId);
    
    return (
      <div className="card text-center py-12">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-6 text-2xl font-medium text-gray-900">Đặt lịch thành công!</h3>
        <p className="mt-2 text-gray-600">
          Lịch hẹn của bạn đã được xác nhận tại {selectedStation?.name} vào {bookingData.date}, {bookingData.time}.
        </p>
        <p className="mt-4 text-sm text-gray-500">
          Mã đặt lịch: <span className="font-medium">BK-{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}</span>
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Link to="/dashboard" className="btn-primary">
            Xem tại bảng điều khiển
          </Link>
          <Link to="/" className="btn-secondary">
            Về trang chủ
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Đặt lịch đổi pin</h1>
          <p className="mt-2 text-gray-600">
            Chỉ mất 3 phút để hoàn tất đặt lịch và tiết kiệm thời gian chờ đợi tại trạm.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center relative">
            {[1, 2, 3, 4].map((step) => (
              <div 
                key={step} 
                className={`flex flex-col items-center ${step <= activeStep ? 'text-navy' : 'text-gray-400'}`}
              >
                <div 
                  className={`h-10 w-10 rounded-full flex items-center justify-center border-2 ${
                    step < activeStep ? 'border-navy bg-navy text-white' :
                    step === activeStep ? 'border-navy text-navy' : 'border-gray-300'
                  } font-medium z-10`}
                >
                  {step < activeStep ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    step
                  )}
                </div>
                <span className="mt-2 text-sm font-medium">
                  {step === 1 ? 'Chọn trạm' :
                   step === 2 ? 'Chọn xe' :
                   step === 3 ? 'Xác nhận' : 'Hoàn tất'}
                </span>
              </div>
            ))}

            {/* Progress bar */}
            <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-200 -z-10">
              <div 
                className="h-full bg-navy transition-all"
                style={{ width: `${(activeStep - 1) / 3 * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {renderStepContent()}
      </div>
    </div>
  );
};

export default BookAppointment;