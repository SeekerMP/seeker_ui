/**
 * SeekerAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Job } from '../models/Job';
import { HttpFile } from '../http/http';

export class JobMoveResponse {
    'job'?: Job;
    'fullCount'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "job",
            "baseName": "job",
            "type": "Job",
            "format": ""
        },
        {
            "name": "fullCount",
            "baseName": "fullCount",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return JobMoveResponse.attributeTypeMap;
    }
}

