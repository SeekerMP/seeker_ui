import {SyncStateComponent} from "./syncState/syncStateComponent";
import {JobRequestsComponent} from "./jobRequestsComponent";
import {FilterComponent} from "./filterComponent";
import {useEffect, useState} from "react";
import {FilterApi, JobFilter, JobFilterSubtypeEnum, JobFilterTypeEnum} from "../api-clients";
import {configuration} from "../common/common-constants";
import './syncAndFiltersPage.scss';

export const SyncAndFiltersPage = () => {
    const [importantFilters, setImportantFilters] = useState<JobFilter[]>([]);
    const [ignoredFilters, setIgnoredFilters] = useState<JobFilter[]>([]);

    const filterApiClient = new FilterApi(configuration);
    const addNewFilter = (text: string, type: JobFilterTypeEnum, subType: JobFilterSubtypeEnum) => {
        filterApiClient.filterAddFilterPost(text, type, subType).then(_ => {
            const newFilter = new JobFilter();
            newFilter.text = text;
            newFilter.type = type;
            newFilter.subtype = subType;

            switch(type) {
                case JobFilterTypeEnum.Important:
                    const imFilters = Object.assign([], importantFilters);
                    imFilters.push(newFilter);

                    setImportantFilters(imFilters);

                    break;
                case JobFilterTypeEnum.AutoIgnore:
                    const igFilters = Object.assign([], ignoredFilters);
                    igFilters.push(newFilter);

                    setIgnoredFilters(igFilters);

                    break;
            }
        });
    }

    useEffect(() => {
        filterApiClient.filterGetAllFiltersGet().then(filters => {
            const imFilters: JobFilter[] = [];
            const igFilters: JobFilter[] = [];

            filters.forEach(filter => {
                switch (filter.type) {
                    case JobFilterTypeEnum.Important:
                        imFilters.push(filter);
                        break;
                    case JobFilterTypeEnum.AutoIgnore:
                        igFilters.push(filter);
                        break;
                }
            })

            setImportantFilters(imFilters);
            setIgnoredFilters(igFilters);
        });
    }, []);

    return (
        <div className='sync-and-filters-page'>
            <FilterComponent
                filters={importantFilters}
                title="Important"
                addNewFilter={addNewFilter}
                type={JobFilterTypeEnum.Important}
            />
            <FilterComponent
                filters={ignoredFilters}
                title="Ignore"
                addNewFilter={addNewFilter}
                type={JobFilterTypeEnum.AutoIgnore}
            />
            <JobRequestsComponent />
            <SyncStateComponent/>
        </div>
    )
}