import React from 'react'; 
import './ProfilePicture.css'; 


function ProfilePicture(props){
    return (
        <div className="ProfilePicture" >
            <img className="profilePictureImg" src={props.src} alt={props.alt}/>
        </div>
    )
}

export default ProfilePicture; 