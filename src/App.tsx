import React from 'react';
import './App.scss';
import {Header} from "@components/header";
import {JobInfo} from "@components/JobInfo/jobInfo";
import {Navigate, Route, Routes} from "react-router-dom";
import {SyncAndFiltersPage} from "@components/syncAndFiltersPage";
import {useMediaQuery} from "react-responsive";
import {Login} from "@components/login";
import {UserProvider} from "./data/providers/user";

function App() {
    //TODO: move to context
    const hasMouse = useMediaQuery({ query: '(any-hover: hover)'});

    return (
        <div className="App">
            <UserProvider>
                <Header />
                <div className='app-content'>
                    <Routes>
                        <Route path="/jobList" element={<JobInfo hasMouse={hasMouse} />} />
                        <Route path="/filters" element={<SyncAndFiltersPage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/" element={<Navigate to="/jobList" replace={true} />}/>
                    </Routes>
                </div>
            </UserProvider>
        </div>
    );
}

export default App;
