import React from 'react';

const visualizer = (props) => {
    

    return (
        <div>
            {props.values.map((value, index) => {
                return(
                <div className = "bars" key = {index}>
                    {value}
                </div>
            )})}
        </div>
    )
}



export default visualizer;