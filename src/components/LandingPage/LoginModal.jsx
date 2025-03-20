import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../../context/AuthContext";

const LoginModal = ({ show, onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch('your-api-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const userData = await response.json();
        login(userData);
        onClose();
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
    }

    setUsername("");
    setPassword("");
    setError("");
  };

  return (
    <>
      {/* Button to Open Modal */}
      {/* <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#LoginHome">
        Open Login Modal
      </button> */}

      {/* Login Modal */}
      <div className={`modal fade ${show ? 'show' : ''}`} id="LoginHome" tabIndex="-1" aria-labelledby="LoginHomeLabel" aria-hidden="true" style={{ display: show ? 'block' : 'none' }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
              <img className="img-fluid mb-3" src="https://tiger365.me/tiger365.me/images/logo-text.png" alt="Logo" />

              <h2 className="text-center">Login</h2>

              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" id="rememberme" />
                  <label className="form-check-label" htmlFor="rememberme">
                    Remember me
                  </label>
                </div>

                {error && <p className="text-danger">{error}</p>}

                <button type="submit" className="btn btn-primary w-100">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
