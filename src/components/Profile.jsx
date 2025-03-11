import React, { useState } from 'react';
import './Profile.css'; // Import the CSS file

const Profile = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password update logic here
    console.log('Updating password...');
  };

  return (
    <div className="profile-container">
      {/* Header */}
      <div className="profile-header">
        <h1>PROFILE</h1>
      </div>
      
     
      
      {/* Main content */}
      <div className="main-content">
        <div className="content-wrapper">
          {/* User details section */}
          <div className="user-details-section">
            <div className="section-header">
              <h2>User Details</h2>
            </div>
            
            <ul className="details-list">
              <li className="details-item">
                <div className="item-content">
                  <span className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </span>
                  <span>Name : DEMO123</span>
                </div>
              </li>
              
              <li className="details-item">
                <div className="item-content">
                  <span className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </span>
                  <span>Username : DEMO123</span>
                </div>
              </li>
              
              <li className="details-item">
                <div className="item-content">
                  <span className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </span>
                  <span>Chips : 0</span>
                </div>
              </li>
              
              <li className="details-item">
                <div className="item-content">
                  <span className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <span>P/L : 0.00</span>
                </div>
              </li>
              
              <li className="details-item">
                <div className="item-content">
                  <span className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </span>
                  <span>Exposure : 0.00</span>
                </div>
              </li>
              
              <li className="details-item">
                <div className="item-content">
                  <span className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </span>
                  <span>Balance : 0</span>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Change password section */}
          <div className="password-section">
            <h2>CHANGE PASSWORD</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="oldPassword">OLD PASSWORD</label>
                <input
                  id="oldPassword"
                  type="password"
                  placeholder="Old Password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="newPassword">NEW PASSWORD</label>
                <input
                  id="newPassword"
                  type="password"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="retypePassword">RE-TYPE PASSWORD</label>
                <input
                  id="retypePassword"
                  type="password"
                  placeholder="Re-Type Password"
                  value={retypePassword}
                  onChange={(e) => setRetypePassword(e.target.value)}
                />
              </div>
              
              <div className="form-actions">
                <button type="submit">UPDATE</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;