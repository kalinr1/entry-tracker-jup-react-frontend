import React, {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import OpenEntriesContext from "../context/OpenEntriesContext";

function CloseEntryForm({entryId, entryAmount, entryTotalAmount, entryTokenName, entryBoughtWith, entryPrice, closeForm}) {

    const navigate = useNavigate();

    const { fetchOpenEntries } = useContext(OpenEntriesContext);

    const [formState, setFormState] = useState({
        id: entryId,
        totalExitAmount: '',
        exitPrice: '',
        errors: {}
    });

    const handleChange = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(formState);

        fetch('http://localhost:8080/entry/api/close-entry', {
            method:'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formState)
        })
            .then(response => {
                if (response.ok){
                    closeForm();
                    fetchOpenEntries();
                }
                else {
                    return response.json().then(errorMap => {
                        setFormState({
                            ...formState,
                            errors: errorMap
                        });
                    })
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className="close-entry-form">
            <div className="margin-bottom-1">
                <h4>Closing Entry {entryId}</h4>

                <div className="div1">
                    <div>Amount: </div>
                    <div className="d-flex flex-gap-025">
                        <div>{entryAmount}</div>
                        <div>{entryTokenName}</div>
                    </div>
                </div>
                <div className="div1">
                    <div>Total Entry: </div>
                    <div className="d-flex flex-gap-025">
                        <div>{entryTotalAmount}</div>
                        <div>{entryBoughtWith}</div>
                    </div>
                </div>
                <div className="div1">
                    <div>Entry price: </div>
                    <div>{entryPrice}$</div>
                </div>
            </div>

            <form className="d-flex flex-direction-column flex-gap-1" onSubmit={handleSubmit}>
                <div>
                    Exit price
                    <input name="exitPrice" onChange={handleChange} placeholder={"$"} className="d-flex flex-direction-column width-100"/>
                    {formState.errors.exitPrice && <div className="input-error">{formState.errors.exitPrice}</div> }
                </div>


                <div className="d-flex flex-direction-column">
                    Total Exit {entryBoughtWith}
                    <input name="totalExitAmount" placeholder={"amount of tokens received"} onChange={handleChange}/>
                    {formState.errors.totalExitAmount && <div className="input-error"> {formState.errors.totalExitAmount}</div> }
                </div>
                <button className="primary-button" type="submit">Close Entry</button>
            </form>
        </div>

    );
}

export default CloseEntryForm;