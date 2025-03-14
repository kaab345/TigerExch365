import React from 'react';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <div className="terms-header">
        <h1>Terms & Conditions</h1>
      </div>

      <div className="terms-content">
        <div className="terms-section">
          <h2>Introduction</h2>
          <p>
            These terms and conditions and the documents referred and linked to below (the "Terms") set out the
            basis upon which the website operated under the Website and its related or connected services
            (collectively, the "Service") will be provided to you.
          </p>
        </div>

        <div className="terms-section">
          <h2>General Terms</h2>
          <p>
            We reserve the right to amend the terms (including any documents referred and linked to below) at any
            time. When such amendment is not substantial, we may not provide you with prior notice. You will be
            notified in advance for material changes and may be required to re-confirm acceptance before they take
            effect.
          </p>
        </div>

        <div className="terms-section">
          <h2>Your Obligations</h2>
          <ul>
            <li>You must be over 18 years of age and legally capable of entering into a binding agreement.</li>
            <li>It is your responsibility to ensure that using the service is legal in your jurisdiction.</li>
            <li>When sending money, you confirm authorization to do so.</li>
            <li>You must not attempt to manipulate any element of the service in bad faith.</li>
          </ul>
        </div>

        <div className="terms-section">
          <h2>Registration</h2>
          <p>
            You must provide accurate information when registering, including valid proof of identification. We reserve
            the right to suspend wagering or restrict account options until verification is completed.
          </p>
        </div>

        <div className="terms-section">
          <h2>Restricted Use</h2>
          <p>
            You must not use the service for unlawful activities, unauthorized data collection, disrupting others,
            promoting unsolicited advertisements, or attempting to cheat the service.
          </p>
        </div>

        <div className="terms-section">
          <h2>Privacy</h2>
          <p>
            Your information is protected and processed in accordance with our Privacy Policy. We will not disclose
            your identity unless required by competent authorities.
          </p>
        </div>

        <div className="terms-section">
          <h2>Your Account</h2>
          <p>
            We reserve the right to close or suspend an account if terms are not followed. No credit is given for
            service use.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;