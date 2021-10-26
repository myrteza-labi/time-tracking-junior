import React from 'react'; 
import './TrackingApp.css'; 
import ProfileTimeBox from './ProfileTimeBox'; 
import ManagementBox from './ManagementBox'; 
import data from '../data.json'; 


/*  
    if you want to add more ManagementBox components, make sur that
    you wrap it/them into the "container3Boxes" div, and put a maximum of 
    3 inside any of them. 
*/

function TrackingApp(props){
    return (
        <div className="TrackingApp" >
            <div className="trackingAppMainCtn" >
            <ProfileTimeBox name={"Jeremy"} lastname={"Robson"}/>
            <div className="boxContainer" >

            
                <div className="container3Boxes" >
                    <ManagementBox lastHour={"36"} nHours={"32"} activityTitle={"Work"} bannerClassName={"work"}/>
                    <ManagementBox lastHour={"36"} nHours={"10"} activityTitle={"Play"} bannerClassName={"play"}/>
                    <ManagementBox lastHour={"7"} nHours={"4"} activityTitle={"Study"} bannerClassName={"study"}/>
                </div>

                <div className="container3Boxes" >
                    <ManagementBox lastHour={"5"} nHours={"4"} activityTitle={"Exercice"} bannerClassName={"exercise"}/>
                    <ManagementBox lastHour={"10"} nHours={"5"} activityTitle={"Social"} bannerClassName={"social"}/>
                    <ManagementBox lastHour={"2"} nHours={"2"} activityTitle={"Self Care"} bannerClassName={"selfcare"}/> 
                </div>

            </div>
            </div>
        </div>
    )
}

export default TrackingApp; 