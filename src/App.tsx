import React, {useEffect} from 'react';
import './App.scss';
import {ServiceStateApi} from "./api-clients";
import {configuration} from "@common/common-constants";
import {serviceStateService} from "@common/serviceState";
import {Header} from "@components/header";
import {JobInfo} from "@components/JobInfo/jobInfo";
import {Navigate, Route, Routes} from "react-router-dom";
import {SyncAndFiltersPage} from "@components/syncAndFiltersPage";
import {useMediaQuery} from "react-responsive";

function App() {
    useEffect(() => {
        const stateApiClient = new ServiceStateApi(configuration);

        stateApiClient.serviceStateGet().then((state) => {
            serviceStateService.init(state);
        });
    },[]);

    //TODO: move to context
    const hasMouse = useMediaQuery({ query: '(any-hover: hover)'});

    return (
        <div className="App">
            <Header />
            <div className='app-content'>
                <Routes>
                    <Route path="/jobList" element={<JobInfo hasMouse={hasMouse} />} />
                    <Route path="/filters" element={<SyncAndFiltersPage />} />
                    <Route path="/" element={<Navigate to="/jobList" replace={true} />}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
