import React from 'react';
import ProfileCard from './components/ProfileCard';
import DataTable from './components/DataTable';
import RegistrationForm from './components/RegistrationForm';

function App() {
  const profileData = {
    name: 'Ahmet Yılmaz',
    role: 'Frontend Developer',
    avatar: 'https://i.pravatar.cc/300?img=2',
    email: 'ahmet.yilmaz@google.com',
    location: 'Adana, TR',
    stats: [
      { value: '2.5K', label: 'Takipçi' },
      { value: '184', label: 'Takip' },
      { value: '42', label: 'Proje' },
    ],
  };

  const tableData = [
    { id: 1, ad: 'Ahmet Yılmaz', departman: 'Yazılım', maas: '15.000₺', durum: 'Aktif' },
    { id: 2, ad: 'Ayşe Demir', departman: 'Tasarım', maas: '12.000₺', durum: 'Aktif' },
    { id: 3, ad: 'Mehmet Kaya', departman: 'Pazarlama', maas: '10.000₺', durum: 'İzinli' },
    { id: 4, ad: 'Zeynep Ak', departman: 'İK', maas: '11.500₺', durum: 'Aktif' },
    { id: 5, ad: 'Can Öz', departman: 'Yazılım', maas: '16.000₺', durum: 'Aktif' },
  ];

  const tableColumns = [
    { key: 'id', label: 'ID' },
    { key: 'ad', label: 'Ad Soyad' },
    { key: 'departman', label: 'Departman' },
    { key: 'maas', label: 'Maaş' },
    { key: 'durum', label: 'Durum' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
           TAILWIND İLE BASIC YAPILAR
          </h1>
          <p className="text-gray-600">Selenay REACT ve TAILWIND ile bileşenler</p>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Profil Kartı
          </h2>
          <ProfileCard {...profileData} />
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Veri Tablosu
          </h2>
          <DataTable data={tableData} columns={tableColumns} />
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Kayıt Formu
          </h2>
          <RegistrationForm />
        </section>

      </div>
    </div>
  );
}

export default App;