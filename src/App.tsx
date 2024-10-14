import React from 'react';
import './App.scss';
import {Header} from "@components/header";
import {Route, Routes} from "react-router-dom";
import {Login} from "@components/login";
import {UserProvider} from "./data/providers/user";
import {LoggedInApp} from "./LoggedInApp";

function App() {
    return (
        <div className="App">
            <UserProvider>
                <Header />
                <div className='app-content'>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/*" element={<LoggedInApp />}/>
                    </Routes>
                </div>
            </UserProvider>
        </div>
    );
}

export default App;
