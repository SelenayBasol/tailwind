import React from 'react';
const ProfileCard = ({ name, role, avatar, email, location, stats }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="h-32 bg-gradient-to-r from-orange-200 to-orange-400"></div>
      
      <div className="relative px-6 pb-6">
        <div className="flex justify-center -mt-16">
          <img
            className="h-32 w-32 rounded-full border-4 border-white object-cover"
            src={avatar}
            alt={name}
          />
        </div>
        
        <div className="text-center mt-4">
          <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
          <p className="text-gray-600 mt-1">{role}</p>
          
          <div className="flex items-center justify-center mt-3 text-gray-500 text-sm space-x-4">
            <div className="flex items-center">
              <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {email}
            </div>
            <div className="flex items-center">
              <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {location}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              <p className="text-xs text-gray-500 uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
        
        <div className="flex gap-3 mt-6">
          <button className="flex-1 bg-orange-300 hover:bg-orange-400 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
            Takip Et
          </button>
          <button className="flex-1 bg-stone-200 hover:bg-stone-300 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
            Mesaj
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;