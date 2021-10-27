import React from 'react'; 
import './ManagementBox.css'; 
import dotIcon from '../images/icon-ellipsis.svg'; 
import BoxBanner from './BoxBanner'; 
import Activity from './Activity'; 
import Time from './Time'; 
import OldTime from './OldTime'; 
import jsonData from '../data.json'; 

class ManagementBox extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
            data : jsonData, 
        }
    }
    render(){

        const data = jsonData; 
        let number = this.props.number; 
        let title = data[number].title
        let timeFrames = this.props.timeframes; 
        let ArrayOfTimeframes = data[number].timeframes; 
        let currentTimeFrames = ArrayOfTimeframes[timeFrames];  
        let currentTime = currentTimeFrames.current; 
        let previousTime = currentTimeFrames.previous; 

        return (
            <div className="ManagementBox" number={this.props.number}>
                <BoxBanner bannerClassName={this.props.bannerClassName}/>
                <div className="mainCtnManagement" >
                <div className="activityHoursCtn" >
                    <Activity activityTitle={title}/>
                    <Time nHours={currentTime}/>
                </div>
                <div className="imgAndOldDataCtn" >
                    <img className="dotIcon" src={dotIcon} alt="3 dots ellips icon" />
                    <OldTime lastHour={previousTime}/>
                </div>
                </div>
                
            </div>
        )
    }
    
}

export default ManagementBox; 