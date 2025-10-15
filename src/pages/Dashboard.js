import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // Typically this would come from authentication context or Redux store
  const [userRole, setUserRole] = useState('driver'); // For demo: 'driver', 'staff', 'admin'

  // For demo purposes only - in a real app, you'd get this from an API
  const demoData = {
    driver: {
      name: 'Nguyễn Văn A',
      vehicleType: 'VinFast VF e34',
      batteryHealth: 87,
      remainingCharge: 62,
      estimatedRange: '180 km',
      upcomingAppointment: {
        date: '05/10/2025',
        time: '14:30',
        station: 'Trạm đổi pin Trần Duy Hưng',
      },
      swapHistory: [
        { id: 1, date: '28/09/2025', station: 'Trạm Láng Hạ', batteryId: 'BT-4523', amount: '120.000 đ' },
        { id: 2, date: '15/09/2025', station: 'Trạm Cầu Giấy', batteryId: 'BT-7891', amount: '120.000 đ' },
        { id: 3, date: '01/09/2025', station: 'Trạm Long Biên', batteryId: 'BT-3267', amount: '120.000 đ' },
      ],
      currentPlan: {
        name: 'Tiêu chuẩn',
        swapsLeft: 6,
        expiryDate: '25/10/2025',
        monthlyFee: '500.000 đ',
      },
    },
    staff: {
      name: 'Trần Thị B',
      station: 'Trạm đổi pin Trần Duy Hưng',
      batteryInventory: {
        total: 48,
        fullyCharged: 32,
        charging: 12,
        maintenance: 4,
      },
      dailySwaps: 26,
      upcomingAppointments: [
        { id: 1, time: '14:30', customer: 'Nguyễn Văn A', vehicleType: 'VF e34' },
        { id: 2, time: '15:15', customer: 'Lê Văn C', vehicleType: 'VF e34' },
        { id: 3, time: '16:00', customer: 'Phạm Thị D', vehicleType: 'VF 8' },
      ],
      batteryIssues: [
        { id: 'BT-5521', issue: 'Hiệu suất thấp', reportedBy: 'Hoàng Văn E', date: '02/10/2025' },
        { id: 'BT-3391', issue: 'Quá nhiệt', reportedBy: 'Nguyễn Thị F', date: '01/10/2025' },
      ],
    },
    admin: {
      name: 'Lê Văn C',
      stats: {
        totalStations: 32,
        totalBatteries: 1240,
        activePlans: 4520,
        revenue: {
          monthly: '2.45 tỷ đ',
          growth: '+8.5%',
        },
      },
      stations: [
        { id: 1, name: 'Trạm Trần Duy Hưng', batteryCount: 48, dailySwaps: 26, status: 'active' },
        { id: 2, name: 'Trạm Láng Hạ', batteryCount: 36, dailySwaps: 18, status: 'active' },
        { id: 3, name: 'Trạm Cầu Giấy', batteryCount: 42, dailySwaps: 22, status: 'active' },
        { id: 4, name: 'Trạm Long Biên', batteryCount: 30, dailySwaps: 14, status: 'maintenance' },
      ],
      recentAlerts: [
        { id: 1, type: 'Thiết bị', message: 'Trạm Long Biên cần bảo trì hệ thống làm mát', time: '3 giờ trước' },
        { id: 2, type: 'Pin', message: 'Lô 15 pin có dấu hiệu suy giảm hiệu suất nhanh', time: '1 ngày trước' },
        { id: 3, type: 'Hệ thống', message: 'Cập nhật phần mềm mới sẵn sàng triển khai', time: '2 ngày trước' },
      ],
      aiInsights: [
        'Nên bổ sung 4 trạm tại khu vực Tây Hồ dựa trên dữ liệu nhu cầu',
        'Hiệu suất pin giảm 5% trong tháng 9, cần kiểm tra quy trình sạc',
        'Gói "Cao cấp" tăng trưởng người dùng nhanh nhất (+24% tháng qua)',
      ],
    },
  };

  // Get the demo data for the current user role
  const userData = demoData[userRole];

  // Role switcher (for demo purposes only)
  const switchRole = (role) => {
    setUserRole(role);
  };

  // Render appropriate dashboard content based on user role
  const renderDashboard = () => {
    switch (userRole) {
      case 'driver':
        return renderDriverDashboard();
      case 'staff':
        return renderStaffDashboard();
      case 'admin':
        return renderAdminDashboard();
      default:
        return <p>Không tìm thấy thông tin người dùng.</p>;
    }
  };

  // Driver dashboard view
  const renderDriverDashboard = () => {
    const { name, vehicleType, batteryHealth, remainingCharge, estimatedRange, upcomingAppointment, swapHistory, currentPlan } = userData;

    return (
      <div className="space-y-6">
        {/* Welcome and Battery Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card md:col-span-1">
            <h3 className="text-lg font-medium mb-4">Thông tin tài xế</h3>
            <p className="text-gray-600">Xin chào, <span className="font-bold text-navy">{name}</span></p>
            <p className="text-gray-600 mt-2">Xe: <span className="font-medium">{vehicleType}</span></p>
            <div className="mt-4">
              <Link to="/profile" className="text-navy hover:text-navy-light text-sm font-medium flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                Cập nhật thông tin
              </Link>
            </div>
          </div>
          
          <div className="card md:col-span-2">
            <h3 className="text-lg font-medium mb-4">Thông tin pin</h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-gray-500 text-sm">Sức khỏe pin</p>
                <div className="flex items-center mt-1">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${batteryHealth}%` }}></div>
                  </div>
                  <span className="ml-2 font-medium">{batteryHealth}%</span>
                </div>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Pin còn lại</p>
                <div className="flex items-center mt-1">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${remainingCharge}%` }}></div>
                  </div>
                  <span className="ml-2 font-medium">{remainingCharge}%</span>
                </div>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Quãng đường ước tính</p>
                <p className="text-xl font-bold text-navy mt-1">{estimatedRange}</p>
              </div>
            </div>

            <div className="mt-4 flex justify-center">
              <Link to="/book-appointment" className="btn-primary">
                Đặt lịch đổi pin
              </Link>
            </div>
          </div>
        </div>

        {/* Appointment and Plan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Lịch hẹn sắp tới</h3>
              <Link to="/book-appointment" className="text-navy hover:text-navy-light text-sm font-medium">
                Xem tất cả
              </Link>
            </div>
            
            {upcomingAppointment ? (
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{upcomingAppointment.station}</p>
                    <p className="text-gray-600 text-sm mt-1">
                      {upcomingAppointment.date} | {upcomingAppointment.time}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 text-sm border border-navy text-navy rounded hover:bg-navy hover:text-white transition-colors">
                      Chỉ đường
                    </button>
                    <button className="px-3 py-1 text-sm border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition-colors">
                      Hủy
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-6">
                <p className="text-gray-500">Bạn chưa có lịch hẹn nào.</p>
                <Link to="/book-appointment" className="btn-primary mt-4 inline-block">
                  Đặt lịch ngay
                </Link>
              </div>
            )}
          </div>

          <div className="card">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Gói dịch vụ hiện tại</h3>
              <Link to="/service-plans" className="text-navy hover:text-navy-light text-sm font-medium">
                Nâng cấp
              </Link>
            </div>
            
            <div className="border border-navy rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-bold text-navy text-lg">{currentPlan.name}</p>
                  <p className="text-gray-600 text-sm mt-1">
                    Còn lại: <span className="font-medium">{currentPlan.swapsLeft} lần đổi pin</span>
                  </p>
                  <p className="text-gray-600 text-sm">
                    Hết hạn: {currentPlan.expiryDate}
                  </p>
                </div>
                <div>
                  <p className="font-medium">{currentPlan.monthlyFee}/tháng</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* History */}
        <div className="card">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Lịch sử đổi pin</h3>
            <Link to="/history" className="text-navy hover:text-navy-light text-sm font-medium">
              Xem tất cả
            </Link>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ngày
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Trạm
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Mã pin
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Thanh toán
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {swapHistory.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.station}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.batteryId}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  // Staff dashboard view
  const renderStaffDashboard = () => {
    const { name, station, batteryInventory, dailySwaps, upcomingAppointments, batteryIssues } = userData;

    return (
      <div className="space-y-6">
        {/* Welcome and Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="card md:col-span-1">
            <h3 className="text-lg font-medium mb-4">Thông tin nhân viên</h3>
            <p className="text-gray-600">Xin chào, <span className="font-bold text-navy">{name}</span></p>
            <p className="text-gray-600 mt-2">Trạm: <span className="font-medium">{station}</span></p>
            <div className="mt-4">
              <Link to="/profile" className="text-navy hover:text-navy-light text-sm font-medium flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                Cập nhật thông tin
              </Link>
            </div>
          </div>
          
          <div className="card md:col-span-3">
            <h3 className="text-lg font-medium mb-4">Tồn kho pin</h3>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-green-100 rounded-lg p-4 text-center">
                <p className="text-green-600 font-bold text-2xl">{batteryInventory.fullyCharged}</p>
                <p className="text-green-800 text-sm">Đã sạc đầy</p>
              </div>
              <div className="bg-blue-100 rounded-lg p-4 text-center">
                <p className="text-blue-600 font-bold text-2xl">{batteryInventory.charging}</p>
                <p className="text-blue-800 text-sm">Đang sạc</p>
              </div>
              <div className="bg-yellow-100 rounded-lg p-4 text-center">
                <p className="text-yellow-600 font-bold text-2xl">{batteryInventory.maintenance}</p>
                <p className="text-yellow-800 text-sm">Bảo trì</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <p className="text-gray-600 font-bold text-2xl">{batteryInventory.total}</p>
                <p className="text-gray-800 text-sm">Tổng số pin</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="bg-blue-50 rounded-lg p-4 flex justify-between items-center">
                <div>
                  <p className="text-blue-800 font-medium">Lượt đổi pin hôm nay</p>
                  <p className="text-blue-600 font-bold text-2xl">{dailySwaps}</p>
                </div>
                <Link to="/staff/transaction-history" className="btn-primary">
                  Xem lịch sử
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Appointments and Issues */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Lịch hẹn hôm nay</h3>
              <Link to="/staff/appointments" className="text-navy hover:text-navy-light text-sm font-medium">
                Xem tất cả
              </Link>
            </div>
            
            {upcomingAppointments.length > 0 ? (
              <div className="space-y-3">
                {upcomingAppointments.map((appointment) => (
                  <div key={appointment.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{appointment.time} - {appointment.customer}</p>
                        <p className="text-gray-600 text-sm mt-1">
                          Xe: {appointment.vehicleType}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 text-sm bg-navy text-white rounded hover:bg-navy-light transition-colors">
                          Xác nhận
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6">
                <p className="text-gray-500">Không có lịch hẹn nào hôm nay.</p>
              </div>
            )}
          </div>

          <div className="card">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Vấn đề pin báo cáo</h3>
              <Link to="/staff/battery-issues" className="text-navy hover:text-navy-light text-sm font-medium">
                Xem tất cả
              </Link>
            </div>
            
            {batteryIssues.length > 0 ? (
              <div className="space-y-3">
                {batteryIssues.map((issue, index) => (
                  <div key={index} className="border border-red-200 bg-red-50 rounded-lg p-4">
                    <div>
                      <div className="flex justify-between">
                        <p className="font-medium text-red-700">Mã pin: {issue.id}</p>
                        <p className="text-gray-600 text-sm">{issue.date}</p>
                      </div>
                      <p className="text-red-600 mt-1">Vấn đề: {issue.issue}</p>
                      <p className="text-gray-600 text-sm mt-1">
                        Báo cáo bởi: {issue.reportedBy}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6">
                <p className="text-gray-500">Không có vấn đề pin nào được báo cáo.</p>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card">
          <h3 className="text-lg font-medium mb-4">Thao tác nhanh</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/staff/swap-battery" className="bg-navy text-white rounded-lg p-6 text-center hover:bg-navy-light">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <p className="font-medium">Đổi pin</p>
            </Link>
            <Link to="/staff/check-in" className="bg-green-600 text-white rounded-lg p-6 text-center hover:bg-green-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <p className="font-medium">Check-in</p>
            </Link>
            <Link to="/staff/battery-management" className="bg-blue-600 text-white rounded-lg p-6 text-center hover:bg-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <p className="font-medium">Quản lý pin</p>
            </Link>
            <Link to="/staff/report-issue" className="bg-yellow-500 text-white rounded-lg p-6 text-center hover:bg-yellow-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="font-medium">Báo cáo vấn đề</p>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  // Admin dashboard view
  const renderAdminDashboard = () => {
    const { name, stats, stations, recentAlerts, aiInsights } = userData;

    return (
      <div className="space-y-6">
        {/* Welcome and Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="card md:col-span-1">
            <h3 className="text-lg font-medium mb-4">Thông tin quản trị</h3>
            <p className="text-gray-600">Xin chào, <span className="font-bold text-navy">{name}</span></p>
            <div className="mt-4">
              <Link to="/profile" className="text-navy hover:text-navy-light text-sm font-medium flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                Cập nhật thông tin
              </Link>
            </div>
          </div>
          
          <div className="card md:col-span-3">
            <h3 className="text-lg font-medium mb-4">Thống kê hệ thống</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-blue-100 rounded-lg p-4 text-center">
                <p className="text-blue-600 font-bold text-2xl">{stats.totalStations}</p>
                <p className="text-blue-800 text-sm">Trạm</p>
              </div>
              <div className="bg-green-100 rounded-lg p-4 text-center">
                <p className="text-green-600 font-bold text-2xl">{stats.totalBatteries}</p>
                <p className="text-green-800 text-sm">Pin</p>
              </div>
              <div className="bg-purple-100 rounded-lg p-4 text-center">
                <p className="text-purple-600 font-bold text-2xl">{stats.activePlans}</p>
                <p className="text-purple-800 text-sm">Gói dịch vụ</p>
              </div>
              <div className="bg-navy bg-opacity-10 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center">
                  <p className="text-navy font-bold text-xl">{stats.revenue.monthly}</p>
                  <span className="ml-2 text-green-500 text-sm">{stats.revenue.growth}</span>
                </div>
                <p className="text-navy text-sm">Doanh thu tháng</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stations and Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="card lg:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Trạm đổi pin</h3>
              <Link to="/admin/stations" className="text-navy hover:text-navy-light text-sm font-medium">
                Xem tất cả
              </Link>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tên trạm
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Số pin
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Lượt đổi/ngày
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Trạng thái
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {stations.map((station) => (
                    <tr key={station.id}>
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-navy">{station.name}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{station.batteryCount}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{station.dailySwaps}</td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        {station.status === 'active' ? (
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Hoạt động
                          </span>
                        ) : (
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                            Bảo trì
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="card">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Cảnh báo gần đây</h3>
              <Link to="/admin/alerts" className="text-navy hover:text-navy-light text-sm font-medium">
                Xem tất cả
              </Link>
            </div>
            
            <div className="space-y-3">
              {recentAlerts.map((alert) => (
                <div key={alert.id} className="border border-red-200 bg-red-50 rounded-lg p-3">
                  <div className="flex justify-between">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      alert.type === 'Thiết bị' ? 'bg-yellow-200 text-yellow-800' : 
                      alert.type === 'Pin' ? 'bg-red-200 text-red-800' : 
                      'bg-blue-200 text-blue-800'
                    }`}>
                      {alert.type}
                    </span>
                    <span className="text-gray-500 text-xs">{alert.time}</span>
                  </div>
                  <p className="text-gray-800 mt-2 text-sm">{alert.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Insights */}
        <div className="card">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Phân tích AI</h3>
            <Link to="/admin/ai-insights" className="text-navy hover:text-navy-light text-sm font-medium">
              Xem chi tiết
            </Link>
          </div>
          
          <div className="bg-gradient-to-r from-navy to-blue-500 rounded-lg p-6 text-white">
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <h4 className="text-xl font-bold">Gợi ý từ hệ thống AI</h4>
            </div>
            <ul className="space-y-3">
              {aiInsights.map((insight, index) => (
                <li key={index} className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{insight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Link to="/admin/add-station" className="card hover:border-navy hover:shadow-lg text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="mt-3 font-medium text-navy">Thêm trạm mới</p>
          </Link>
          <Link to="/admin/battery-inventory" className="card hover:border-navy hover:shadow-lg text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <p className="mt-3 font-medium text-navy">Quản lý pin</p>
          </Link>
          <Link to="/admin/users" className="card hover:border-navy hover:shadow-lg text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <p className="mt-3 font-medium text-navy">Quản lý người dùng</p>
          </Link>
          <Link to="/admin/reports" className="card hover:border-navy hover:shadow-lg text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <p className="mt-3 font-medium text-navy">Báo cáo & thống kê</p>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Bảng điều khiển</h1>
          
          {/* Role switcher - For demo purposes only */}
          <div className="flex mt-4 space-x-4">
            <button 
              onClick={() => switchRole('driver')}
              className={`px-4 py-2 rounded-md ${userRole === 'driver' ? 'bg-navy text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
            >
              Tài xế
            </button>
            <button 
              onClick={() => switchRole('staff')}
              className={`px-4 py-2 rounded-md ${userRole === 'staff' ? 'bg-navy text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
            >
              Nhân viên
            </button>
            <button 
              onClick={() => switchRole('admin')}
              className={`px-4 py-2 rounded-md ${userRole === 'admin' ? 'bg-navy text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
            >
              Quản trị viên
            </button>
          </div>
        </div>

        {renderDashboard()}
      </div>
    </div>
  );
};

export default Dashboard;