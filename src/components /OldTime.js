import React from 'react'; 
import './OldTime.css'; 


function OldTime(props){
    return (
        <div className="OldTime" >
            <p className="oldTimeText" >Last Week - <span className="oldTimeHours">{props.lastHour}</span>hrs</p>
        </div>
    )
}

export default OldTime; 