import React from 'react';
import './LoadSlider.css';

const load = (props) => {

    //console.log(props.value);

    return (

        <div className = "range">
            <div className="range-title">.sizeOfArray()</div>
            <div className="field">
                <div className="value left">{props.value}</div>
                <input type="range" min="5" max="75" step="1" value={props.value} onChange={props.handler}></input>
                <div className="value right">75</div>
            </div>
        </div>
    )
}

export default load;