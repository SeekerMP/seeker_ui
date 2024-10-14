import {configuration} from "../../common/common-constants";
import {JobApi, ServiceStateApi, SyncState} from "../../api-clients";
import React, {useEffect, useState} from "react";
import {SyncStateResultContainer} from "./syncStateResultContainer";
import './syncStateComponent.scss';
import {SyncStateProgressContainer} from "./syncStateProgressContainer";

export const SyncStateComponent = () => {
    const jobApiClient = new JobApi(configuration);
    const [syncInProgress, setSyncInProgress] = useState<boolean>(false);
    const [syncState, setSyncState] = useState<SyncState>(new SyncState());

    const updateAllRequests = () => {
        jobApiClient.jobRetrieveJobsPost();
    }

    useEffect(() => {
    }, []);

    return (
        <div className='sync-state-container'>
            { syncInProgress && syncState != null ?
            <SyncStateProgressContainer state={syncState}/> :
            <SyncStateResultContainer
                state={syncState}
                updateAllRequests={updateAllRequests} />
            }
        </div>
    )
}
