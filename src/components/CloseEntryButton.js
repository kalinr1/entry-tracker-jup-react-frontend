import React from "react";
import { useState } from "react";
import CloseEntryForm from "./CloseEntryForm";


function CloseEntryButton({entryId, entryAmount, entryTokenName, entryTotalAmount, entryBoughtWith, entryPrice}){

    const [showForm, setShowForm] = useState();

    const handleShowForm = () => {
        setShowForm(prevShowForm => !prevShowForm);
    }

    const handleCloseFormOnSubmit = () => {
        setShowForm(false);
    }

    const handleCloseForm = (e) => {
        if (e.target.className === "modal"){
            handleShowForm();
        }
    }

    return (
        <div>
            <button onClick={handleShowForm} className="primary-button">Close Entry</button>

            {showForm && (
                <div onClick={handleCloseForm} className={"modal"}>
                    <CloseEntryForm
                        entryId={entryId}
                        entryAmount={entryAmount}
                        entryTokenName={entryTokenName}
                        entryTotalAmount={entryTotalAmount}
                        entryBoughtWith={entryBoughtWith}
                        entryPrice={entryPrice}
                        closeForm={handleShowForm}
                    />
                </div>
            )}
        </div>

    );
}

export default CloseEntryButton;