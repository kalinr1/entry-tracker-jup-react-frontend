import React from "react";
import {useNavigate} from "react-router-dom";


function BackButton(){

    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate('/')} className="back-button">Close</button>
        </div>

    );
}

export default BackButton;