import React from 'react'; 
import './ScaleBox.css'; 
import Scale from './Scale'; 


function ScaleBox(props){
    return (
        <div className="ScaleBox" >
            <Scale scaleTitle={"Daily"}/>
            <Scale scaleTitle={"Weekly"}/>
            <Scale scaleTitle={"Monthly"}/>
        </div>
    )
}

export default ScaleBox; 