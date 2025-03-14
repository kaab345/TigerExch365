import React, { useState } from 'react';
import './Rule.css';

const sections = [
  {
    title: "Account Rules",
    content: `
      • Only one account is allowed per person, IP address, or household
      • Users must be at least 18 years old to register
      • Accurate personal information must be provided during registration
      • Account sharing is strictly prohibited
      • The company reserves the right to suspend or terminate accounts violating rules
    `
  },
  {
    title: "Betting Rules",
    content: `
      • All bets are final once confirmed
      • Minimum and maximum betting limits must be observed
      • Bets can only be placed before the event starts
      • Suspicious betting patterns will be investigated
      • The company's decision regarding bet settlements is final
    `
  },
  {
    title: "Payment Rules",
    content: `
      • Minimum deposit and withdrawal limits apply
      • Only verified accounts can make withdrawals
      • Processing times vary by payment method
      • All transactions must comply with anti-money laundering regulations
      • The company reserves the right to request additional verification
    `
  },
  {
    title: "Fair Play Rules",
    content: `
      • Any form of cheating or fraud is prohibited
      • Collusion between players is not allowed
      • Using automated betting systems is forbidden
      • Exploitation of software bugs is prohibited
      • Violations may result in account termination
    `
  }
];

const Rule = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (index) => {
    setExpandedSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="rule-container">
      <div className="rule-header">
        <h1>RULES</h1>
      </div>

      <div className="betting-rules-container">
        <h1>Betting Rules & Regulations</h1>
        
        {sections.map((section, index) => (
          <div key={index} className="rule-section">
            <div 
              className="rule-section-header"
              onClick={() => toggleSection(index)}
            >
              <h2>{section.title}</h2>
              <button className={expandedSections[index] ? 'expanded' : ''}>
                {expandedSections[index] ? '▼' : '▲'}
              </button>
            </div>
            
            {expandedSections[index] && (
              <div className="rule-section-content">
                {section.content.split('\n').map((line, i) => (
                  line.trim() && (
                    <p key={i}>{line.trim()}</p>
                  )
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rule;