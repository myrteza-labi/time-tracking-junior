import React from 'react'; 
import './Activity.css'; 

function Activity(props){
    return (
        <div className="Activity" >
            <p className="activityTitle" >{props.title}</p>
        </div>
    )
}

export default Activity; 