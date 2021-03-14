import React from 'react';
import './LoadSlider.css';

const load = () => {

    return (
        <div className = "range">
            <div className="slider-value">
                <span>50</span>
            </div>
            <div className="field">
                <div className="value left">0</div>
                <input type="range" min="5" max="100" step="1"></input>
                <div className="value right">100</div>
            </div>
        </div>
    )
}

export default load;