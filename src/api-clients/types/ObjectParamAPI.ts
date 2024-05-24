import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { Job } from '../models/Job';
import { JobFilter } from '../models/JobFilter';
import { JobMoveResponse } from '../models/JobMoveResponse';
import { JobRequest } from '../models/JobRequest';
import { JobRequestResponse } from '../models/JobRequestResponse';
import { SyncState } from '../models/SyncState';

import { ObservableFilterApi } from "./ObservableAPI";
import { FilterApiRequestFactory, FilterApiResponseProcessor} from "../apis/FilterApi";

export interface FilterApiFilterAddFilterPostRequest {
    /**
     * 
     * @type string
     * @memberof FilterApifilterAddFilterPost
     */
    text?: string
    /**
     * 
     * @type &#39;None&#39; | &#39;Important&#39; | &#39;AutoIgnore&#39; | &#39;Hidden&#39; | &#39;Applied&#39;
     * @memberof FilterApifilterAddFilterPost
     */
    type?: 'None' | 'Important' | 'AutoIgnore' | 'Hidden' | 'Applied'
    /**
     * 
     * @type &#39;Content&#39; | &#39;Title&#39;
     * @memberof FilterApifilterAddFilterPost
     */
    subtype?: 'Content' | 'Title'
}

export interface FilterApiFilterGetAllFiltersGetRequest {
}

export class ObjectFilterApi {
    private api: ObservableFilterApi

