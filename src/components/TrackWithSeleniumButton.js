import React from "react";
import { useState } from "react";
import CloseEntryForm from "./CloseEntryForm";


function TrackWithSeleniumButton({entryId}){

    const sendSeleniumPostRequest = (id) => {

        fetch(`http://localhost:8080/test/${id}`, {
            method:'POST',
        })
            .then(response => {
            })
            .catch((error) => {
                console.log(error)
            })
    }


    return (
        <div className={"margin-bottom-05"}>
            <button onClick={() => sendSeleniumPostRequest(entryId)} className="primary-button margin-bottom-05">Track</button>
        </div>

    );
}

export default TrackWithSeleniumButton;