import './App.css';
import Header from './components/Header'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import AddNewEntry from './pages/AddNewEntry'
import OpenEntries from "./components/OpenEntries";
import BackButton from "./components/BackButton";
import AddNewToken from "./pages/AddNewToken";
import OpenEntriesProvider from "./fetch/OpenEntriesProvider";

function App() {
  return (
    <div className="App">


        <BrowserRouter>

            <Header/>

            <Routes>
                <Route path="/"
                       element={
                    <OpenEntriesProvider>
                        <OpenEntries/>
                    </OpenEntriesProvider>
                }
                >

                </Route>

                <Route path="/add-new-entry"
                       element={<AddNewEntry />}>

                </Route>

                <Route path="/add-new-token"
                       element={<AddNewToken />}>

                </Route>
            </Routes>
        </BrowserRouter>


    </div>
  );
}

export default App;
