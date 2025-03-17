import React, { useState } from 'react';
import './Profile.css'; // Reusing the same CSS file

const Change_Password = () => {
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
        <h1>SECURITY SETTINGS</h1>
      </div>

      <div className="profile-content">
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

export default Change_Password;