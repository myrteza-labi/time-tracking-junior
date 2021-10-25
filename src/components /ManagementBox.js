import React from 'react'; 
import './ManagementBox.css'; 
import dotIcon from '../images/icon-ellipsis.svg'; 
import BoxBanner from './BoxBanner'; 
import Activity from './Activity'; 
import Time from './Time'; 
import OldTime from './OldTime'; 

function ManagementBox(props){
    return (
        <div className="ManagementBox" >
            <BoxBanner bannerClassName={props.bannerClassName}/>
            <div className="mainCtnManagement" >
            <div className="activityHoursCtn" >
                <Activity activityTitle={props.activityTitle}/>
                <Time nHours={props.nHours}/>
            </div>
            <div className="imgAndOldDataCtn" >
                <img className="dotIcon" src={dotIcon} alt="3 dots ellips icon" />
                <OldTime lastHour={props.lastHour}/>
            </div>
            </div>
            
        </div>
    )
}

export default ManagementBox; 