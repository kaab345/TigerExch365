import React, { useState } from 'react';
import './Profile.css';

const mockUser = {
  personalInfo: {
    username: 'tiger123',
    name: 'John Smith',
    email: 'john.smith@example.com',
    phone: '+91 98765 43210',
    joinDate: '2024-01-15',
    status: 'active'
  },
  accountInfo: {
    balance: 11500,
    totalBets: 25,
    winRate: '68%',
    lastLogin: '2024-01-20 14:30'
  }
};

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [password, setPassword] = useState({
    current: '',
    new: '',
    confirm: ''
  });

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // Handle password change logic here
    setShowPasswordForm(false);
    setPassword({ current: '', new: '', confirm: '' });
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>MY PROFILE</h1>
      </div>

      <div className="profile-content">
        {/* Personal Information Section */}
        <div className="profile-section">
          <h2>Personal Information</h2>
          <div className="profile-grid">
            <div className="profile-field">
              <span className="profile-label">Username</span>
              <span className="profile-value">{mockUser.personalInfo.username}</span>
            </div>
            <div className="profile-field">
              <span className="profile-label">Full Name</span>
              <span className="profile-value">{mockUser.personalInfo.name}</span>
            </div>
            <div className="profile-field">
              <span className="profile-label">Email</span>
              <span className="profile-value">{mockUser.personalInfo.email}</span>
            </div>
            <div className="profile-field">
              <span className="profile-label">Phone</span>
              <span className="profile-value">{mockUser.personalInfo.phone}</span>
            </div>
            <div className="profile-field">
              <span className="profile-label">Join Date</span>
              <span className="profile-value">{mockUser.personalInfo.joinDate}</span>
            </div>
            <div className="profile-field">
              <span className="profile-label">Status</span>
              <span className={`profile-status ${mockUser.personalInfo.status}`}>
                {mockUser.personalInfo.status.toUpperCase()}
              </span>
            </div>
          </div>
        </div>

        {/* Account Information Section */}
        <div className="profile-section">
          <h2>Account Information</h2>
          <div className="profile-grid">
            <div className="profile-field">
              <span className="profile-label">Current Balance</span>
              <span className="profile-value">₹{mockUser.accountInfo.balance.toLocaleString()}</span>
            </div>
            <div className="profile-field">
              <span className="profile-label">Total Bets</span>
              <span className="profile-value">{mockUser.accountInfo.totalBets}</span>
            </div>
            <div className="profile-field">
              <span className="profile-label">Win Rate</span>
              <span className="profile-value">{mockUser.accountInfo.winRate}</span>
            </div>
            <div className="profile-field">
              <span className="profile-label">Last Login</span>
              <span className="profile-value">{mockUser.accountInfo.lastLogin}</span>
            </div>
          </div>
        </div>

        {/* Password Change Section */}
        <div className="profile-section">
          <h2>Security</h2>
          {showPasswordForm ? (
            <form onSubmit={handlePasswordSubmit}>
              <div className="profile-grid">
                <div className="profile-field">
                  <span className="profile-label">Current Password</span>
                  <input
                    type="password"
                    className="profile-value"
                    value={password.current}
                    onChange={(e) => setPassword({ ...password, current: e.target.value })}
                  />
                </div>
                <div className="profile-field">
                  <span className="profile-label">New Password</span>
                  <input
                    type="password"
                    className="profile-value"
                    value={password.new}
                    onChange={(e) => setPassword({ ...password, new: e.target.value })}
                  />
                </div>
                <div className="profile-field">
                  <span className="profile-label">Confirm New Password</span>
                  <input
                    type="password"
                    className="profile-value"
                    value={password.confirm}
                    onChange={(e) => setPassword({ ...password, confirm: e.target.value })}
                  />
                </div>
              </div>
              <div className="profile-actions">
                <button type="submit" className="profile-button primary">
                  Update Password
                </button>
                <button
                  type="button"
                  className="profile-button secondary"
                  onClick={() => setShowPasswordForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div className="profile-actions">
              <button
                className="profile-button primary"
                onClick={() => setShowPasswordForm(true)}
              >
                Change Password
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;