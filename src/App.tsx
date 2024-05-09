import React, {useEffect, useState} from 'react';
import './App.scss';
import {JobsContainerComponent} from "./components/jobsContainerComponent";
import {ServiceStateApi} from "./api-clients";
import {configuration} from "./common/common-constants";
import {serviceStateService} from "./common/serviceState";
import {JobRequestsComponent} from "./components/jobRequestsComponent";
import {JobRepresentationComponent} from "./components/JobRepresentationComponent";
import {LocalSeekJob} from "./models/LocalSeekJob";

function App() {
    const [selectedJob, setSelectedJob] = useState<LocalSeekJob | undefined>(undefined);

    const selectJob = (job: LocalSeekJob | undefined) => {
        setSelectedJob(job);
    }

    useEffect(() => {
        const apiClient = new ServiceStateApi(configuration);
        apiClient.serviceStateGet().then((state) => {
            serviceStateService.init(state);
        });
    },[]);

    return (
        <div className="App">
            <JobsContainerComponent selectJob={selectJob} selectedJobId={selectedJob?.id}/>
            <div className="right-panel">
                <JobRequestsComponent />
                <JobRepresentationComponent job={selectedJob} />
            </div>
        </div>
    );
}

export default App;
