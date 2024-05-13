import {Job, JobApi, JobFilterTypeEnum} from "../api-clients";
import {LocalSeekJob} from "../models/LocalSeekJob";
import {useEffect, useRef, useState} from "react";
import {JobComponent} from "./jobComponent";
import {PaginatorComponent} from "./paginatorComponent";
import "./jobsContainerComponent.scss";
import {configuration} from "../common/common-constants";
import {serviceStateService} from "../common/serviceState";

type JobsContainerProps = {
    selectJob: (job: LocalSeekJob | undefined) => void;
    selectedJobId: number | undefined,
    hideJobDetails: () => void
}

export const JobsContainerComponent = (props: JobsContainerProps) => {
    const [jobs, setJobs] = useState<Map<number, LocalSeekJob>>(new Map());
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [selectedFilter, setSelectedFilter] = useState<number>(1);

    const api = new JobApi(configuration);
    const jobsContainerRef = useRef<HTMLDivElement | null>(null);

    const fetchJobs = (page: number, onLoadPage?: () => void) => {
        switch (selectedFilter) {
            case 2:
                api.jobGet(21, (page - 1) * 20, JobFilterTypeEnum.Applied).then((values) => handleJobFetch(page, values, onLoadPage));
                break;
            case 3:
                api.jobGet(21, (page - 1) * 20, JobFilterTypeEnum.Hidden).then((values) => handleJobFetch(page, values, onLoadPage));
                break;
            case 4:
                api.jobGet(21, (page - 1) * 20, JobFilterTypeEnum.Important).then((values) => handleJobFetch(page, values, onLoadPage));
                break;
            case 5:
                api.jobGet(21, (page - 1) * 20, JobFilterTypeEnum.AutoIgnore).then((values) => handleJobFetch(page, values, onLoadPage));
                break;
            default:
                api.jobGet(21, (page - 1) * 20, JobFilterTypeEnum.None).then((values) => handleJobFetch(page, values, onLoadPage));
        }
    }

    const handleJobFetch = (page: number, values: Job[], onLoadPage?: () => void) => {
        const jobsMap = new Map<number, LocalSeekJob>();
        values.map(job => {
            jobsMap.set(job?.id ?? -1, parseJob(job));
        });

        setJobs(jobsMap);
        setCurrentPage(page);

        jobsContainerRef.current?.scrollTo({
            behavior: 'smooth',
            top: 0
        });

        props.hideJobDetails();

        onLoadPage?.();
    }

    useEffect(() => {
        fetchJobs(1);
    }, [selectedFilter]);

    const hideJob = (jobId: number) => {
        api.jobHidePost(jobId, 21, currentPage).then((job) => {
            hideAndShowNew(job, jobId);
        });
    }

    const applyForAJob = (jobId: number) => {
        api.jobApplyPost(jobId, 21, currentPage).then((job) => {
            hideAndShowNew(job, jobId);
        });
    }

    const parseJob = (jobToParse: Job): LocalSeekJob => {
        const parsedJob = JSON.parse(jobToParse.preview ?? "") as LocalSeekJob;
        parsedJob.content = jobToParse.content ?? "";
        parsedJob.listingDate = new Date(parsedJob.listingDate);

        return parsedJob;
    }

    const hideAndShowNew = (jobToShow: Job | void, jobToHideId: number) => {
        let parsedJob: LocalSeekJob | null = null;

        if (jobToShow) {
            parsedJob = parseJob(jobToShow);
        }

        if (jobs.has(jobToHideId)) {
            const newJobs = new Map(jobs);
            newJobs.delete(jobToHideId);

            if (parsedJob)
                newJobs.set(parsedJob.id, parsedJob);

            setJobs(newJobs);
        }
    }

    const selectJob = (jobId: number) => {
        props.selectJob(jobs.get(jobId));
    }

    const jobsRepresentation =
        Array.from(jobs.values()).sort(function(a,b){
            return a.listingDate.getTime() - b.listingDate.getTime();
        }).slice(0, 20).map(job =>
            <JobComponent
                job={job}
                key={job.id}
                hideJob={selectedFilter === 1 ? hideJob : undefined}
                applyForAJob={selectedFilter === 1 ? applyForAJob : undefined}
                selectJob={selectJob}
                selected={props.selectedJobId === job.id}
            />);

    const onFilterSelected = (filter: number) => {
        setSelectedFilter(filter);
    }

    return (
        <div className="jobs-container component-card">
            <div className="filters-container">
                <div
                    className={`filter-button not-applied-button ${selectedFilter === 1 ? 'selected' : ''}`}
                    onClick={() => {
                        onFilterSelected(1)
                    }}>
                    not applied
                </div>
                <div
                    className={`filter-button applied-button  ${selectedFilter === 2 ? 'selected' : ''}`}
                    onClick={() => {
                        onFilterSelected(2)
                    }}>
                    applied
                </div>
                <div
                    className={`filter-button hidden-button  ${selectedFilter === 3 ? 'selected' : ''}`}
                    onClick={() => {
                        onFilterSelected(3)
                    }}>
                    hidden
                </div>
                <div
                    className={`filter-button important-button  ${selectedFilter === 4 ? 'selected' : ''}`}
                    onClick={() => {
                        onFilterSelected(4)
                    }}>
                    important
                </div>
                <div
                    className={`filter-button ignored-button  ${selectedFilter === 5 ? 'selected' : ''}`}
                    onClick={() => {
                        onFilterSelected(5)
                    }}>
                    ignored
                </div>
            </div>
            <div ref={jobsContainerRef} className="jobs-container-list">
                {jobsRepresentation}
            </div>
            <PaginatorComponent
                pageCount={Math.round(serviceStateService.jobsCount / 20)}
                nextPageExists={jobs.size === 21}
                loadPage={fetchJobs}
            />
        </div>
    )
}