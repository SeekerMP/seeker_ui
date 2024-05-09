import './jobRequestsComponent.scss';
import {configuration} from "../common/common-constants";
import {JobRequest, JobRequestApi} from "../api-clients";
import React, {useEffect, useState} from "react";
import plusIcon from "Assets/plus.svg";

export const JobRequestsComponent = () => {
    const [jobRequests, setJobRequests] = useState<JobRequest[]>([]);
    const [newRequest, setNewRequest] = useState<string>('');
    const api = new JobRequestApi(configuration);

    const fetchJobRequests = () => {
        api.jobRequestGet().then(requestList => {
            setJobRequests(requestList);
        });
    }

    useEffect(() => {
        fetchJobRequests();
    }, []);

    const onInputChange = (event: React.FormEvent<HTMLInputElement>) => {
        setNewRequest(event.currentTarget.value);
    }

    const addNewRequest = () => {
        api.insertRequestPostWithHttpInfo(newRequest).then(() => {
            const newRequests = Object.assign([], jobRequests);
            newRequests.push({text: newRequest});
            setJobRequests(newRequests);

            setNewRequest('');
        });
    }

    return (
        <div className="job-requests-component component-card">
            <div className="job-requests-container">
                {jobRequests.map(request =>
                    <div key={`job-request-${request.id}`} className="job-request">
                        <div>{request.text}</div>
                        <div>{request.lastUpdateDate?.toDateString()}</div>
                    </div>
                )}
            </div>
            <div className="job-requests-add-container">
                <input onChange={onInputChange} value={newRequest ?? ''}/>
                <div className={ `job-requests-add-container-add-button ${ newRequest === '' ? 'disabled' : '' }` }
                     onClick={addNewRequest}>
                    <img src={plusIcon}/>
                </div>
            </div>
        </div>
    )
}