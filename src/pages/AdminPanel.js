import React, { useState } from 'react';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState('week');

  // Giả lập dữ liệu cho thống kê
  const stats = {
    totalStations: 42,
    activeBatteries: 1256,
    totalUsers: 3748,
    totalSwaps: 58429,
    revenue: 12890750000,
    avgDailySwaps: 423,
    batteryHealth: 91,
    serviceRequests: 18
  };

  // Giả lập dữ liệu cho danh sách trạm
  const stations = [
    { id: 1, name: 'Trạm TP HCM 1', location: 'Quận 1, Thành phố Hồ Chí Minh', status: 'active', batteryCount: 45, utilization: 87 },
    { id: 2, name: 'Trạm TP HCM 2', location: 'Quận 7, Thành phố Hồ Chí Minh', status: 'active', batteryCount: 38, utilization: 92 },
    { id: 3, name: 'Trạm HCM 1', location: 'Quận 1, TP. HCM', status: 'active', batteryCount: 50, utilization: 95 },
    { id: 4, name: 'Trạm HCM 2', location: 'Quận 7, TP. HCM', status: 'maintenance', batteryCount: 32, utilization: 0 },
    { id: 5, name: 'Trạm Đà Nẵng', location: 'Hải Châu, Đà Nẵng', status: 'active', batteryCount: 30, utilization: 78 },
  ];

  // Giả lập dữ liệu cho báo cáo
  const reports = [
    { id: 1, type: 'Doanh thu', period: 'Tháng 9, 2025', status: 'Hoàn thành', date: '01/10/2025' },
    { id: 2, type: 'Hoạt động trạm', period: 'Tháng 9, 2025', status: 'Hoàn thành', date: '01/10/2025' },
    { id: 3, type: 'Sức khỏe pin', period: 'Q3 2025', status: 'Đang xử lý', date: '02/10/2025' },
    { id: 4, type: 'Người dùng mới', period: 'Tháng 9, 2025', status: 'Hoàn thành', date: '01/10/2025' },
    { id: 5, type: 'Bảo trì thiết bị', period: 'Q3 2025', status: 'Đang xử lý', date: '05/10/2025' },
  ];

  // Giả lập dữ liệu cho người dùng
  const users = [
    { id: 1, name: 'Nguyễn Văn A', email: 'nguyenvana@email.com', role: 'Khách hàng', status: 'active', registrationDate: '15/05/2025' },
    { id: 2, name: 'Trần Thị B', email: 'tranthi@email.com', role: 'Khách hàng', status: 'active', registrationDate: '23/06/2025' },
    { id: 3, name: 'Lê Văn C', email: 'levanc@email.com', role: 'Nhân viên', status: 'active', registrationDate: '10/04/2025' },
    { id: 4, name: 'Phạm Thị D', email: 'phamthid@email.com', role: 'Quản lý', status: 'active', registrationDate: '05/03/2025' },
    { id: 5, name: 'Hoàng Văn E', email: 'hoangvane@email.com', role: 'Khách hàng', status: 'inactive', registrationDate: '20/07/2025' },
  ];

  // Format số theo định dạng Việt Nam
  const formatNumber = (number) => {
    return new Intl.NumberFormat('vi-VN').format(number);
  };

  // Format tiền theo định dạng Việt Nam
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Bảng điều khiển quản trị viên</h1>
          <p className="text-gray-600 mt-2">Quản lý tổng thể hệ thống trạm đổi pin</p>
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
              onClick={() => setActiveTab('stations')}
              className={`py-4 px-2 font-medium text-sm ${
                activeTab === 'stations'
                  ? 'text-navy border-b-2 border-navy'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Trạm đổi pin
            </button>
            <button
              onClick={() => setActiveTab('users')}
              className={`py-4 px-2 font-medium text-sm ${
                activeTab === 'users'
                  ? 'text-navy border-b-2 border-navy'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Người dùng
            </button>
            <button
              onClick={() => setActiveTab('reports')}
              className={`py-4 px-2 font-medium text-sm ${
                activeTab === 'reports'
                  ? 'text-navy border-b-2 border-navy'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Báo cáo
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`py-4 px-2 font-medium text-sm ${
                activeTab === 'settings'
                  ? 'text-navy border-b-2 border-navy'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Cài đặt
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
                    <p className="text-sm font-medium text-gray-600">Tổng số trạm</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalStations}</p>
                  </div>
                  <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="text-green-600 text-sm font-medium">+2 trạm </span>
                  <span className="text-gray-500 text-sm">so với tháng trước</span>
                </div>
              </div>

              <div className="card bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Pin đang hoạt động</p>
                    <p className="text-2xl font-bold text-gray-900">{formatNumber(stats.activeBatteries)}</p>
                  </div>
                  <div className="p-3 rounded-full bg-green-100 text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="text-green-600 text-sm font-medium">+85 pin </span>
                  <span className="text-gray-500 text-sm">so với tháng trước</span>
                </div>
              </div>

              <div className="card bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Tổng số người dùng</p>
                    <p className="text-2xl font-bold text-gray-900">{formatNumber(stats.totalUsers)}</p>
                  </div>
                  <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="text-green-600 text-sm font-medium">+124 người dùng </span>
                  <span className="text-gray-500 text-sm">trong 30 ngày qua</span>
                </div>
              </div>

              <div className="card bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Doanh thu</p>
                    <p className="text-2xl font-bold text-gray-900">{formatCurrency(stats.revenue)}</p>
                  </div>
                  <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="text-green-600 text-sm font-medium">+8.2% </span>
                  <span className="text-gray-500 text-sm">so với tháng trước</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="card bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Thống kê đổi pin gần đây</h2>
                  <div className="flex items-center space-x-2">
                    <select 
                      value={dateRange}
                      onChange={(e) => setDateRange(e.target.value)}
                      className="border border-gray-300 rounded-md px-3 py-1 text-sm"
                    >
                      <option value="day">Hôm nay</option>
                      <option value="week">7 ngày qua</option>
                      <option value="month">30 ngày qua</option>
                    </select>
                  </div>
                </div>
                <div className="h-80 flex items-center justify-center border border-gray-200 rounded-lg bg-gray-50">
                  {/* Đây là nơi sẽ render biểu đồ thực tế */}
                  <div className="text-center">
                    <p className="text-gray-500 mb-2">Biểu đồ số lượt đổi pin theo thời gian</p>
                    <p className="text-2xl font-bold">{formatNumber(stats.totalSwaps)} lượt đổi pin</p>
                    <p className="text-gray-500 text-sm mt-1">Trung bình {stats.avgDailySwaps} lượt/ngày</p>
                  </div>
                </div>
              </div>

              <div className="card bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Tình trạng các trạm</h2>
                  <a href="#" className="text-navy hover:underline text-sm">Xem tất cả</a>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trạm</th>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trạng thái</th>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Số pin</th>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tỉ lệ sử dụng</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {stations.slice(0, 4).map(station => (
                        <tr key={station.id}>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{station.name}</div>
                            <div className="text-xs text-gray-500">{station.location}</div>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                              ${station.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                              {station.status === 'active' ? 'Hoạt động' : 'Bảo trì'}
                            </span>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                            {station.batteryCount}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm">
                            {station.status === 'active' ? (
                              <div className="flex items-center">
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div 
                                    className="bg-green-500 h-2 rounded-full" 
                                    style={{ width: `${station.utilization}%` }}
                                  ></div>
                                </div>
                                <span className="ml-2 text-gray-900">{station.utilization}%</span>
                              </div>
                            ) : (
                              <span className="text-gray-500">N/A</span>
                            )}
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

        {/* Tab Trạm đổi pin */}
        {activeTab === 'stations' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Quản lý trạm đổi pin</h2>
              <button className="btn-primary flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Thêm trạm mới
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div className="mb-4 md:mb-0 w-full md:w-1/3">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Tìm kiếm trạm..."
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
                    <option value="active">Đang hoạt động</option>
                    <option value="maintenance">Đang bảo trì</option>
                    <option value="inactive">Không hoạt động</option>
                  </select>
                  <select className="input-field py-2">
                    <option value="all">Tất cả khu vực</option>
                    <option value="north">Miền Bắc</option>
                    <option value="central">Miền Trung</option>
                    <option value="south">Miền Nam</option>
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
                        Tên trạm
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Vị trí
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Trạng thái
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Số pin
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Tỉ lệ sử dụng
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Thao tác
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {stations.map((station) => (
                      <tr key={station.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">#{station.id}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{station.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{station.location}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${station.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {station.status === 'active' ? 'Hoạt động' : 'Bảo trì'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {station.batteryCount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {station.status === 'active' ? (
                            <div className="flex items-center">
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div 
                                  className={`h-2 rounded-full ${
                                    station.utilization > 80 ? 'bg-green-500' :
                                    station.utilization > 50 ? 'bg-yellow-500' : 'bg-red-500'
                                  }`}
                                  style={{ width: `${station.utilization}%` }}
                                ></div>
                              </div>
                              <span className="ml-2 text-sm text-gray-900">{station.utilization}%</span>
                            </div>
                          ) : (
                            <span className="text-sm text-gray-500">N/A</span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end space-x-2">
                            <button className="text-navy hover:text-navy-light">
                              Chi tiết
                            </button>
                            <button className="text-blue-600 hover:text-blue-800">
                              Sửa
                            </button>
                            <button className="text-red-600 hover:text-red-800">
                              Xóa
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
                  Hiển thị <span className="font-medium">1</span> đến <span className="font-medium">5</span> trong số <span className="font-medium">42</span> trạm
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

        {/* Tab Người dùng */}
        {activeTab === 'users' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Quản lý người dùng</h2>
              <button className="btn-primary flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Thêm người dùng
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div className="mb-4 md:mb-0 w-full md:w-1/3">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Tìm kiếm người dùng..."
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
                    <option value="all">Tất cả vai trò</option>
                    <option value="customer">Khách hàng</option>
                    <option value="staff">Nhân viên</option>
                    <option value="admin">Quản lý</option>
                  </select>
                  <select className="input-field py-2">
                    <option value="all">Tất cả trạng thái</option>
                    <option value="active">Hoạt động</option>
                    <option value="inactive">Không hoạt động</option>
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
                        Tên
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Vai trò
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Trạng thái
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Ngày đăng ký
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Thao tác
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((user) => (
                      <tr key={user.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">#{user.id}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{user.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{user.email}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{user.role}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {user.status === 'active' ? 'Hoạt động' : 'Không hoạt động'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {user.registrationDate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end space-x-2">
                            <button className="text-navy hover:text-navy-light">
                              Chi tiết
                            </button>
                            <button className="text-blue-600 hover:text-blue-800">
                              Sửa
                            </button>
                            <button className="text-red-600 hover:text-red-800">
                              Xóa
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
                  Hiển thị <span className="font-medium">1</span> đến <span className="font-medium">5</span> trong số <span className="font-medium">{formatNumber(stats.totalUsers)}</span> người dùng
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

        {/* Tab Báo cáo */}
        {activeTab === 'reports' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Báo cáo hệ thống</h2>
              <button className="btn-primary flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Xuất báo cáo
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div className="mb-4 md:mb-0 w-full md:w-1/3">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Tìm kiếm báo cáo..."
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
                    <option value="all">Tất cả loại báo cáo</option>
                    <option value="revenue">Doanh thu</option>
                    <option value="operation">Hoạt động</option>
                    <option value="maintenance">Bảo trì</option>
                  </select>
                  <select className="input-field py-2">
                    <option value="all">Tất cả trạng thái</option>
                    <option value="completed">Hoàn thành</option>
                    <option value="processing">Đang xử lý</option>
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
                        Loại báo cáo
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Kỳ báo cáo
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Trạng thái
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Ngày tạo
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Thao tác
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {reports.map((report) => (
                      <tr key={report.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">#{report.id}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{report.type}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{report.period}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${report.status === 'Hoàn thành' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                            {report.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {report.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end space-x-2">
                            <button className="text-navy hover:text-navy-light">
                              Xem
                            </button>
                            <button className="text-blue-600 hover:text-blue-800">
                              Tải xuống
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
                  Hiển thị <span className="font-medium">1</span> đến <span className="font-medium">5</span> trong số <span className="font-medium">24</span> báo cáo
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

        {/* Tab Cài đặt */}
        {activeTab === 'settings' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Cài đặt hệ thống</h2>
              <button className="btn-primary">
                Lưu thay đổi
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Cài đặt chung</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="systemName" className="block text-sm font-medium text-gray-700 mb-1">
                        Tên hệ thống
                      </label>
                      <input
                        type="text"
                        id="systemName"
                        className="input-field"
                        defaultValue="EV Battery Swap Station Management System"
                      />
                    </div>
                    <div>
                      <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-1">
                        Email liên hệ
                      </label>
                      <input
                        type="email"
                        id="contactEmail"
                        className="input-field"
                        defaultValue="admin@evbs.vn"
                      />
                    </div>
                    <div>
                      <label htmlFor="timezone" className="block text-sm font-medium text-gray-700 mb-1">
                        Múi giờ
                      </label>
                      <select id="timezone" className="input-field">
                        <option value="Asia/Ho_Chi_Minh">Asia/Ho_Chi_Minh (GMT+7)</option>
                        <option value="UTC">UTC</option>
                        <option value="Asia/Bangkok">Asia/Bangkok (GMT+7)</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">
                        Ngôn ngữ
                      </label>
                      <select id="language" className="input-field">
                        <option value="vi">Tiếng Việt</option>
                        <option value="en">English</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Thông báo</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Email thông báo</h4>
                        <p className="text-sm text-gray-500">Nhận email khi có sự cố tại trạm</p>
                      </div>
                      <div className="flex items-center">
                        <button
                          type="button"
                          className="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
                          role="switch"
                          aria-checked="true"
                        >
                          <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Thông báo SMS</h4>
                        <p className="text-sm text-gray-500">Nhận SMS khi có sự cố khẩn cấp</p>
                      </div>
                      <div className="flex items-center">
                        <button
                          type="button"
                          className="bg-navy relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
                          role="switch"
                          aria-checked="true"
                        >
                          <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Báo cáo tự động</h4>
                        <p className="text-sm text-gray-500">Tự động gửi báo cáo hàng tuần</p>
                      </div>
                      <div className="flex items-center">
                        <button
                          type="button"
                          className="bg-navy relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
                          role="switch"
                          aria-checked="true"
                        >
                          <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Bảo mật</h3>
                  <div className="space-y-4">
                    <div>
                      <button className="btn-secondary">
                        Đổi mật khẩu
                      </button>
                    </div>
                    <div>
                      <button className="btn-secondary">
                        Cấu hình xác thực hai yếu tố
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Xác thực hai yếu tố</h4>
                        <p className="text-sm text-gray-500">Tăng cường bảo mật cho tài khoản</p>
                      </div>
                      <div className="flex items-center">
                        <button
                          type="button"
                          className="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
                          role="switch"
                          aria-checked="false"
                        >
                          <span className="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                        </button>
                      </div>
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

export default AdminPanel;