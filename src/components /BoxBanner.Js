import React from 'react'; 
import './BoxBanner.css'; 

function BoxBanner(props){
    return (
        <div className={"BoxBanner " + props.bannerClassName}  ></div>
    )
}

export default BoxBanner; 