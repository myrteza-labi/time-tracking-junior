import React from 'react'; 
import './ProfileBox.css'; 
import ProfilePicture from './ProfilePicture'; 


function ProfileBox(props){
    return (
        <div className="ProfileBox">
            <ProfilePicture src={props.src} alt={props.alt}/>
            <div className="profileInfos">
                <p className="reportText" >Report for</p>
                <p className="profileName" >{props.name} {props.lastname}</p>
            </div>
        </div>
    )
}

export default ProfileBox; 