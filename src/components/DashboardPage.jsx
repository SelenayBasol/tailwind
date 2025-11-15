import React from 'react';
import ProfileCard from './ProfileCard';
import DataTable from './DataTable';

const DashboardPage = ({ userData, onLogout }) => {

  const profileData = {
    name: userData?.fullName || 'Kullanıcı',
    role: 'Yeni Üye',
    avatar: 'https://i.pravatar.cc/300?img=2',
    email: userData?.email || 'user@example.com',
    location: userData?.country === 'tr' ? 'Türkiye' : userData?.country || 'Bilinmiyor',
    stats: [
      { value: '0', label: 'Takipçi' },
      { value: '0', label: 'Takip' },
      { value: '0', label: 'Proje' },
    ],
  };

  const tableData = [
    { id: 1, ad: 'Ahmet Yılmaz', departman: 'Yazılım', maas: '15.000₺', durum: 'Aktif' },
    { id: 2, ad: 'Ayşe Demir', departman: 'Tasarım', maas: '12.000₺', durum: 'Aktif' },
    { id: 3, ad: 'Mehmet Kaya', departman: 'Pazarlama', maas: '10.000₺', durum: 'İzinli' },
    { id: 4, ad: 'Zeynep Ak', departman: 'İK', maas: '11.500₺', durum: 'Aktif' },
    { id: 5, ad: 'Can Öz', departman: 'Yazılım', maas: '16.000₺', durum: 'Aktif' },
    { id: 6, ad: 'Elif Şahin', departman: 'Müşteri Hizmetleri', maas: '9.500₺', durum: 'Aktif' },
    { id: 7, ad: 'Burak Yıldız', departman: 'Yazılım', maas: '17.500₺', durum: 'Aktif' },
    { id: 8, ad: 'Selin Çelik', departman: 'Tasarım', maas: '13.000₺', durum: 'İzinli' },
  ];

  const tableColumns = [
    { key: 'id', label: 'ID' },
    { key: 'ad', label: 'Ad Soyad' },
    { key: 'departman', label: 'Departman' },
    { key: 'maas', label: 'Maaş' },
    { key: 'durum', label: 'Durum' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">

      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-orange-400">SillyApp</h1>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Hoş geldin, <span className="font-semibold text-gray-800">{userData?.fullName}</span>
              </span>
              <button
                onClick={onLogout}
                className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
              >
                Çıkış Yap
              </button>
            </div>
          </div>
        </div>
      </nav>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Hoş Geldiniz! 👋
          </h2>
          <p className="text-gray-600 mt-2">
            Hesabınız başarıyla oluşturuldu. Dashboard'unuzu keşfedin.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-400">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Toplam Çalışan</p>
                <p className="text-3xl font-bold text-gray-800 mt-2">{tableData.length}</p>
              </div>
              <div className="bg-orange-100 rounded-full p-3">
                <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-400">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Aktif Çalışan</p>
                <p className="text-3xl font-bold text-gray-800 mt-2">
                  {tableData.filter(item => item.durum === 'Aktif').length}
                </p>
              </div>
              <div className="bg-green-100 rounded-full p-3">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-400">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Departman</p>
                <p className="text-3xl font-bold text-gray-800 mt-2">5</p>
              </div>
              <div className="bg-blue-100 rounded-full p-3">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Profil Bilgileri</h3>
            <ProfileCard {...profileData} />
          </div>


          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Çalışan Listesi</h3>
            <DataTable data={tableData} columns={tableColumns} />
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-gray-500">
          <p>© 2025 Selenay Basic App. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;