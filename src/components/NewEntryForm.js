import {useState} from "react";
import {useNavigate} from "react-router-dom";

function NewEntryForm() {

    const navigate = useNavigate();

    const [formState, setFormState] = useState({
        name: '',
        tokenAmount: '',
        boughtWith: '',
        totalEntryAmount: '',
        entryPrice: '',
        tokenTx: '',
        exchangeUrl: '',
        errors: {}
    });

    const handleChange = (event) => {

        let value = event.target.value;

        if (event.target.name === 'tokenAmount'){
            value = value.replace(/,/g, '');
        }

        setFormState({
            ...formState,
            [event.target.name]: value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(formState);

        fetch('http://localhost:8080/entry/api/add-new-entry', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formState)
        })
            .then(response => {
                if (response.ok){
                    navigate("/");
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
        <div className="new-entry-form-div">
            <form className="d-flex flex-direction-column flex-gap-1" onSubmit={handleSubmit}>
                {/*<div>*/}
                {/*    Token*/}
                {/*    <select name="name" onChange={handleChange} placeholder={"token name"} className="d-flex flex-direction-column width-100">*/}
                {/*        Token*/}
                {/*        <option value="">-token name-</option>*/}
                {/*        <option value="CFX">CFX</option>*/}
                {/*        <option value="FLUX">FLUX</option>*/}
                {/*    </select>*/}
                {/*    {formState.errors.name && <div className="input-error">{formState.errors.name}</div> }*/}
                {/*</div>*/}

                <div>
                    Token
                    <input name="name" onChange={handleChange} placeholder={"token name"} className="d-flex flex-direction-column width-100"/>
                    {formState.errors.name && <div className="input-error">{formState.errors.name}</div> }
                </div>


                <div className="d-flex flex-direction-column">
                    Amount
                    <input name="tokenAmount" placeholder={"amount of tokens received"} onChange={handleChange}/>
                    {formState.errors.tokenAmount && <div className="input-error"> {formState.errors.tokenAmount}</div> }
                </div>
                <div className="d-flex flex-direction-column">
                    Bought with
                    <input name="boughtWith" placeholder={"token name"} onChange={handleChange}/>
                    {formState.errors.boughtWith && <div className="input-error"> {formState.errors.boughtWith}</div> }

                </div>
                <div className="d-flex flex-direction-column">
                    Total Entry
                    <input name="totalEntryAmount" placeholder={"amount of tokens swapped"} onChange={handleChange}/>
                    {formState.errors.totalEntryAmount && <div className="input-error"> {formState.errors.totalEntryAmount}</div> }
                </div>

                <div className="d-flex flex-direction-column">
                    Entry price
                    <input name="entryPrice" placeholder={"$"} onChange={handleChange}/>
                    {formState.errors.entryPrice && <div className="input-error"> {formState.errors.entryPrice}</div> }
                </div>

                <div className="d-flex flex-direction-column">
                    Token tx
                    <input name="tokenTx" placeholder={"tx"} onChange={handleChange}/>

                </div>

                <div className="d-flex flex-direction-column">
                    Exchange
                    <input name="exchangeUrl" placeholder={"url"} onChange={handleChange}/>

                </div>


                <button className="primary-button" type="submit">Add entry</button>
            </form>
        </div>

    );
}

export default NewEntryForm;