import './JobRepresentationComponent.scss';
import {LocalSeekJob} from "../models/LocalSeekJob";

type JobRepresentationProps = {
    job: LocalSeekJob | undefined
}

export const JobRepresentationComponent = (props: JobRepresentationProps) => {
    return (
        <div className="job-representation component-card">
            <div className="job-representation-content" dangerouslySetInnerHTML={{__html: props.job?.content ?? ""}}/>
        </div>
    )
}