import React, {useEffect, useState} from 'react';
import './App.scss';
import {JobsContainerComponent} from "./components/jobsContainerComponent";
import {FilterApi, JobFilterType, ServiceStateApi} from "./api-clients";
import {configuration} from "./common/common-constants";
import {serviceStateService} from "./common/serviceState";
import {JobRequestsComponent} from "./components/jobRequestsComponent";
import {JobRepresentationComponent} from "./components/JobRepresentationComponent";
import {LocalSeekJob} from "./models/LocalSeekJob";
import {FilterComponent} from "./components/filterComponent";

function App() {
    const [selectedJob, setSelectedJob] = useState<LocalSeekJob | undefined>(undefined);
    const [importantFilters, setImportantFilters] = useState<string[]>([]);

    const selectJob = (job: LocalSeekJob | undefined) => {
        setSelectedJob(job);
    }

    const filterApiClient = new FilterApi(configuration);

    useEffect(() => {
        const stateApiClient = new ServiceStateApi(configuration);

        stateApiClient.serviceStateGet().then((state) => {
            serviceStateService.init(state);
        });

        filterApiClient.filterGetAllFiltersGet().then(filters => {
            const importantFilters: string[] = [];

            filters.forEach(filter => {
                switch (filter.type) {
                    case JobFilterType.NUMBER_0:
                        importantFilters.push(filter.text ?? '');
                }
            })

            setImportantFilters(importantFilters);
        });
    },[]);

    const addNewFilter = (text: string, type: JobFilterType) => {
        filterApiClient.filterAddFilterPost(text, type).then(_ => {
           const filters = Object.assign([], importantFilters);
           filters.push(text);

           setImportantFilters(filters);
        });
    }

    return (
        <div className="App">
            <JobsContainerComponent selectJob={selectJob} selectedJobId={selectedJob?.id}/>
            <div className="right-panel">
                <JobRequestsComponent />
                <JobRepresentationComponent job={selectedJob} />
            </div>
            <div className="filter-panel component-card">
                <FilterComponent
                    filters={importantFilters}
                    title="Important"
                    addNewFilter={addNewFilter}
                    type={JobFilterType.NUMBER_0}
                />
            </div>
        </div>
    );
}

export default App;
