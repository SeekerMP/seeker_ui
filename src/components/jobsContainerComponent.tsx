import {Job, JobApi, JobFilterTypeEnum, JobMoveResponse, JobRequestResponse} from "../api-clients";
import {LocalSeekJob} from "../models/LocalSeekJob";
import {useEffect, useRef, useState} from "react";
import {JobComponent} from "./jobComponent";
import {PaginatorComponent} from "./paginatorComponent";
import "./jobsContainerComponent.scss";
import {configuration} from "../common/common-constants";

type JobsContainerProps = {
    selectJob: (job: LocalSeekJob | undefined) => void;
    selectedJobId: number | undefined,
    hideJobDetails: () => void
}

export const JobsContainerComponent = (props: JobsContainerProps) => {
    const [jobs, setJobs] = useState<Map<number, LocalSeekJob>>(new Map());
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [selectedFilter, setSelectedFilter] = useState<JobFilterTypeEnum>(JobFilterTypeEnum.None);
    const [jobsCount, setJobsCount] = useState<number>(0);

    const api = new JobApi(configuration);
    const jobsContainerRef = useRef<HTMLDivElement | null>(null);

    const fetchJobs = (page: number, onLoadPage?: () => void) => {
        api.jobGet(21, (page - 1) * 20, selectedFilter).then(values=> handleJobFetch(page, values, onLoadPage));
    }

    const handleJobFetch = (page: number, values: JobRequestResponse, onLoadPage?: () => void) => {
        const jobsMap = new Map<number, LocalSeekJob>();

        values.jobs?.map(job => {
            jobsMap.set(job?.id ?? -1, parseJob(job));
        });

        setJobsCount(values.fullCount ?? -1);
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
        api.jobHidePost(jobId, 21, currentPage, selectedFilter).then((job) => {
            hideAndShowNew(job, jobId);
        });
    }

    const applyForAJob = (jobId: number) => {
        api.jobApplyPost(jobId, 21, currentPage, selectedFilter).then((job) => {
            hideAndShowNew(job, jobId);
        });
    }

    const parseJob = (jobToParse: Job): LocalSeekJob => {
        const parsedJob = JSON.parse(jobToParse.preview ?? "") as LocalSeekJob;
        parsedJob.content = jobToParse.content ?? "";
        parsedJob.listingDate = new Date(parsedJob.listingDate);

        return parsedJob;
    }

    const hideAndShowNew = (jobToShow: JobMoveResponse, jobToHideId: number) => {
        let parsedJob: LocalSeekJob | null = null;

        if (jobToShow.job) {
            parsedJob = parseJob(jobToShow.job);
        }

        setJobsCount(jobToShow.fullCount ?? -1);

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
                hideJob={selectedFilter !== JobFilterTypeEnum.Hidden ? hideJob : undefined}
                applyForAJob={selectedFilter !== JobFilterTypeEnum.Hidden ? applyForAJob : undefined}
                selectJob={selectJob}
                selected={props.selectedJobId === job.id}
            />);

    const onFilterSelected = (filter: JobFilterTypeEnum) => {
        setSelectedFilter(filter);
    }

    return (
        <div className="jobs-container component-card">
            <div className="filters-container">
                <div
                    className={`filter-button not-applied-button ${selectedFilter === JobFilterTypeEnum.None ? 'selected' : ''}`}
                    onClick={() => {
                        onFilterSelected(JobFilterTypeEnum.None)
                    }}>
                    not applied
                </div>
                <div
                    className={`filter-button applied-button  ${selectedFilter === JobFilterTypeEnum.Applied ? 'selected' : ''}`}
                    onClick={() => {
                        onFilterSelected(JobFilterTypeEnum.Applied)
                    }}>
                    applied
                </div>
                <div
                    className={`filter-button hidden-button  ${selectedFilter === JobFilterTypeEnum.Hidden ? 'selected' : ''}`}
                    onClick={() => {
                        onFilterSelected(JobFilterTypeEnum.Hidden)
                    }}>
                    hidden
                </div>
                <div
                    className={`filter-button important-button  ${selectedFilter === JobFilterTypeEnum.Important ? 'selected' : ''}`}
                    onClick={() => {
                        onFilterSelected(JobFilterTypeEnum.Important)
                    }}>
                    important
                </div>
                <div
                    className={`filter-button ignored-button  ${selectedFilter === JobFilterTypeEnum.AutoIgnore ? 'selected' : ''}`}
                    onClick={() => {
                        onFilterSelected(JobFilterTypeEnum.AutoIgnore)
                    }}>
                    ignored
                </div>
            </div>
            <div ref={jobsContainerRef} className="jobs-container-list">
                {jobsRepresentation}
            </div>
            <PaginatorComponent
                pageCount={Math.floor(jobsCount / 20) + ((jobsCount % 20) > 0 ? 1 : 0)}
                nextPageExists={jobs.size === 21}
                loadPage={fetchJobs}
            />
        </div>
    )
}