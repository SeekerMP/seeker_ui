import './syncStateProgressContainer.scss';
import {ProgressBarComponent} from "./progressBarComponent";
import {SyncState} from "../../api-clients";

type SyncStateProgressProps = {
    state: SyncState
}

export const SyncStateProgressContainer = (props: SyncStateProgressProps) => {
    return (
        <div className='sync-state-progress-container'>
            <div className='sync-state-progress-container-title-container'>
                <span>Request in progress:</span>
                <span>{`${props.state.currentRequest} [${props.state.currentPage}]`}</span>
            </div>
            <div className='sync-state-progress-container-progress-bars'>
                <ProgressBarComponent title="Page" percentage={props.state.currentPagePercentage ?? 0} />
                <ProgressBarComponent title="Total" percentage={props.state.progressPercentage ?? 0}/>
            </div>
        </div>
    )
}