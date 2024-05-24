# .FilterApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**filterAddFilterPost**](FilterApi.md#filterAddFilterPost) | **POST** /Filter/addFilter | 
[**filterGetAllFiltersGet**](FilterApi.md#filterGetAllFiltersGet) | **GET** /Filter/getAllFilters | 


# **filterAddFilterPost**
> void filterAddFilterPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FilterApi(configuration);

let body:.FilterApiFilterAddFilterPostRequest = {
  // string (optional)
  text: "text_example",
  // 'None' | 'Important' | 'AutoIgnore' | 'Hidden' | 'Applied' (optional)
  type: "None",
  // 'Content' | 'Title' (optional)
  subtype: "Content",
};

apiInstance.filterAddFilterPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | [**string**] |  | (optional) defaults to undefined
 **type** | [**&#39;None&#39; | &#39;Important&#39; | &#39;AutoIgnore&#39; | &#39;Hidden&#39; | &#39;Applied&#39;**]**Array<&#39;None&#39; &#124; &#39;Important&#39; &#124; &#39;AutoIgnore&#39; &#124; &#39;Hidden&#39; &#124; &#39;Applied&#39;>** |  | (optional) defaults to undefined
 **subtype** | [**&#39;Content&#39; | &#39;Title&#39;**]**Array<&#39;Content&#39; &#124; &#39;Title&#39;>** |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filterGetAllFiltersGet**
> Array<JobFilter> filterGetAllFiltersGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FilterApi(configuration);

let body:any = {};

apiInstance.filterGetAllFiltersGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<JobFilter>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


