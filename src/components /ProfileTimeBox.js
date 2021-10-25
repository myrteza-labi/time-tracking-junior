import React from 'react'; 
import './ProfileTimeBox.css'; 
import ProfileBox from './ProfileBox'; 
import ScaleBox from './ScaleBox'; 
import profilePicture from '../images/image-jeremy.png'; 


function ProfileTimeBox(props){
    return (
        <div className="ProfileTimeBox" >
            <ProfileBox src={profilePicture} alt={"photo de Jeremy Robson "} name={props.name} lastname={props.lastname}/>
            <ScaleBox/>
        </div>
    )
}

export default ProfileTimeBox; 