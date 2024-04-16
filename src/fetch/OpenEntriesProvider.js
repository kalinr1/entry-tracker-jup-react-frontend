import React, { useState, useEffect} from "react";
import OpenEntriesContext from "../context/OpenEntriesContext";

function OpenEntriesProvider({children}){
    const [entries, setEntries] = useState([]);

    const fetchOpenEntries = () => {
        fetch('http://localhost:8080/entry/api/get-all-open-entries')
            .then(response => response.json())
            .then(data => setEntries(data));
    };

    useEffect(() => {
        fetchOpenEntries();
    }, []);

    return (
        <OpenEntriesContext.Provider value={{entries, fetchOpenEntries}}>
            {children}
        </OpenEntriesContext.Provider>
    );
}

export default OpenEntriesProvider;