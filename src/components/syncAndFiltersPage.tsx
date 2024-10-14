import {SyncStateComponent} from "./syncState/syncStateComponent";
import {JobRequestsComponent} from "./jobRequestsComponent";
import './syncAndFiltersPage.scss';

export const SyncAndFiltersPage = () => {
    return (
        <div className='sync-and-filters-page'>
            <JobRequestsComponent />
            <SyncStateComponent/>
        </div>
    )
}