import React, { useState } from 'react';
import './UserForm.css';

const UserForm = () => {
  const [formData, setFormData] = useState({
    userId: 'SS315852',
    coins: '0.0',
    password: '',
    name: '',
    myCoins: '1000.00',
    myMatchShare: '95',
    matchShare: '0',
    myMatchComm: '3',
    matchComm: '0',
    mySessionComm: '3',
    sessionComm: '0',
    myCasinoShare: '95',
    casinoShare: '0',
    myCasinoComm: '0',
    casinoComm: '0.0'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  const handleCancel = () => {
    console.log('Form cancelled');
    // Add any cancel logic here
  };

  return (
    <div className="user-form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-header">
          <h2>Create Master</h2>
        </div>

        <div className="form-section">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="userId">UserID</label>
              <input
                type="text"
                id="userId"
                name="userId"
                value={formData.userId}
                onChange={handleChange}
                className="form-control"
                readOnly
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="User Name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="coins">Coins</label>
              <input
                type="text"
                id="coins"
                name="coins"
                value={formData.coins}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="myCoins">My Coins</label>
              <input
                type="text"
                id="myCoins"
                name="myCoins"
                value={formData.myCoins}
                onChange={handleChange}
                className="form-control light-bg"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              {/* Empty space to maintain grid layout */}
            </div>
          </div>
        </div>

        <div className="form-section">
          <div className="section-header">
            <h3>Match Share and Commission</h3>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="myMatchShare">My Match Share</label>
              <input
                type="text"
                id="myMatchShare"
                name="myMatchShare"
                value={formData.myMatchShare}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="matchShare">Match Share</label>
              <input
                type="text"
                id="matchShare"
                name="matchShare"
                value={formData.matchShare}
                onChange={handleChange}
                className="form-control"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="myMatchComm">My Match Comm</label>
              <input
                type="text"
                id="myMatchComm"
                name="myMatchComm"
                value={formData.myMatchComm}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="matchComm">Match Comm</label>
              <input
                type="text"
                id="matchComm"
                name="matchComm"
                value={formData.matchComm}
                onChange={handleChange}
                className="form-control"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="mySessionComm">My Session Comm</label>
              <input
                type="text"
                id="mySessionComm"
                name="mySessionComm"
                value={formData.mySessionComm}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="sessionComm">Session Comm</label>
              <input
                type="text"
                id="sessionComm"
                name="sessionComm"
                value={formData.sessionComm}
                onChange={handleChange}
                className="form-control"
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <div className="section-header">
            <h3>Casino Share and Commission</h3>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="myCasinoShare">My Casino Share</label>
              <input
                type="text"
                id="myCasinoShare"
                name="myCasinoShare"
                value={formData.myCasinoShare}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="casinoShare">Casino Share</label>
              <input
                type="text"
                id="casinoShare"
                name="casinoShare"
                value={formData.casinoShare}
                onChange={handleChange}
                className="form-control"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="myCasinoComm">My Casino Comm</label>
              <input
                type="text"
                id="myCasinoComm"
                name="myCasinoComm"
                value={formData.myCasinoComm}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="casinoComm">Casino Comm</label>
              <input
                type="text"
                id="casinoComm"
                name="casinoComm"
                value={formData.casinoComm}
                onChange={handleChange}
                className="form-control"
              />
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="btn btn-cancel" onClick={handleCancel}>
            Cancel
          </button>
          <button type="submit" className="btn btn-save">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;