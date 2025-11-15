import React, { useState } from 'react';
import RegistrationPage from './components/RegistrationForm';
import DashboardPage from './components/DashboardPage';

function App() {
  const [currentPage, setCurrentPage] = useState('register');
  const [userData, setUserData] = useState(null);

  const handleRegistrationSuccess = (data) => {
    setUserData(data);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setUserData(null);
    setCurrentPage('register');
  };

  return (
    <div className="min-h-screen">
      {currentPage === 'register' ? (
        <RegistrationPage onSuccess={handleRegistrationSuccess} />
      ) : (
        <DashboardPage userData={userData} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;