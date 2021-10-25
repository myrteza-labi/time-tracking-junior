import React from 'react'; 
import './ManagementBox.css'; 
import dotIcon from '../images/icon-ellipsis.svg'; 

function ManagementBox(props){
    return (
        <div className="ManagementBox" >
            <div className="mainCtnManagement" >

            </div>
            <div className="activityHoursCtn" >

            </div>
            <div className="imgAndOldDataCtn" >
                <img className="dotIcon" src={dotIcon} alt="3 dots ellips icon" />
            </div>
        </div>
    )
}

export default ManagementBox; 