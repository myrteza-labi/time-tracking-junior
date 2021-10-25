import React from 'react'; 
import './ProfileBox.css'; 


function ProfileBox(props){
    return (
        <div className="ProfileBox">
            <div className="proflieInfos">
                <p className="reportText" >Report for</p>
                <p className="profileName" ></p>
            </div>
        </div>
    )
}

export default ProfileBox; 