    public constructor(configuration: Configuration, requestFactory?: FilterApiRequestFactory, responseProcessor?: FilterApiResponseProcessor) {
        this.api = new ObservableFilterApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public filterAddFilterPostWithHttpInfo(param: FilterApiFilterAddFilterPostRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.filterAddFilterPostWithHttpInfo(param.text, param.type, param.subtype,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public filterAddFilterPost(param: FilterApiFilterAddFilterPostRequest = {}, options?: Configuration): Promise<void> {
        return this.api.filterAddFilterPost(param.text, param.type, param.subtype,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public filterGetAllFiltersGetWithHttpInfo(param: FilterApiFilterGetAllFiltersGetRequest = {}, options?: Configuration): Promise<HttpInfo<Array<JobFilter>>> {
        return this.api.filterGetAllFiltersGetWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public filterGetAllFiltersGet(param: FilterApiFilterGetAllFiltersGetRequest = {}, options?: Configuration): Promise<Array<JobFilter>> {
        return this.api.filterGetAllFiltersGet( options).toPromise();
    }

}

import { ObservableJobApi } from "./ObservableAPI";
import { JobApiRequestFactory, JobApiResponseProcessor} from "../apis/JobApi";

export interface JobApiJobApplyPostRequest {
    /**
     * 
     * @type number
     * @memberof JobApijobApplyPost
     */
    jobId?: number
    /**
     * 
     * @type number
     * @memberof JobApijobApplyPost
     */
    pageLength?: number
    /**
     * 
     * @type number
     * @memberof JobApijobApplyPost
     */
    page?: number
    /**
     * 
     * @type &#39;None&#39; | &#39;Important&#39; | &#39;AutoIgnore&#39; | &#39;Hidden&#39; | &#39;Applied&#39;
     * @memberof JobApijobApplyPost
     */
    filter?: 'None' | 'Important' | 'AutoIgnore' | 'Hidden' | 'Applied'
}

export interface JobApiJobGetRequest {
    /**
     * 
     * @type number
     * @memberof JobApijobGet
     */
    count?: number
    /**
     * 
     * @type number
     * @memberof JobApijobGet
     */
    offset?: number
    /**
     * 
     * @type &#39;None&#39; | &#39;Important&#39; | &#39;AutoIgnore&#39; | &#39;Hidden&#39; | &#39;Applied&#39;
     * @memberof JobApijobGet
     */
    filter?: 'None' | 'Important' | 'AutoIgnore' | 'Hidden' | 'Applied'
}

export interface JobApiJobHidePostRequest {
    /**
     * 
     * @type number
     * @memberof JobApijobHidePost
     */
    jobId?: number
    /**
     * 
     * @type number
     * @memberof JobApijobHidePost
     */
    pageLength?: number
    /**
     * 
     * @type number
     * @memberof JobApijobHidePost
     */
    page?: number
    /**
     * 
     * @type &#39;None&#39; | &#39;Important&#39; | &#39;AutoIgnore&#39; | &#39;Hidden&#39; | &#39;Applied&#39;
     * @memberof JobApijobHidePost
     */
    filter?: 'None' | 'Important' | 'AutoIgnore' | 'Hidden' | 'Applied'
}

export interface JobApiJobRetrieveJobsPostRequest {
}

export class ObjectJobApi {
    private api: ObservableJobApi

    public constructor(configuration: Configuration, requestFactory?: JobApiRequestFactory, responseProcessor?: JobApiResponseProcessor) {
        this.api = new ObservableJobApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public jobApplyPostWithHttpInfo(param: JobApiJobApplyPostRequest = {}, options?: Configuration): Promise<HttpInfo<JobMoveResponse>> {
        return this.api.jobApplyPostWithHttpInfo(param.jobId, param.pageLength, param.page, param.filter,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public jobApplyPost(param: JobApiJobApplyPostRequest = {}, options?: Configuration): Promise<JobMoveResponse> {
        return this.api.jobApplyPost(param.jobId, param.pageLength, param.page, param.filter,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public jobGetWithHttpInfo(param: JobApiJobGetRequest = {}, options?: Configuration): Promise<HttpInfo<JobRequestResponse>> {
        return this.api.jobGetWithHttpInfo(param.count, param.offset, param.filter,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public jobGet(param: JobApiJobGetRequest = {}, options?: Configuration): Promise<JobRequestResponse> {
        return this.api.jobGet(param.count, param.offset, param.filter,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public jobHidePostWithHttpInfo(param: JobApiJobHidePostRequest = {}, options?: Configuration): Promise<HttpInfo<JobMoveResponse>> {
        return this.api.jobHidePostWithHttpInfo(param.jobId, param.pageLength, param.page, param.filter,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public jobHidePost(param: JobApiJobHidePostRequest = {}, options?: Configuration): Promise<JobMoveResponse> {
        return this.api.jobHidePost(param.jobId, param.pageLength, param.page, param.filter,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public jobRetrieveJobsPostWithHttpInfo(param: JobApiJobRetrieveJobsPostRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.jobRetrieveJobsPostWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public jobRetrieveJobsPost(param: JobApiJobRetrieveJobsPostRequest = {}, options?: Configuration): Promise<void> {
        return this.api.jobRetrieveJobsPost( options).toPromise();
    }

}

import { ObservableJobRequestApi } from "./ObservableAPI";
import { JobRequestApiRequestFactory, JobRequestApiResponseProcessor} from "../apis/JobRequestApi";

export interface JobRequestApiInsertRequestPostRequest {
    /**
     * 
     * @type string
     * @memberof JobRequestApiinsertRequestPost
     */
    request?: string
}

export interface JobRequestApiJobRequestGetRequest {
}

export class ObjectJobRequestApi {
    private api: ObservableJobRequestApi

    public constructor(configuration: Configuration, requestFactory?: JobRequestApiRequestFactory, responseProcessor?: JobRequestApiResponseProcessor) {
        this.api = new ObservableJobRequestApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public insertRequestPostWithHttpInfo(param: JobRequestApiInsertRequestPostRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.insertRequestPostWithHttpInfo(param.request,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public insertRequestPost(param: JobRequestApiInsertRequestPostRequest = {}, options?: Configuration): Promise<void> {
        return this.api.insertRequestPost(param.request,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public jobRequestGetWithHttpInfo(param: JobRequestApiJobRequestGetRequest = {}, options?: Configuration): Promise<HttpInfo<Array<JobRequest>>> {
        return this.api.jobRequestGetWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public jobRequestGet(param: JobRequestApiJobRequestGetRequest = {}, options?: Configuration): Promise<Array<JobRequest>> {
        return this.api.jobRequestGet( options).toPromise();
    }

}

import { ObservableServiceStateApi } from "./ObservableAPI";
import { ServiceStateApiRequestFactory, ServiceStateApiResponseProcessor} from "../apis/ServiceStateApi";

export interface ServiceStateApiServiceStateGetRequest {
}

export class ObjectServiceStateApi {
    private api: ObservableServiceStateApi

    public constructor(configuration: Configuration, requestFactory?: ServiceStateApiRequestFactory, responseProcessor?: ServiceStateApiResponseProcessor) {
        this.api = new ObservableServiceStateApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public serviceStateGetWithHttpInfo(param: ServiceStateApiServiceStateGetRequest = {}, options?: Configuration): Promise<HttpInfo<SyncState>> {
        return this.api.serviceStateGetWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public serviceStateGet(param: ServiceStateApiServiceStateGetRequest = {}, options?: Configuration): Promise<SyncState> {
        return this.api.serviceStateGet( options).toPromise();
    }

}
