import {SyncState} from "../api-clients";

class ServiceState {
    public jobsCount: number = 0;

    public init(state: SyncState) {
        this.jobsCount = 1000;
    }
}

export const serviceStateService = new ServiceState();