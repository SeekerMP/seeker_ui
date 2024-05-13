import './JobRepresentationComponent.scss';
import {LocalSeekJob} from "../models/LocalSeekJob";
import {useEffect, useRef} from "react";

type JobRepresentationProps = {
    job: LocalSeekJob | undefined
}

export const JobRepresentationComponent = (props: JobRepresentationProps) => {
    const jobRepresentationContainer = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const filteredElement = jobRepresentationContainer.current?.getElementsByClassName('filtered-text');

        if (filteredElement && filteredElement.length > 0) {
            filteredElement[0].scrollIntoView({ behavior: 'smooth' });
        }
    }, [props.job]);

    return (
        <div className="job-representation component-card">
            <div
                className="job-representation-content"
                dangerouslySetInnerHTML={{__html: props.job?.content ?? ""}}
                ref={jobRepresentationContainer}
            />
        </div>
    )
}