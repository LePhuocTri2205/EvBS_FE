import React, { useState } from 'react';

const StaffPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');

  // Giả lập dữ liệu cho thống kê
  const stats = {
    totalAppointments: 42,
    completedSwaps: 36,
    pendingSwaps: 6,
    batteryStock: 58,
    lowBatteries: 12,
    highBatteries: 46,
    serviceRequests: 3
  };

  // Giả lập dữ liệu cho lịch hẹn
  const appointments = [
    { id: 1, customerName: 'Nguyễn Văn A', vehicleModel: 'VF e34', time: '10:00', date: '03/10/2025', status: 'pending' },
    { id: 2, customerName: 'Trần Thị B', vehicleModel: 'VF 8', time: '10:30', date: '03/10/2025', status: 'confirmed' },
    { id: 3, customerName: 'Lê Văn C', vehicleModel: 'VF 9', time: '11:15', date: '03/10/2025', status: 'confirmed' },
    { id: 4, customerName: 'Phạm Thị D', vehicleModel: 'VF e34', time: '13:00', date: '03/10/2025', status: 'confirmed' },
    { id: 5, customerName: 'Hoàng Văn E', vehicleModel: 'VF 5', time: '15:30', date: '03/10/2025', status: 'pending' },
  ];

  // Giả lập dữ liệu cho pin
  const batteries = [
    { id: 'BAT-1001', status: 'available', charge: 98, health: 95, lastSwapped: '02/10/2025', cycleCount: 42 },
    { id: 'BAT-1002', status: 'available', charge: 100, health: 92, lastSwapped: '02/10/2025', cycleCount: 56 },
    { id: 'BAT-1003', status: 'available', charge: 95, health: 90, lastSwapped: '01/10/2025', cycleCount: 78 },
    { id: 'BAT-1004', status: 'charging', charge: 45, health: 88, lastSwapped: '03/10/2025', cycleCount: 102 },
    { id: 'BAT-1005', status: 'maintenance', charge: 0, health: 75, lastSwapped: '25/09/2025', cycleCount: 215 },
  ];

  // Giả lập dữ liệu cho lịch sử đổi pin
  const swapHistory = [
    { id: 1, customerName: 'Nguyễn Văn A', vehicleModel: 'VF e34', batteryId: 'BAT-1002', oldBatteryId: 'BAT-1005', time: '09:15', date: '02/10/2025', status: 'completed' },
    { id: 2, customerName: 'Lê Thị F', vehicleModel: 'VF 8', batteryId: 'BAT-1001', oldBatteryId: 'BAT-1004', time: '14:30', date: '02/10/2025', status: 'completed' },
    { id: 3, customerName: 'Trần Văn G', vehicleModel: 'VF e34', batteryId: 'BAT-1003', oldBatteryId: 'BAT-1007', time: '16:45', date: '01/10/2025', status: 'completed' },
    { id: 4, customerName: 'Phạm Văn H', vehicleModel: 'VF 5', batteryId: 'BAT-1006', oldBatteryId: 'BAT-1008', time: '10:20', date: '01/10/2025', status: 'completed' },
    { id: 5, customerName: 'Hoàng Thị I', vehicleModel: 'VF e34', batteryId: 'BAT-1009', oldBatteryId: 'BAT-1010', time: '11:05', date: '30/09/2025', status: 'completed' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Bảng điều khiển nhân viên trạm</h1>
          <p className="text-gray-600 mt-2">Quản lý hoạt động đổi pin hàng ngày</p>
        </div>

        {/* Tabs điều hướng */}
        <div className="mb-8">
          <nav className="flex space-x-4 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`py-4 px-2 font-medium text-sm ${
                activeTab === 'dashboard'
                  ? 'text-navy border-b-2 border-navy'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Tổng quan
            </button>
            <button
              onClick={() => setActiveTab('appointments')}
              className={`py-4 px-2 font-medium text-sm ${
                activeTab === 'appointments'
                  ? 'text-navy border-b-2 border-navy'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Lịch hẹn
            </button>
            <button
              onClick={() => setActiveTab('batteries')}
              className={`py-4 px-2 font-medium text-sm ${
                activeTab === 'batteries'
                  ? 'text-navy border-b-2 border-navy'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Quản lý pin
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`py-4 px-2 font-medium text-sm ${
                activeTab === 'history'
                  ? 'text-navy border-b-2 border-navy'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Lịch sử đổi pin
            </button>
            <button
              onClick={() => setActiveTab('support')}
              className={`py-4 px-2 font-medium text-sm ${
                activeTab === 'support'
                  ? 'text-navy border-b-2 border-navy'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Hỗ trợ
            </button>
          </nav>
        </div>

        {/* Tab Tổng quan */}
        {activeTab === 'dashboard' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="card bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Lịch hẹn hôm nay</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalAppointments}</p>
                  </div>
                  <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="text-gray-500 text-sm">{stats.completedSwaps} hoàn thành, {stats.pendingSwaps} chờ xử lý</span>
                </div>
              </div>

              <div className="card bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Pin sẵn có</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.batteryStock}</p>
                  </div>
                  <div className="p-3 rounded-full bg-green-100 text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="text-gray-500 text-sm">{stats.highBatteries} pin sạc đầy, {stats.lowBatteries} đang sạc</span>
                </div>
              </div>

              <div className="card bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Đơn đổi pin hoàn thành</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.completedSwaps}</p>
                  </div>
                  <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="text-green-600 text-sm font-medium">+5 </span>
                  <span className="text-gray-500 text-sm">so với hôm qua</span>
                </div>
              </div>

              <div className="card bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Yêu cầu hỗ trợ</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.serviceRequests}</p>
                  </div>
                  <div className="p-3 rounded-full bg-red-100 text-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="text-red-600 text-sm font-medium">Cần xử lý </span>
                  <span className="text-gray-500 text-sm">trong hôm nay</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="card bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Lịch hẹn hôm nay</h2>
                  <a href="#" className="text-navy hover:underline text-sm" onClick={() => setActiveTab('appointments')}>Xem tất cả</a>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thời gian</th>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Khách hàng</th>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phương tiện</th>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trạng thái</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {appointments.slice(0, 4).map(appointment => (
                        <tr key={appointment.id}>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{appointment.time}</td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{appointment.customerName}</div>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                            {appointment.vehicleModel}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                              ${appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                              {appointment.status === 'confirmed' ? 'Đã xác nhận' : 'Chờ xác nhận'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="card bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Tình trạng pin</h2>
                  <a href="#" className="text-navy hover:underline text-sm" onClick={() => setActiveTab('batteries')}>Xem tất cả</a>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trạng thái</th>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mức sạc</th>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sức khỏe</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {batteries.slice(0, 4).map(battery => (
                        <tr key={battery.id}>
                          <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{battery.id}</td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                              ${battery.status === 'available' ? 'bg-green-100 text-green-800' : 
                                battery.status === 'charging' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                              {battery.status === 'available' ? 'Sẵn sàng' : 
                               battery.status === 'charging' ? 'Đang sạc' : 'Bảo trì'}
                            </span>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            {battery.status !== 'maintenance' ? (
                              <div className="flex items-center">
                                <div className="w-16 bg-gray-200 rounded-full h-2">
                                  <div 
                                    className={`h-2 rounded-full ${
                                      battery.charge > 80 ? 'bg-green-500' :
                                      battery.charge > 30 ? 'bg-yellow-500' : 'bg-red-500'
                                    }`}
                                    style={{ width: `${battery.charge}%` }}
                                  ></div>
                                </div>
                                <span className="ml-2 text-sm text-gray-900">{battery.charge}%</span>
                              </div>
                            ) : (
                              <span className="text-sm text-gray-500">N/A</span>
                            )}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-16 bg-gray-200 rounded-full h-2">
                                <div 
                                  className={`h-2 rounded-full ${
                                    battery.health > 80 ? 'bg-green-500' :
                                    battery.health > 50 ? 'bg-yellow-500' : 'bg-red-500'
                                  }`}
                                  style={{ width: `${battery.health}%` }}
                                ></div>
                              </div>
                              <span className="ml-2 text-sm text-gray-900">{battery.health}%</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Lịch hẹn */}
        {activeTab === 'appointments' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Quản lý lịch hẹn</h2>
              <div className="flex space-x-2">
                <button className="btn-secondary flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Xem lịch
                </button>
                <button className="btn-primary flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Thêm lịch hẹn
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div className="mb-4 md:mb-0 w-full md:w-1/3">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Tìm kiếm khách hàng..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="input-field pl-10 pr-4 py-2"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <input 
                    type="date" 
                    className="input-field py-2"
                    defaultValue="2025-10-03" 
                  />
                  <select className="input-field py-2">
                    <option value="all">Tất cả trạng thái</option>
                    <option value="confirmed">Đã xác nhận</option>
                    <option value="pending">Chờ xác nhận</option>
                    <option value="cancelled">Đã hủy</option>
                  </select>
                </div>
              </div>

              <div className="overflow-x-auto mt-4">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ID
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Khách hàng
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Phương tiện
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Thời gian
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Ngày
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Trạng thái
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Thao tác
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {appointments.map((appointment) => (
                      <tr key={appointment.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">#{appointment.id}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{appointment.customerName}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{appointment.vehicleModel}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{appointment.time}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{appointment.date}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                            {appointment.status === 'confirmed' ? 'Đã xác nhận' : 'Chờ xác nhận'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end space-x-2">
                            <button className="text-navy hover:text-navy-light">
                              Chi tiết
                            </button>
                            <button className="text-blue-600 hover:text-blue-800">
                              {appointment.status === 'pending' ? 'Xác nhận' : 'Sửa'}
                            </button>
                            <button className="text-red-600 hover:text-red-800">
                              Hủy
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-gray-700">
                  Hiển thị <span className="font-medium">1</span> đến <span className="font-medium">5</span> trong số <span className="font-medium">42</span> lịch hẹn
                </div>
                <div className="flex space-x-2">
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    Trước
                  </button>
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    Tiếp
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Quản lý pin */}
        {activeTab === 'batteries' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Quản lý pin</h2>
              <div className="flex space-x-2">
                <button className="btn-secondary flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Báo cáo
                </button>
                <button className="btn-primary flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Cập nhật kho pin
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div className="mb-4 md:mb-0 w-full md:w-1/3">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Tìm kiếm ID pin..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="input-field pl-10 pr-4 py-2"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <select className="input-field py-2">
                    <option value="all">Tất cả trạng thái</option>
                    <option value="available">Sẵn sàng</option>
                    <option value="charging">Đang sạc</option>
                    <option value="maintenance">Bảo trì</option>
                  </select>
                  <select className="input-field py-2">
                    <option value="all">Tất cả mức sạc</option>
                    <option value="high">Trên 80%</option>
                    <option value="medium">30-80%</option>
                    <option value="low">Dưới 30%</option>
                  </select>
                </div>
              </div>

              <div className="overflow-x-auto mt-4">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ID Pin
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Trạng thái
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Mức sạc
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Sức khỏe
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Lần đổi cuối
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Số chu kỳ
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Thao tác
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {batteries.map((battery) => (
                      <tr key={battery.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{battery.id}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${battery.status === 'available' ? 'bg-green-100 text-green-800' : 
                              battery.status === 'charging' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                            {battery.status === 'available' ? 'Sẵn sàng' : 
                             battery.status === 'charging' ? 'Đang sạc' : 'Bảo trì'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {battery.status !== 'maintenance' ? (
                            <div className="flex items-center">
                              <div className="w-16 bg-gray-200 rounded-full h-2">
                                <div 
                                  className={`h-2 rounded-full ${
                                    battery.charge > 80 ? 'bg-green-500' :
                                    battery.charge > 30 ? 'bg-yellow-500' : 'bg-red-500'
                                  }`}
                                  style={{ width: `${battery.charge}%` }}
                                ></div>
                              </div>
                              <span className="ml-2 text-sm text-gray-900">{battery.charge}%</span>
                            </div>
                          ) : (
                            <span className="text-sm text-gray-500">N/A</span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-16 bg-gray-200 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full ${
                                  battery.health > 80 ? 'bg-green-500' :
                                  battery.health > 50 ? 'bg-yellow-500' : 'bg-red-500'
                                }`}
                                style={{ width: `${battery.health}%` }}
                              ></div>
                            </div>
                            <span className="ml-2 text-sm text-gray-900">{battery.health}%</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{battery.lastSwapped}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{battery.cycleCount}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end space-x-2">
                            <button className="text-navy hover:text-navy-light">
                              Chi tiết
                            </button>
                            <button className="text-blue-600 hover:text-blue-800">
                              Cập nhật
                            </button>
                            <button className="text-red-600 hover:text-red-800">
                              {battery.status !== 'maintenance' ? 'Báo bảo trì' : 'Kích hoạt'}
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-gray-700">
                  Hiển thị <span className="font-medium">1</span> đến <span className="font-medium">5</span> trong số <span className="font-medium">58</span> pin
                </div>
                <div className="flex space-x-2">
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    Trước
                  </button>
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    Tiếp
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Lịch sử đổi pin */}
        {activeTab === 'history' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Lịch sử đổi pin</h2>
              <div className="flex space-x-2">
                <button className="btn-secondary flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Xuất dữ liệu
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div className="mb-4 md:mb-0 w-full md:w-1/3">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Tìm kiếm khách hàng hoặc ID pin..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="input-field pl-10 pr-4 py-2"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <input 
                    type="date" 
                    className="input-field py-2"
                    defaultValue="2025-10-01" 
                  />
                  <input 
                    type="date" 
                    className="input-field py-2"
                    defaultValue="2025-10-03" 
                  />
                </div>
              </div>

              <div className="overflow-x-auto mt-4">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ID
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Khách hàng
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Phương tiện
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Pin mới
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Pin cũ
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Thời gian
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Ngày
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Chi tiết
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {swapHistory.map((swap) => (
                      <tr key={swap.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">#{swap.id}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{swap.customerName}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{swap.vehicleModel}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{swap.batteryId}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{swap.oldBatteryId}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{swap.time}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{swap.date}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-navy hover:text-navy-light">
                            Xem chi tiết
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-gray-700">
                  Hiển thị <span className="font-medium">1</span> đến <span className="font-medium">5</span> trong số <span className="font-medium">152</span> lượt đổi pin
                </div>
                <div className="flex space-x-2">
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    Trước
                  </button>
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    Tiếp
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Hỗ trợ */}
        {activeTab === 'support' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Yêu cầu hỗ trợ</h2>
              <button className="btn-primary flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Tạo yêu cầu hỗ trợ
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Yêu cầu hỗ trợ đang xử lý</h3>
                  
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-navy font-medium">Pin BAT-1005 cần bảo trì</h4>
                          <p className="text-sm text-gray-600 mt-1">Pin có dấu hiệu bất thường trong quá trình sạc, cần được kiểm tra kỹ thuật.</p>
                          <div className="flex items-center mt-2">
                            <span className="text-xs text-gray-500">ID: SR-001 • </span>
                            <span className="text-xs text-gray-500">Tạo lúc: 10:15, 02/10/2025</span>
                          </div>
                        </div>
                        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          Đang xử lý
                        </span>
                      </div>
                      <div className="mt-3 flex justify-end">
                        <button className="text-sm text-navy hover:underline">Xem chi tiết</button>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-navy font-medium">Yêu cầu bổ sung pin</h4>
                          <p className="text-sm text-gray-600 mt-1">Cần bổ sung thêm 10 pin mới để đáp ứng nhu cầu ngày lễ sắp tới.</p>
                          <div className="flex items-center mt-2">
                            <span className="text-xs text-gray-500">ID: SR-002 • </span>
                            <span className="text-xs text-gray-500">Tạo lúc: 15:30, 01/10/2025</span>
                          </div>
                        </div>
                        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          Đang xử lý
                        </span>
                      </div>
                      <div className="mt-3 flex justify-end">
                        <button className="text-sm text-navy hover:underline">Xem chi tiết</button>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-navy font-medium">Sự cố máy đo sức khỏe pin</h4>
                          <p className="text-sm text-gray-600 mt-1">Máy đo sức khỏe pin số 2 đang hiển thị sai thông số, cần hỗ trợ kỹ thuật.</p>
                          <div className="flex items-center mt-2">
                            <span className="text-xs text-gray-500">ID: SR-003 • </span>
                            <span className="text-xs text-gray-500">Tạo lúc: 08:45, 03/10/2025</span>
                          </div>
                        </div>
                        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                          Khẩn cấp
                        </span>
                      </div>
                      <div className="mt-3 flex justify-end">
                        <button className="text-sm text-navy hover:underline">Xem chi tiết</button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <button className="text-navy hover:underline">Xem tất cả yêu cầu</button>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Thông tin hỗ trợ</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="p-2 rounded-full bg-navy text-white mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Hotline kỹ thuật</h4>
                        <p className="text-gray-600">1900 2345 68</p>
                        <p className="text-xs text-gray-500">Hỗ trợ 24/7</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="p-2 rounded-full bg-navy text-white mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Email hỗ trợ</h4>
                        <p className="text-gray-600">support@evbs.vn</p>
                        <p className="text-xs text-gray-500">Phản hồi trong vòng 24 giờ</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="p-2 rounded-full bg-navy text-white mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Lịch bảo trì định kỳ</h4>
                        <p className="text-gray-600">Mỗi Chủ nhật (22:00 - 00:00)</p>
                        <p className="text-xs text-gray-500">Lịch trình tiếp theo: 06/10/2025</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Tài liệu hướng dẫn</h3>
                    
                    <div className="space-y-2">
                      <a href="#" className="flex items-center text-navy hover:text-navy-light">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        Hướng dẫn quy trình đổi pin
                      </a>
                      <a href="#" className="flex items-center text-navy hover:text-navy-light">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        Quy trình kiểm tra pin
                      </a>
                      <a href="#" className="flex items-center text-navy hover:text-navy-light">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        Xử lý sự cố thường gặp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StaffPanel;