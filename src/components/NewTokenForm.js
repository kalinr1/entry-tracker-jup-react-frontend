import {useState} from "react";
import {useNavigate} from "react-router-dom";

function NewTokenForm() {

    const navigate = useNavigate();

    const [formState, setFormState] = useState({
        name: '',
        address: '',
        graphUrl: '',
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

        fetch('http://localhost:8080/token/api/add-new-token', {
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
                    Address
                    <input name="address" placeholder={"address"} onChange={handleChange}/>
                    {formState.errors.address && <div className="input-error"> {formState.errors.address}</div> }
                </div>
                <div className="d-flex flex-direction-column">
                    Graph Url
                    <input name="graphUrl" placeholder={"url"} onChange={handleChange}/>
                    {formState.errors.graphUrl && <div className="input-error"> {formState.errors.graphUrl}</div> }

                </div>

                <button className="primary-button" type="submit">Add token</button>
            </form>
        </div>

    );
}

export default NewTokenForm;