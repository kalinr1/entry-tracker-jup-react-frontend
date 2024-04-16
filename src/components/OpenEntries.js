import React, {useContext} from "react";
import { useState, useEffect} from "react";
import CloseEntryButton from "./CloseEntryButton";
import OpenEntriesContext from "../context/OpenEntriesContext";
import TrackWithSeleniumButton from "./TrackWithSeleniumButton";

function OpenEntries(){

    const { entries } = useContext(OpenEntriesContext);

    // const [entries, setEntries] = useState([]);
    //
    // useEffect(() => {
    //     fetch('http://localhost:8080/entry/api/get-all-open-entries')
    //         .then(response => response.json())
    //         .then(data => setEntries(data));
    // }, []);


    return (
            <div  className="Open-entries-main-div">

                <h1>Open Entries</h1>

                <div className="Open-entries">

                    {entries.map(entry => (

                        <div key={entry.id} className="entry1">
                            <h3>{entry.tokenName}</h3>
                            <div className="div1">
                                <div>Amount: </div>
                                <div className="d-flex flex-gap-025">
                                    <div>{entry.tokenAmount}</div>
                                    <div>{entry.tokenName}</div>
                                </div>
                            </div>
                            <div className="div1">
                                <div>Total Entry: </div>
                                <div className="d-flex flex-gap-025">
                                    <div>{entry.totalEntryAmount}</div>
                                    <div>{entry.boughtWith}</div>
                                </div>
                            </div>
                            <div className="div1">
                                <div>Entry price: </div>
                                <div>{entry.entryPrice}$</div>
                            </div>
                            <div className="potential-exit">
                                <div>Potential exit:</div>
                                <div>123USDC</div>
                            </div>

                            <div className={"margin-bottom-05"}>
                                <a href={entry.tokengraphUrl} target={"_blank"} rel="noopener noreferrer">
                                    <button className="tradingview-button"></button>
                                </a>
                            </div>

                            <div className={"margin-bottom-05"}>
                                <a href={entry.exchangeUrl} target={"_blank"} rel="noopener noreferrer">
                                    <button className="primary-button margin-bottom-05">Exchange</button>
                                </a>
                            </div>



                            <div className={"margin-bottom-05"}>
                                <TrackWithSeleniumButton entryId={entry.id}>
                                </TrackWithSeleniumButton>
                            </div>

                            <div className={"margin-bottom-05"}>
                                <CloseEntryButton
                                    entryId={entry.id}
                                    entryAmount={entry.tokenAmount}
                                    entryTokenName={entry.tokenName}
                                    entryTotalAmount={entry.totalEntryAmount}
                                    entryBoughtWith={entry.boughtWith}
                                    entryPrice={entry.entryPrice}
                                />
                            </div>
                        </div>
                    ))}

                </div>
            </div>
    );
}

export default OpenEntries;