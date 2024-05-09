import {ServiceState as StateFromServer} from "../api-clients";
class ServiceState {
    public jobsCount: number = 0;

    public init(state: StateFromServer) {
        this.jobsCount = state.jobsCount ?? 0;
    }
}

export const serviceStateService = new ServiceState();