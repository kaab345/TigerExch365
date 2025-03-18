import React from 'react';
import './moniotor.css';

const Moniotor = () => {
  return (
    <div className="report-settings-container">
      <div className="header-bar">
        <h3 className="header-title">Report Settings</h3>
      </div>

      <section className="vbox">
        <section className="scrollable padder">
          
          
          <section className="button-section">
            <div className="doc-buttons">
              <div className="button-container">
                <a href="/monitorCreation" className="report-button monitor-creation">
                  Monitor Creation
                </a>
              </div>
              
              <div className="button-container">
                <a href="/monitorUser" className="report-button monitor-user">
                  Monitor User
                </a>
              </div>
              
              <div className="button-container">
                <a href="/userpl/10/1/0/0/Cricket/Top" className="report-button user-pl">
                  User PL
                </a>
              </div>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default Moniotor;