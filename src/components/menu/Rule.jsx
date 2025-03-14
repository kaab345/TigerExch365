import React, { useState } from 'react';
import './Rule.css';

const sections = [
    {
        title: "General Rules",
        content: "Once all session/fancy bets are completed and settled there will be no reversal even if the Match is Tied or is Abandoned..."
    },
    {
        title: "Advance Session/Player Runs",
        content: "Advance Session or Player Runs and all Fancy Bets are only valid for 20/50 overs full match each side..."
    },
    {
        title: "Incomplete Session Rules",
        content: "Incomplete Session/Fancy Bet will be cancelled but Complete Session will be settled..."
    },
    {
        title: "Technical Issues",
        content: "Should a Technical Glitch in Software occur, we will not be held responsible for any losses..."
    },
    {
        title: "IPL 2021 Rules",
        content: "If Over Reduced in Match, we will not count the actual scores of the Over Reduced Matches..."
    },
    {
        title: "Casino Payout Restrictions",
        content: "Restriction of payout is applicable for all Casino games..."
    }
];

const Rule = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleSection = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="betting-rules-container">
            <h1>Betting Rules & Regulations</h1>
            {sections.map((section, index) => (
                <div key={index} className="rule-section">
                    <div
                        className="section-Rule"
                        onClick={() => toggleSection(index)}
                    >
                        {section.title}
                    </div>
                    {activeIndex === index && (
                        <div className="section-content">{section.content}</div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Rule;