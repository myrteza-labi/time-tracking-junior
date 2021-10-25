import React from 'react'; 
import './Time.css'; 


function Time(props){
    return (
        <div className="Time" >
            <p className="timeText" >{props.nHours}hrs</p>
        </div>
    )
}

export default Time; 