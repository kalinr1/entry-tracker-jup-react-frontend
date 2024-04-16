import React from "react";
import NewEntryForm from "../components/NewEntryForm";
import BackButton from "../components/BackButton";
function AddNewEntry(){
    return (
        <div>
            <BackButton/>
            <NewEntryForm/>
        </div>
    );
}

export default AddNewEntry;