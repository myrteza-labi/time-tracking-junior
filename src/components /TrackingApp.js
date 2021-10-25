import React from 'react'; 
import './TrackingApp.css'; 
import ProfileTimeBox from './ProfileTimeBox'; 
import ManagementBox from './ManagementBox'; 
import data from '../data.json'; 


function TrackingApp(props){
    return (
        <div className="TrackingApp" >
            <ProfileTimeBox name={"Jeremy"} lastname={"Robson"}/>
            <div className="boxContainer" >
                <ManagementBox lastHour={"36"} nHours={"32"} activityTitle={"Work"} bannerClassName={"work"}/>
                <ManagementBox lastHour={"36"} nHours={"10"} activityTitle={"Play"} bannerClassName={"play"}/>
                <ManagementBox lastHour={"7"} nHours={"4"} activityTitle={"Study"} bannerClassName={"study"}/>
                <ManagementBox lastHour={"5"} nHours={"4"} activityTitle={"Exercice"} bannerClassName={"exercise"}/>
                <ManagementBox lastHour={"10"} nHours={"5"} activityTitle={"Social"} bannerClassName={"social"}/>
                <ManagementBox lastHour={"2"} nHours={"2"} activityTitle={"Self Care"} bannerClassName={"selfcare"}/>
            </div>
        </div>
    )
}

export default TrackingApp; 