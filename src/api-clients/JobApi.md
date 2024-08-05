# .JobApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**jobApplyPost**](JobApi.md#jobApplyPost) | **POST** /Job/apply | 
[**jobGet**](JobApi.md#jobGet) | **GET** /Job | 
[**jobHidePost**](JobApi.md#jobHidePost) | **POST** /Job/hide | 
[**jobRetrieveJobsPost**](JobApi.md#jobRetrieveJobsPost) | **POST** /Job/retrieveJobs | 


# **jobApplyPost**
> JobMoveResponse jobApplyPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .JobApi(configuration);

let body:.JobApiJobApplyPostRequest = {
  // number (optional)
  jobId: 1,
  // number (optional)
  pageLength: 1,
  // number (optional)
  page: 1,
  // 'None' | 'Important' | 'AutoIgnore' | 'Hidden' | 'Applied' (optional)
  filter: "None",
};

apiInstance.jobApplyPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | [**number**] |  | (optional) defaults to undefined
 **pageLength** | [**number**] |  | (optional) defaults to undefined
 **page** | [**number**] |  | (optional) defaults to undefined
 **filter** | [**&#39;None&#39; | &#39;Important&#39; | &#39;AutoIgnore&#39; | &#39;Hidden&#39; | &#39;Applied&#39;**]**Array<&#39;None&#39; &#124; &#39;Important&#39; &#124; &#39;AutoIgnore&#39; &#124; &#39;Hidden&#39; &#124; &#39;Applied&#39;>** |  | (optional) defaults to undefined


### Return type

**JobMoveResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **jobGet**
> JobRequestResponse jobGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .JobApi(configuration);

let body:.JobApiJobGetRequest = {
  // number (optional)
  count: 1,
  // number (optional)
  offset: 1,
  // 'None' | 'Important' | 'AutoIgnore' | 'Hidden' | 'Applied' (optional)
  filter: "None",
};

apiInstance.jobGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **count** | [**number**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **filter** | [**&#39;None&#39; | &#39;Important&#39; | &#39;AutoIgnore&#39; | &#39;Hidden&#39; | &#39;Applied&#39;**]**Array<&#39;None&#39; &#124; &#39;Important&#39; &#124; &#39;AutoIgnore&#39; &#124; &#39;Hidden&#39; &#124; &#39;Applied&#39;>** |  | (optional) defaults to undefined


### Return type

**JobRequestResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **jobHidePost**
> JobMoveResponse jobHidePost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .JobApi(configuration);

let body:.JobApiJobHidePostRequest = {
  // number (optional)
  jobId: 1,
  // number (optional)
  pageLength: 1,
  // number (optional)
  page: 1,
  // 'None' | 'Important' | 'AutoIgnore' | 'Hidden' | 'Applied' (optional)
  filter: "None",
};

apiInstance.jobHidePost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | [**number**] |  | (optional) defaults to undefined
 **pageLength** | [**number**] |  | (optional) defaults to undefined
 **page** | [**number**] |  | (optional) defaults to undefined
 **filter** | [**&#39;None&#39; | &#39;Important&#39; | &#39;AutoIgnore&#39; | &#39;Hidden&#39; | &#39;Applied&#39;**]**Array<&#39;None&#39; &#124; &#39;Important&#39; &#124; &#39;AutoIgnore&#39; &#124; &#39;Hidden&#39; &#124; &#39;Applied&#39;>** |  | (optional) defaults to undefined


### Return type

**JobMoveResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **jobRetrieveJobsPost**
> void jobRetrieveJobsPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .JobApi(configuration);

let body:any = {};

apiInstance.jobRetrieveJobsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


