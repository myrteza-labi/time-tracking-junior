import React from 'react'; 
import './Scale.css'; 


function Scale(props){
    return (
        <div className="Scale" >
            <p className="scaleTitle" >{props.scaleTitle}</p>
        </div>
    )
}

export default Scale; 