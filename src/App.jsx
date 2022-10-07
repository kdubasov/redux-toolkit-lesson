import React from 'react';
import {Badge} from "react-bootstrap";
import InputsStateChange from "./components/InputsStateChange";
import ToDo from "./components/ToDo";
import GetJSON from "./components/GetJSON";

const App = () => {
    return (
        <div className={'container py-5'}>
            <h2><Badge>Redux-toolkit lesson</Badge></h2>

            <InputsStateChange />

            <ToDo />

            <GetJSON />
        </div>
    );
};

export default App;
