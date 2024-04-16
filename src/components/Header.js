import React from "react";
import NewEntryButton from "./NewEntryButton";
import NewTokenButton from "./NewTokenButton";

function Header(){
    return (
        <header className="App-header">
            <h1>SHORT TERM TRADING APP</h1>
            <div className="d-flex flex-gap-1">
                <NewTokenButton/>
                <NewEntryButton/>
            </div>
        </header>

    );
}

export default Header;