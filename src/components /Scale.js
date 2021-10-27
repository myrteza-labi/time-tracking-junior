import React from 'react'; 
import './Scale.css'; 


function Scale(props){
    return (
        <div className="Scale" >
            <p onClick={props.onClick} number={props.number} className={props.className} >{props.scaleTitle}</p>
        </div>
    )
}

export default Scale; 