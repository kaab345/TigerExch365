import React from 'react';
import './Shown.css';

const Shown = () => {
    const getUserDetails = () => {
        // Add your logic to fetch user details
        console.log('Fetching user details...');
    };

    return (
        <div className="container">
            <div className="ibox">
                <div className="ibox-title">
                    <h5>Show Details</h5>
                </div>

                <div className="ibox-content">
                    <div className="form-group">
                        <div className="input-section">
                            <input 
                                className="form-control" 
                                id="userid_search" 
                                placeholder="Enter ID" 
                                type="text" 
                            />
                        </div>
                        <div className="button-section">
                            <button 
                                className="btn btn-primary" 
                                onClick={getUserDetails}
                            >
                                Show Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shown;
