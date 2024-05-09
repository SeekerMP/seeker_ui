import {Branding} from "./Branding";
import {Advertiser} from "./Advertiser";
import {Location} from "./Location";
import {Classification} from "./Classification";
import {Metadata} from "./Metadata";

export type LocalSeekJob = {
    id: number,
    area: string,
    title: string,
    areaId: number,
    roleId: string,
    salary: string,
    suburb: string,
    teaser: string,
    branding: Branding,
    location: string,
    suburbId: number,
    tracking: string,
    workType: string,
    advertiser: Advertiser,
    isStandOut: true,
    locationId: number,
    jobLocation: Location,
    listingDate: Date,
    bulletPoints: string[],
    areaWhereValue: string,
    classification: Classification,
    suburbWhereValue: string,
    subClassification: Classification,
    locationWhereValue: string,
    isPrivateAdvertiser: boolean,
    solMetadata: Metadata,
    content: string
}