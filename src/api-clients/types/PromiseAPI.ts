import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { Job } from '../models/Job';
import { JobFilter } from '../models/JobFilter';
import { JobMoveResponse } from '../models/JobMoveResponse';
import { JobRequest } from '../models/JobRequest';
import { JobRequestResponse } from '../models/JobRequestResponse';
import { ProblemDetails } from '../models/ProblemDetails';
import { SyncState } from '../models/SyncState';
import { User } from '../models/User';
import { ObservableAccountApi } from './ObservableAPI';

import { AccountApiRequestFactory, AccountApiResponseProcessor} from "../apis/AccountApi";
export class PromiseAccountApi {
    private api: ObservableAccountApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountApiRequestFactory,
        responseProcessor?: AccountApiResponseProcessor
    ) {
        this.api = new ObservableAccountApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public accountUserInfoGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.accountUserInfoGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public accountUserInfoGet(_options?: Configuration): Promise<User> {
        const result = this.api.accountUserInfoGet(_options);
        return result.toPromise();
    }


}



import { ObservableAuthorizationApi } from './ObservableAPI';

import { AuthorizationApiRequestFactory, AuthorizationApiResponseProcessor} from "../apis/AuthorizationApi";
export class PromiseAuthorizationApi {
    private api: ObservableAuthorizationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthorizationApiRequestFactory,
        responseProcessor?: AuthorizationApiResponseProcessor
    ) {
        this.api = new ObservableAuthorizationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param token 
     */
    public authorizationGoogleSignInPostWithHttpInfo(token?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authorizationGoogleSignInPostWithHttpInfo(token, _options);
        return result.toPromise();
    }

    /**
     * @param token 
     */
    public authorizationGoogleSignInPost(token?: string, _options?: Configuration): Promise<void> {
        const result = this.api.authorizationGoogleSignInPost(token, _options);
        return result.toPromise();
    }

    /**
     */
    public authorizationLogoutPostWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authorizationLogoutPostWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public authorizationLogoutPost(_options?: Configuration): Promise<void> {
        const result = this.api.authorizationLogoutPost(_options);
        return result.toPromise();
    }


}



import { ObservableFilterApi } from './ObservableAPI';

import { FilterApiRequestFactory, FilterApiResponseProcessor} from "../apis/FilterApi";
export class PromiseFilterApi {
    private api: ObservableFilterApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FilterApiRequestFactory,
        responseProcessor?: FilterApiResponseProcessor
    ) {
        this.api = new ObservableFilterApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param text 
     * @param type 
     * @param subtype 
     */
    public filterAddFilterPostWithHttpInfo(text?: string, type?: 'None' | 'Important' | 'AutoIgnore' | 'Hidden' | 'Applied', subtype?: 'Content' | 'Title', _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filterAddFilterPostWithHttpInfo(text, type, subtype, _options);
        return result.toPromise();
    }

    /**
     * @param text 
     * @param type 
     * @param subtype 
     */
    public filterAddFilterPost(text?: string, type?: 'None' | 'Important' | 'AutoIgnore' | 'Hidden' | 'Applied', subtype?: 'Content' | 'Title', _options?: Configuration): Promise<void> {
        const result = this.api.filterAddFilterPost(text, type, subtype, _options);
        return result.toPromise();
    }

    /**
     */
    public filterGetAllFiltersGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<JobFilter> | void>> {
        const result = this.api.filterGetAllFiltersGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public filterGetAllFiltersGet(_options?: Configuration): Promise<Array<JobFilter> | void> {
        const result = this.api.filterGetAllFiltersGet(_options);
        return result.toPromise();
    }


}



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
     * @param filter 
     */
    public jobApplyPostWithHttpInfo(jobId?: number, pageLength?: number, page?: number, filter?: 'None' | 'Important' | 'AutoIgnore' | 'Hidden' | 'Applied', _options?: Configuration): Promise<HttpInfo<JobMoveResponse>> {
        const result = this.api.jobApplyPostWithHttpInfo(jobId, pageLength, page, filter, _options);
        return result.toPromise();
    }

    /**
     * @param jobId 
     * @param pageLength 
     * @param page 
     * @param filter 
     */
    public jobApplyPost(jobId?: number, pageLength?: number, page?: number, filter?: 'None' | 'Important' | 'AutoIgnore' | 'Hidden' | 'Applied', _options?: Configuration): Promise<JobMoveResponse> {
        const result = this.api.jobApplyPost(jobId, pageLength, page, filter, _options);
        return result.toPromise();
    }

    /**
     * @param count 
     * @param offset 
     * @param filter 
     */
    public jobGetWithHttpInfo(count?: number, offset?: number, filter?: 'None' | 'Important' | 'AutoIgnore' | 'Hidden' | 'Applied', _options?: Configuration): Promise<HttpInfo<JobRequestResponse>> {
        const result = this.api.jobGetWithHttpInfo(count, offset, filter, _options);
        return result.toPromise();
    }

    /**
     * @param count 
     * @param offset 
     * @param filter 
     */
    public jobGet(count?: number, offset?: number, filter?: 'None' | 'Important' | 'AutoIgnore' | 'Hidden' | 'Applied', _options?: Configuration): Promise<JobRequestResponse> {
        const result = this.api.jobGet(count, offset, filter, _options);
        return result.toPromise();
    }

    /**
     * @param jobId 
     * @param pageLength 
     * @param page 
     * @param filter 
     */
    public jobHidePostWithHttpInfo(jobId?: number, pageLength?: number, page?: number, filter?: 'None' | 'Important' | 'AutoIgnore' | 'Hidden' | 'Applied', _options?: Configuration): Promise<HttpInfo<JobMoveResponse>> {
        const result = this.api.jobHidePostWithHttpInfo(jobId, pageLength, page, filter, _options);
        return result.toPromise();
    }

    /**
     * @param jobId 
     * @param pageLength 
     * @param page 
     * @param filter 
     */
    public jobHidePost(jobId?: number, pageLength?: number, page?: number, filter?: 'None' | 'Important' | 'AutoIgnore' | 'Hidden' | 'Applied', _options?: Configuration): Promise<JobMoveResponse> {
        const result = this.api.jobHidePost(jobId, pageLength, page, filter, _options);
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
    public jobRequestGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void | Array<JobRequest>>> {
        const result = this.api.jobRequestGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public jobRequestGet(_options?: Configuration): Promise<void | Array<JobRequest>> {
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
    public serviceStateGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<SyncState>> {
        const result = this.api.serviceStateGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public serviceStateGet(_options?: Configuration): Promise<SyncState> {
        const result = this.api.serviceStateGet(_options);
        return result.toPromise();
    }


}



