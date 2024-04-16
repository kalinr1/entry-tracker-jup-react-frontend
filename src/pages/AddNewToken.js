import React from "react";
import BackButton from "../components/BackButton";
import NewTokenForm from "../components/NewTokenForm";
function AddNewToken(){
    return (
        <div>
            <BackButton/>
            <NewTokenForm/>
        </div>
    );
}

export default AddNewToken;