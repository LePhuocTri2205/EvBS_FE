import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const StationLocator = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all'); // all, available, busy
  const [filterDistance, setFilterDistance] = useState('all'); // all, 5km, 10km, 20km
  
  // Demo data
  const demoStations = [
    { 
      id: 1, 
      name: 'Trạm đổi pin Lê Văn Việt', 
      address: '123 Lê Văn Việt, Quận 9, TP. Hồ Chí Minh', 
      distance: 2.3,
      availableSlots: 8,
      totalSlots: 12,
      operatingHours: '07:00 - 22:00',
      status: 'active',
      features: ['Wifi', 'Khu vực chờ', 'Quầy nước'],
      lat: 10.846463, 
      lng: 106.795000,
    },
    { 
      id: 2, 
      name: 'Trạm đổi pin Võ Văn Ngân', 
      address: '45 Võ Văn Ngân, Thủ Đức, TP. Hồ Chí Minh', 
      distance: 4.7,
      availableSlots: 2,
      totalSlots: 10,
      operatingHours: '06:00 - 23:00',
      status: 'active',
      features: ['Wifi', 'Khu vực chờ', 'Trà miễn phí'],
      lat: 10.850163, 
      lng: 106.772113,
    },
    { 
      id: 3, 
      name: 'Trạm đổi pin Nguyễn Văn Linh', 
      address: '78 Nguyễn Văn Linh, Quận 7, TP. Hồ Chí Minh', 
      distance: 1.2,
      availableSlots: 5,
      totalSlots: 8,
      operatingHours: '07:00 - 21:00',
      status: 'active',
      features: ['Wifi', 'Khu vực chờ'],
      lat: 10.729973, 
      lng: 106.703890,
    },
    { 
      id: 4, 
      name: 'Trạm đổi pin Quận 1', 
      address: '22 Lý Tự Trọng, Quận 1, TP. Hồ Chí Minh', 
      distance: 7.8,
      availableSlots: 0,
      totalSlots: 6,
      operatingHours: '07:30 - 21:30',
      status: 'busy',
      features: ['Wifi'],
      lat: 10.776414, 
      lng: 106.699068,
    },
    { 
      id: 5, 
      name: 'Trạm đổi pin Tân Bình', 
      address: '156 Trường Chinh, Tân Bình, TP. Hồ Chí Minh', 
      distance: 5.3,
      availableSlots: 3,
      totalSlots: 8,
      operatingHours: '07:00 - 22:00',
      status: 'active',
      features: ['Wifi', 'Khu vực chờ', 'Quầy cà phê'],
      lat: 10.797088, 
      lng: 106.652064,
    },
    { 
      id: 6, 
      name: 'Trạm đổi pin Bình Thạnh', 
      address: '18 Điện Biên Phủ, Bình Thạnh, TP. Hồ Chí Minh', 
      distance: 8.1,
      availableSlots: 7,
      totalSlots: 10,
      operatingHours: '06:30 - 22:30',
      status: 'active',
      features: ['Wifi', 'Khu vực chờ', 'Sạc điện thoại'],
      lat: 10.798391, 
      lng: 106.712678,
    },
    { 
      id: 7, 
      name: 'Trạm đổi pin Quận 3', 
      address: '234 Võ Thị Sáu, Quận 3, TP. Hồ Chí Minh', 
      distance: 6.2,
      availableSlots: 0,
      totalSlots: 8,
      operatingHours: '07:00 - 21:00',
      status: 'maintenance',
      features: ['Wifi', 'Khu vực chờ'],
      lat: 10.784230, 
      lng: 106.690449,
    },
  ];

  // Filter stations based on search query, status, and distance
  const filteredStations = demoStations.filter(station => {
    // Filter by search query
    const matchesSearch = searchQuery === '' || 
      station.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      station.address.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by status
    const matchesStatus = filterStatus === 'all' ||
      (filterStatus === 'available' && station.availableSlots > 0 && station.status === 'active') ||
      (filterStatus === 'busy' && (station.availableSlots === 0 || station.status !== 'active'));
    
    // Filter by distance
    const matchesDistance = filterDistance === 'all' ||
      (filterDistance === '5km' && station.distance <= 5) ||
      (filterDistance === '10km' && station.distance <= 10) ||
      (filterDistance === '20km' && station.distance <= 20);
    
    return matchesSearch && matchesStatus && matchesDistance;
  });

  // Sort by distance
  const sortedStations = [...filteredStations].sort((a, b) => a.distance - b.distance);

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Trạm đổi pin</h1>
          <p className="text-gray-600">
            Tìm trạm đổi pin gần bạn nhất và xem tình trạng khả dụng theo thời gian thực.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Search and Filter Panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <div className="card mb-6">
                <h3 className="text-lg font-medium mb-4">Tìm kiếm</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Tìm theo tên hoặc địa chỉ..."
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

              <div className="card mb-6">
                <h3 className="text-lg font-medium mb-4">Bộ lọc</h3>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Trạng thái</label>
                  <div className="flex flex-wrap gap-2">
                    <button
                      className={`px-4 py-2 rounded-md ${filterStatus === 'all' ? 'bg-navy text-white' : 'bg-white border border-gray-300 text-gray-700'}`}
                      onClick={() => setFilterStatus('all')}
                    >
                      Tất cả
                    </button>
                    <button
                      className={`px-4 py-2 rounded-md ${filterStatus === 'available' ? 'bg-navy text-white' : 'bg-white border border-gray-300 text-gray-700'}`}
                      onClick={() => setFilterStatus('available')}
                    >
                      Còn trống
                    </button>
                    <button
                      className={`px-4 py-2 rounded-md ${filterStatus === 'busy' ? 'bg-navy text-white' : 'bg-white border border-gray-300 text-gray-700'}`}
                      onClick={() => setFilterStatus('busy')}
                    >
                      Đang bận/Bảo trì
                    </button>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Khoảng cách</label>
                  <div className="flex flex-wrap gap-2">
                    <button
                      className={`px-4 py-2 rounded-md ${filterDistance === 'all' ? 'bg-navy text-white' : 'bg-white border border-gray-300 text-gray-700'}`}
                      onClick={() => setFilterDistance('all')}
                    >
                      Tất cả
                    </button>
                    <button
                      className={`px-4 py-2 rounded-md ${filterDistance === '5km' ? 'bg-navy text-white' : 'bg-white border border-gray-300 text-gray-700'}`}
                      onClick={() => setFilterDistance('5km')}
                    >
                      &lt; 5km
                    </button>
                    <button
                      className={`px-4 py-2 rounded-md ${filterDistance === '10km' ? 'bg-navy text-white' : 'bg-white border border-gray-300 text-gray-700'}`}
                      onClick={() => setFilterDistance('10km')}
                    >
                      &lt; 10km
                    </button>
                    <button
                      className={`px-4 py-2 rounded-md ${filterDistance === '20km' ? 'bg-navy text-white' : 'bg-white border border-gray-300 text-gray-700'}`}
                      onClick={() => setFilterDistance('20km')}
                    >
                      &lt; 20km
                    </button>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="text-lg font-medium mb-4">Trợ giúp</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-md">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-blue-800">Màu trạng thái</h3>
                        <div className="mt-2 text-sm text-blue-700">
                          <ul className="space-y-1">
                            <li className="flex items-center">
                              <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                              <span>Nhiều chỗ trống</span>
                            </li>
                            <li className="flex items-center">
                              <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                              <span>Ít chỗ trống</span>
                            </li>
                            <li className="flex items-center">
                              <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                              <span>Hết chỗ</span>
                            </li>
                            <li className="flex items-center">
                              <span className="inline-block w-3 h-3 bg-gray-400 rounded-full mr-2"></span>
                              <span>Đang bảo trì</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Link to="/support" className="btn-primary w-full text-center">
                    Cần trợ giúp?
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Station List */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <p className="text-gray-700">Tìm thấy {sortedStations.length} trạm</p>
            </div>

            {sortedStations.length > 0 ? (
              <div className="space-y-6">
                {sortedStations.map((station) => (
                  <div key={station.id} className="card hover:shadow-md transition-all">
                    <div className="flex justify-between flex-wrap gap-4">
                      <div>
                        <div className="flex items-center">
                          <h3 className="text-xl font-medium text-navy">{station.name}</h3>
                          {station.status === 'maintenance' ? (
                            <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                              Đang bảo trì
                            </span>
                          ) : station.availableSlots === 0 ? (
                            <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                              Hết chỗ
                            </span>
                          ) : station.availableSlots <= station.totalSlots / 3 ? (
                            <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                              Ít chỗ trống
                            </span>
                          ) : (
                            <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              Sẵn sàng
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 mt-2">{station.address}</p>
                        
                        <div className="flex mt-2 space-x-4">
                          <div className="text-sm text-gray-500">
                            <span className="font-medium">Giờ mở cửa:</span> {station.operatingHours}
                          </div>
                          <div className="text-sm text-gray-500">
                            <span className="font-medium">Khoảng cách:</span> {station.distance} km
                          </div>
                        </div>

                        {station.features.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {station.features.map((feature, index) => (
                              <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
                                {feature}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col justify-between items-end">
                        <div className="text-right">
                          <div className="text-lg font-medium">
                            {station.status === 'maintenance' ? (
                              <span className="text-gray-500">Đang bảo trì</span>
                            ) : (
                              <>
                                <span className={station.availableSlots === 0 ? 'text-red-600' : 'text-green-600'}>
                                  {station.availableSlots}
                                </span>
                                <span className="text-gray-600">/{station.totalSlots}</span>
                                <span className="text-gray-500 text-sm ml-1">slots</span>
                              </>
                            )}
                          </div>
                          <div className="mt-1">
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div 
                                className={`h-2.5 rounded-full ${
                                  station.status === 'maintenance' ? 'bg-gray-400' :
                                  station.availableSlots === 0 ? 'bg-red-500' :
                                  station.availableSlots <= station.totalSlots / 3 ? 'bg-yellow-500' : 'bg-green-500'
                                }`} 
                                style={{ width: station.status === 'maintenance' ? '100%' : `${(station.availableSlots / station.totalSlots) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                          <a 
                            href={`https://www.google.com/maps/dir/?api=1&destination=${station.lat},${station.lng}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-4 py-2 border border-navy text-navy rounded-md hover:bg-navy hover:text-white transition-colors text-sm"
                          >
                            Chỉ đường
                          </a>
                          {station.status !== 'maintenance' && station.availableSlots > 0 && (
                            <Link 
                              to={`/book-appointment?station=${station.id}`}
                              className="px-4 py-2 bg-navy text-white rounded-md hover:bg-navy-light transition-colors text-sm"
                            >
                              Đặt lịch
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="card text-center py-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Không tìm thấy trạm nào</h3>
                <p className="mt-2 text-gray-600">
                  Không có trạm nào phù hợp với bộ lọc của bạn. Hãy thử điều chỉnh bộ lọc.
                </p>
                <button
                  className="mt-4 btn-primary"
                  onClick={() => {
                    setSearchQuery('');
                    setFilterStatus('all');
                    setFilterDistance('all');
                  }}
                >
                  Xóa bộ lọc
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StationLocator;