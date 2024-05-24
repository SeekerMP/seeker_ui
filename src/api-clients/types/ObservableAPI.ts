import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { Job } from '../models/Job';
import { JobFilter } from '../models/JobFilter';
import { JobMoveResponse } from '../models/JobMoveResponse';
import { JobRequest } from '../models/JobRequest';
import { JobRequestResponse } from '../models/JobRequestResponse';
import { SyncState } from '../models/SyncState';

import { FilterApiRequestFactory, FilterApiResponseProcessor} from "../apis/FilterApi";
export class ObservableFilterApi {
    private requestFactory: FilterApiRequestFactory;
    private responseProcessor: FilterApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FilterApiRequestFactory,
        responseProcessor?: FilterApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FilterApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FilterApiResponseProcessor();
    }

    /**
     * @param text 
     * @param type 
     * @param subtype 
     */
    public filterAddFilterPostWithHttpInfo(text?: string, type?: 'None' | 'Important' | 'AutoIgnore' | 'Hidden' | 'Applied', subtype?: 'Content' | 'Title', _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.filterAddFilterPost(text, type, subtype, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.filterAddFilterPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param text 
     * @param type 
     * @param subtype 
     */
    public filterAddFilterPost(text?: string, type?: 'None' | 'Important' | 'AutoIgnore' | 'Hidden' | 'Applied', subtype?: 'Content' | 'Title', _options?: Configuration): Observable<void> {
        return this.filterAddFilterPostWithHttpInfo(text, type, subtype, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public filterGetAllFiltersGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<JobFilter>>> {
        const requestContextPromise = this.requestFactory.filterGetAllFiltersGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.filterGetAllFiltersGetWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public filterGetAllFiltersGet(_options?: Configuration): Observable<Array<JobFilter>> {
        return this.filterGetAllFiltersGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<JobFilter>>) => apiResponse.data));
    }

}

import { JobApiRequestFactory, JobApiResponseProcessor} from "../apis/JobApi";
export class ObservableJobApi {
    private requestFactory: JobApiRequestFactory;
    private responseProcessor: JobApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: JobApiRequestFactory,
        responseProcessor?: JobApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new JobApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new JobApiResponseProcessor();
    }

    /**
     * @param jobId 
     * @param pageLength 
     * @param page 
     * @param filter 
     */
    public jobApplyPostWithHttpInfo(jobId?: number, pageLength?: number, page?: number, filter?: 'None' | 'Important' | 'AutoIgnore' | 'Hidden' | 'Applied', _options?: Configuration): Observable<HttpInfo<JobMoveResponse>> {
        const requestContextPromise = this.requestFactory.jobApplyPost(jobId, pageLength, page, filter, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.jobApplyPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param jobId 
     * @param pageLength 
     * @param page 
     * @param filter 
     */
    public jobApplyPost(jobId?: number, pageLength?: number, page?: number, filter?: 'None' | 'Important' | 'AutoIgnore' | 'Hidden' | 'Applied', _options?: Configuration): Observable<JobMoveResponse> {
        return this.jobApplyPostWithHttpInfo(jobId, pageLength, page, filter, _options).pipe(map((apiResponse: HttpInfo<JobMoveResponse>) => apiResponse.data));
    }

    /**
     * @param count 
     * @param offset 
     * @param filter 
     */
    public jobGetWithHttpInfo(count?: number, offset?: number, filter?: 'None' | 'Important' | 'AutoIgnore' | 'Hidden' | 'Applied', _options?: Configuration): Observable<HttpInfo<JobRequestResponse>> {
        const requestContextPromise = this.requestFactory.jobGet(count, offset, filter, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.jobGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param count 
     * @param offset 
     * @param filter 
     */
    public jobGet(count?: number, offset?: number, filter?: 'None' | 'Important' | 'AutoIgnore' | 'Hidden' | 'Applied', _options?: Configuration): Observable<JobRequestResponse> {
        return this.jobGetWithHttpInfo(count, offset, filter, _options).pipe(map((apiResponse: HttpInfo<JobRequestResponse>) => apiResponse.data));
    }

    /**
     * @param jobId 
     * @param pageLength 
     * @param page 
     * @param filter 
     */
    public jobHidePostWithHttpInfo(jobId?: number, pageLength?: number, page?: number, filter?: 'None' | 'Important' | 'AutoIgnore' | 'Hidden' | 'Applied', _options?: Configuration): Observable<HttpInfo<JobMoveResponse>> {
        const requestContextPromise = this.requestFactory.jobHidePost(jobId, pageLength, page, filter, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.jobHidePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param jobId 
     * @param pageLength 
     * @param page 
     * @param filter 
     */
    public jobHidePost(jobId?: number, pageLength?: number, page?: number, filter?: 'None' | 'Important' | 'AutoIgnore' | 'Hidden' | 'Applied', _options?: Configuration): Observable<JobMoveResponse> {
        return this.jobHidePostWithHttpInfo(jobId, pageLength, page, filter, _options).pipe(map((apiResponse: HttpInfo<JobMoveResponse>) => apiResponse.data));
    }

    /**
     */
    public jobRetrieveJobsPostWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.jobRetrieveJobsPost(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.jobRetrieveJobsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public jobRetrieveJobsPost(_options?: Configuration): Observable<void> {
        return this.jobRetrieveJobsPostWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { JobRequestApiRequestFactory, JobRequestApiResponseProcessor} from "../apis/JobRequestApi";
export class ObservableJobRequestApi {
    private requestFactory: JobRequestApiRequestFactory;
    private responseProcessor: JobRequestApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: JobRequestApiRequestFactory,
        responseProcessor?: JobRequestApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new JobRequestApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new JobRequestApiResponseProcessor();
    }

    /**
     * @param request 
     */
    public insertRequestPostWithHttpInfo(request?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.insertRequestPost(request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.insertRequestPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param request 
     */
    public insertRequestPost(request?: string, _options?: Configuration): Observable<void> {
        return this.insertRequestPostWithHttpInfo(request, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public jobRequestGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<JobRequest>>> {
        const requestContextPromise = this.requestFactory.jobRequestGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.jobRequestGetWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public jobRequestGet(_options?: Configuration): Observable<Array<JobRequest>> {
        return this.jobRequestGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<JobRequest>>) => apiResponse.data));
    }

}

import { ServiceStateApiRequestFactory, ServiceStateApiResponseProcessor} from "../apis/ServiceStateApi";
export class ObservableServiceStateApi {
    private requestFactory: ServiceStateApiRequestFactory;
    private responseProcessor: ServiceStateApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ServiceStateApiRequestFactory,
        responseProcessor?: ServiceStateApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ServiceStateApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ServiceStateApiResponseProcessor();
    }

    /**
     */
    public serviceStateGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<SyncState>> {
        const requestContextPromise = this.requestFactory.serviceStateGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.serviceStateGetWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public serviceStateGet(_options?: Configuration): Observable<SyncState> {
        return this.serviceStateGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<SyncState>) => apiResponse.data));
    }

}
