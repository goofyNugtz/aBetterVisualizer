import React from 'react';
import './Visualizer.css';

const visualizer = (props) => {

    return (
        <div>
            {props.values.map((value, index) => {
                return(
                <div className = "bars" key = {index} style = {{height: `${value}px`}}>
                    {value}
                </div>
            )})}
        </div>
    )
}



export default visualizer;