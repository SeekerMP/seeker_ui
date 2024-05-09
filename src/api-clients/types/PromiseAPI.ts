import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { Job } from '../models/Job';
import { JobRequest } from '../models/JobRequest';
import { ServiceState } from '../models/ServiceState';
import { ObservableJobApi } from './ObservableAPI';

import { JobApiRequestFactory, JobApiResponseProcessor} from "../apis/JobApi";
export class PromiseJobApi {
    private api: ObservableJobApi

    public constructor(
        configuration: Configuration,
        requestFactory?: JobApiRequestFactory,
        responseProcessor?: JobApiResponseProcessor
    ) {
        this.api = new ObservableJobApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param jobId 
     * @param pageLength 
     * @param page 
     */
    public jobApplyPostWithHttpInfo(jobId?: number, pageLength?: number, page?: number, _options?: Configuration): Promise<HttpInfo<void | Job>> {
        const result = this.api.jobApplyPostWithHttpInfo(jobId, pageLength, page, _options);
        return result.toPromise();
    }

    /**
     * @param jobId 
     * @param pageLength 
     * @param page 
     */
    public jobApplyPost(jobId?: number, pageLength?: number, page?: number, _options?: Configuration): Promise<void | Job> {
        const result = this.api.jobApplyPost(jobId, pageLength, page, _options);
        return result.toPromise();
    }

    /**
     * @param count 
     * @param offset 
     */
    public jobGetWithHttpInfo(count?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<Array<Job>>> {
        const result = this.api.jobGetWithHttpInfo(count, offset, _options);
        return result.toPromise();
    }

    /**
     * @param count 
     * @param offset 
     */
    public jobGet(count?: number, offset?: number, _options?: Configuration): Promise<Array<Job>> {
        const result = this.api.jobGet(count, offset, _options);
        return result.toPromise();
    }

    /**
     * @param count 
     * @param offset 
     */
    public jobGetAppliedJobsGetWithHttpInfo(count?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<Array<Job>>> {
        const result = this.api.jobGetAppliedJobsGetWithHttpInfo(count, offset, _options);
        return result.toPromise();
    }

    /**
     * @param count 
     * @param offset 
     */
    public jobGetAppliedJobsGet(count?: number, offset?: number, _options?: Configuration): Promise<Array<Job>> {
        const result = this.api.jobGetAppliedJobsGet(count, offset, _options);
        return result.toPromise();
    }

    /**
     * @param count 
     * @param offset 
     */
    public jobGetHiddenJobsGetWithHttpInfo(count?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<Array<Job>>> {
        const result = this.api.jobGetHiddenJobsGetWithHttpInfo(count, offset, _options);
        return result.toPromise();
    }

    /**
     * @param count 
     * @param offset 
     */
    public jobGetHiddenJobsGet(count?: number, offset?: number, _options?: Configuration): Promise<Array<Job>> {
        const result = this.api.jobGetHiddenJobsGet(count, offset, _options);
        return result.toPromise();
    }

    /**
     * @param jobId 
     * @param pageLength 
     * @param page 
     */
    public jobHidePostWithHttpInfo(jobId?: number, pageLength?: number, page?: number, _options?: Configuration): Promise<HttpInfo<void | Job>> {
        const result = this.api.jobHidePostWithHttpInfo(jobId, pageLength, page, _options);
        return result.toPromise();
    }

    /**
     * @param jobId 
     * @param pageLength 
     * @param page 
     */
    public jobHidePost(jobId?: number, pageLength?: number, page?: number, _options?: Configuration): Promise<void | Job> {
        const result = this.api.jobHidePost(jobId, pageLength, page, _options);
        return result.toPromise();
    }

    /**
     */
    public jobRetrieveJobsPostWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.jobRetrieveJobsPostWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public jobRetrieveJobsPost(_options?: Configuration): Promise<void> {
        const result = this.api.jobRetrieveJobsPost(_options);
        return result.toPromise();
    }


}



import { ObservableJobRequestApi } from './ObservableAPI';

import { JobRequestApiRequestFactory, JobRequestApiResponseProcessor} from "../apis/JobRequestApi";
export class PromiseJobRequestApi {
    private api: ObservableJobRequestApi

    public constructor(
        configuration: Configuration,
        requestFactory?: JobRequestApiRequestFactory,
        responseProcessor?: JobRequestApiResponseProcessor
    ) {
        this.api = new ObservableJobRequestApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param request 
     */
    public insertRequestPostWithHttpInfo(request?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.insertRequestPostWithHttpInfo(request, _options);
        return result.toPromise();
    }

    /**
     * @param request 
     */
    public insertRequestPost(request?: string, _options?: Configuration): Promise<void> {
        const result = this.api.insertRequestPost(request, _options);
        return result.toPromise();
    }

    /**
     */
    public jobRequestGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<JobRequest>>> {
        const result = this.api.jobRequestGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public jobRequestGet(_options?: Configuration): Promise<Array<JobRequest>> {
        const result = this.api.jobRequestGet(_options);
        return result.toPromise();
    }


}



import { ObservableServiceStateApi } from './ObservableAPI';

import { ServiceStateApiRequestFactory, ServiceStateApiResponseProcessor} from "../apis/ServiceStateApi";
export class PromiseServiceStateApi {
    private api: ObservableServiceStateApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ServiceStateApiRequestFactory,
        responseProcessor?: ServiceStateApiResponseProcessor
    ) {
        this.api = new ObservableServiceStateApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public serviceStateGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<ServiceState>> {
        const result = this.api.serviceStateGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public serviceStateGet(_options?: Configuration): Promise<ServiceState> {
        const result = this.api.serviceStateGet(_options);
        return result.toPromise();
    }


}



