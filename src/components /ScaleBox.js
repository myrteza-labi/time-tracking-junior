import React from 'react'; 
import './ScaleBox.css'; 
import Scale from './Scale'; 


function ScaleBox(props){

    const activeScaleNumber = props.activeScale; 

    let scalesClasseName = [
        "scaleTitle","scaleTitle","scaleTitle"
    ]

    function getCurrentActiveScale(){
        scalesClasseName[activeScaleNumber] = "scaleTitle scaleTitleActive"; 
        return scalesClasseName; 
    }

    let newArrayOfClssName = getCurrentActiveScale(); 


    return (
        <div className="ScaleBox" >
            <Scale  className={newArrayOfClssName[0]} number={0} onClick={props.onScaleClick} scaleTitle={"Daily"}/>
            <Scale  className={newArrayOfClssName[1]} number={1} onClick={props.onScaleClick}scaleTitle={"Weekly"}/>
            <Scale  className={newArrayOfClssName[2]} number={2} onClick={props.onScaleClick} scaleTitle={"Monthly"}/>
        </div>
    )
}

export default ScaleBox; 

