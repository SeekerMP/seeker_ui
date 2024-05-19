import './syncStateResultContainer.scss';
import {SyncState} from "../../api-clients";

type SyncStateResultProps = {
    state: SyncState;
    updateAllRequests: () => void;
}

export const SyncStateResultContainer = (props: SyncStateResultProps) => {
    return (
        <div className='sync-state-result-container'>
            <div className='update-result-line'><span>Last update:</span><span>{props.state.startedAt?.toDateString() ?? '-'}</span>
            </div>
            <div className='update-result-container'>
                <span className='update-result-title'>Update result</span>
                <div className='update-result-list'>
                    <div className='update-result-line'><span>Total:</span><span>{props.state.uniqJobsCount ?? 0}</span></div>
                    <div className='update-result-line'><span>Important:</span><span>{props.state.importantCount ?? 0}</span>
                    </div>
                    <div className='update-result-line'><span>Ignored:</span><span>{props.state.autoIgnoredCount ?? 0}</span>
                    </div>
                </div>
            </div>
            <button onClick={props.updateAllRequests}>Update all requests</button>
        </div>
    )
}