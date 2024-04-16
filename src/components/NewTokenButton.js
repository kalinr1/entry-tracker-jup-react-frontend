import React from "react";
import {useNavigate} from "react-router-dom";


function NewTokenButton(){

    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate('/add-new-token')} className="primary-button">New token</button>
        </div>

    );
}

export default NewTokenButton;