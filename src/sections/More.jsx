import React from 'react';
import '../styles/More.css';

const More = () => {
    return (
        <div className="cards-container">
            <div className="hobby-card">
                <div>
                <h1>Writing <span className="arrow">→</span></h1>
                </div>
                <div>
                <p>What ive been writing</p>
                </div>
            </div>
            <div className="hobby-card">
                <h1>Reading <span className="arrow">→</span></h1>
                <p>What Ive been reading</p>
            </div>
            <div className="hobby-card">
                <h1>Miscellaneous <span className="arrow">→</span></h1>
                <p>Anything else I've been working on</p>
            </div>
        </div>
    );
}

export default More;