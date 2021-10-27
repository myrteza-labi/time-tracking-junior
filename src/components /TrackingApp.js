import React from 'react'; 
import './TrackingApp.css'; 
import ProfileTimeBox from './ProfileTimeBox'; 
import ManagementBox from './ManagementBox'; 


/*  
    if you want to add more ManagementBox components, make sur that
    you wrap it/them into the "container3Boxes" div, and put a maximum of 
    3 inside any of them. 
*/

class  TrackingApp extends React.Component{
    constructor(props){
        super(props); 
        this.state ={
            timeframes: "daily", 
            activeScale : 0, 
        }
        this.handleScaleClick = this.handleScaleClick.bind(this); 
        this.setActiveScale = this.setActiveScale.bind(this); 

    }

    handleScaleClick(e){
        this.getScaleNumber(e)
        this.setActiveScale(e)
        let newTimeframesUpper = e.target.innerHTML; 
        let newTimeframesLower = newTimeframesUpper.toLowerCase(); 
        this.setState({
            timeframes : newTimeframesLower, 
        })
    }

    getScaleNumber(e){
        let scaleNumber = e.target.getAttribute("number")
        return scaleNumber; 
    }

    setActiveScale(e){
        this.setState({
            activeScale : this.getScaleNumber(e)
        })
    }
    


    

    render(){

        const timeframes = this.state.timeframes; 
        const activeScale = this.state.activeScale; 

        return (
            <div className="TrackingApp" onClick={this.handleClick}>
                <div className="trackingAppMainCtn" >
                <ProfileTimeBox onScaleClick={this.handleScaleClick} activeScale={activeScale} name={"Jeremy"} lastname={"Robson"}/>
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

/* scaleTitle */