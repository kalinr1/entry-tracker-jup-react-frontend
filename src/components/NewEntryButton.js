import React from "react";
import {useNavigate} from "react-router-dom";


function NewEntryButton(){

    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate('/add-new-entry')} className="primary-button">New entry</button>
        </div>

    );
}

export default NewEntryButton;