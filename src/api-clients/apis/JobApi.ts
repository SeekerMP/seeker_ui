// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { Job } from '../models/Job';

/**
 * no description
 */
export class JobApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param jobId 
     * @param pageLength 
     * @param page 
     */
    public async jobApplyPost(jobId?: number, pageLength?: number, page?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/Job/apply';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (jobId !== undefined) {
            requestContext.setQueryParam("jobId", ObjectSerializer.serialize(jobId, "number", "int32"));
        }

        // Query Params
        if (pageLength !== undefined) {
            requestContext.setQueryParam("pageLength", ObjectSerializer.serialize(pageLength, "number", "int32"));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", "int32"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param count 
     * @param offset 
     * @param filter 
     */
    public async jobGet(count?: number, offset?: number, filter?: 'None' | 'Important' | 'AutoIgnore' | 'Hidden' | 'Applied', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/Job';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (count !== undefined) {
            requestContext.setQueryParam("count", ObjectSerializer.serialize(count, "number", "int32"));
        }

        // Query Params
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", "int32"));
        }

        // Query Params
        if (filter !== undefined) {
            requestContext.setQueryParam("filter", ObjectSerializer.serialize(filter, "'None' | 'Important' | 'AutoIgnore' | 'Hidden' | 'Applied'", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param jobId 
     * @param pageLength 
     * @param page 
     */
    public async jobHidePost(jobId?: number, pageLength?: number, page?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/Job/hide';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (jobId !== undefined) {
            requestContext.setQueryParam("jobId", ObjectSerializer.serialize(jobId, "number", "int32"));
        }

        // Query Params
        if (pageLength !== undefined) {
            requestContext.setQueryParam("pageLength", ObjectSerializer.serialize(pageLength, "number", "int32"));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", "int32"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     */
    public async jobRetrieveJobsPost(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/Job/retrieveJobs';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class JobApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to jobApplyPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async jobApplyPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void | Job >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Job = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Job", ""
            ) as Job;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void | Job = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void | Job", ""
            ) as void | Job;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to jobGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async jobGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Job> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Job> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Job>", ""
            ) as Array<Job>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Job> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Job>", ""
            ) as Array<Job>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to jobHidePost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async jobHidePostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void | Job >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Job = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Job", ""
            ) as Job;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void | Job = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void | Job", ""
            ) as void | Job;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to jobRetrieveJobsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async jobRetrieveJobsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
