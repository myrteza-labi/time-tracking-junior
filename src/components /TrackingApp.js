import React from 'react'; 
import './TrackingApp.css'; 
import ProfileTimeBox from './ProfileTimeBox'; 
import ManagementBox from './ManagementBox'; 
import jsonData from '../data.json'; 


/*  
    if you want to add more ManagementBox components, make sur that
    you wrap it/them into the "container3Boxes" div, and put a maximum of 
    3 inside any of them. 
*/

class  TrackingApp extends React.Component{
    constructor(props){
        super(props); 
        this.state ={
            data : jsonData, /* a supprimer */ 
            timeframes: "daily", 
        }
        this.handleClick = this.handleClick.bind(this); 
    }

    handleClick(){
        console.log(this.state.data[0]); 
    }
    render(){

        const data = this.state.data; 
        const timeframes = this.state.timeframes; 

        return (
            <div className="TrackingApp" onClick={this.handleClick}>
                <div className="trackingAppMainCtn" >
                <ProfileTimeBox name={"Jeremy"} lastname={"Robson"}/>
                <div className="boxContainer" >
    
                
                    <div className="container3Boxes" >
                        <ManagementBox number={0} timeframes={timeframes} bannerClassName={"work"}/>
                        <ManagementBox number={1} timeframes={timeframes} bannerClassName={"play"}/>
                        <ManagementBox number={2} timeframes={timeframes} bannerClassName={"study"}/>
                    </div>
    
                    <div className="container3Boxes" >
                        <ManagementBox number={3} timeframes={timeframes} bannerClassName={"exercise"}/>
                        <ManagementBox number={4} timeframes={timeframes} bannerClassName={"social"}/>
                        <ManagementBox number={5} timeframes={timeframes} bannerClassName={"selfcare"}/> 
                    </div>
    
                </div>
                </div>
            </div>
        )
    }
}

export default TrackingApp; 