import { JobRepresentationComponent } from "./jobRepresentationComponent";
import React, { useEffect, useRef, useState } from "react";
import { LocalSeekJob } from "@models/LocalSeekJob";
import './jobInfo.scss';
import './jobsContainerComponent.scss';
import { Job, JobApi, JobFilterTypeEnum, JobMoveResponse, JobRequestResponse } from "../../api-clients";
import { configuration } from "@common/common-constants";
import { JobComponent } from "./jobComponent";
import { PaginatorComponent } from "@components/paginatorComponent";
import { useMediaQuery } from "react-responsive";
import { AnimatePresence, motion } from "framer-motion";

import { HideIcon } from "@icons/hideIcon";
import { ApplyIcon } from "@icons/applyIcon";
import { ImportantIcon } from "@icons/importantIcon";
import { FilterIcon } from "@icons/filterIcon";
import { ListIcon } from "@icons/listIcon";
import { ExternalIcon } from "@icons/externalIcon";
import { BackIcon } from "@icons/backIcon";

type JobInfoProps = {
    hasMouse: boolean
}

export const JobInfo = (props: JobInfoProps) => {
    const [selectedJob, setSelectedJob] = useState<LocalSeekJob | undefined>(undefined);
    const [jobsCount, setJobsCount] = useState<number>(0);
    const [jobs, setJobs] = useState<Map<number, LocalSeekJob>>(new Map());
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [selectedFilter, setSelectedFilter] = useState<JobFilterTypeEnum>(JobFilterTypeEnum.None);
    const jobsContainerRef = useRef<HTMLDivElement | null>(null);
    const showRightPanelOutside = !useMediaQuery({maxWidth: 1000});

    const api = new JobApi(configuration);
    const hideJobDetails = () => setSelectedJob(undefined);

    const selectJobById = (jobId: number) => {
        setSelectedJob(jobs.get(jobId));
    }

    const fetchJobs = (page: number, onLoadPage?: () => void) => {
        api.jobGet(21, (page - 1) * 20, selectedFilter).then(values => handleJobFetch(page, values, onLoadPage));
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

        hideJobDetails();

        onLoadPage?.();
    }

    useEffect(() => {
        fetchJobs(1);
    }, [selectedFilter]);

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

    const hideJob = (jobId: number) => {
        api.jobHidePost(jobId, 21, currentPage, selectedFilter).then((job) => {
            hideAndShowNew(job, jobId);
            setSelectedJob(undefined);
        });
    }

    const applyForAJob = (jobId: number) => {
        api.jobApplyPost(jobId, 21, currentPage, selectedFilter).then((job) => {
            hideAndShowNew(job, jobId);
        });
    }

    const onFilterSelected = (filter: JobFilterTypeEnum) => {
        setSelectedFilter(filter);
    }

    const jobsRepresentation =
        Array.from(jobs.values()).sort(function (a, b) {
            return a.listingDate.getTime() - b.listingDate.getTime();
        }).slice(0, 20).map(job =>
            <JobComponent
                job={job}
                key={job.id}
                hideJob={selectedFilter !== JobFilterTypeEnum.Hidden ? hideJob : undefined}
                applyForAJob={selectedFilter !== JobFilterTypeEnum.Hidden ? applyForAJob : undefined}
                selectJob={selectJobById}
                selected={selectedJob?.id === job.id}
                hasMouse={props.hasMouse}
            />);

    const filters = [{
        type: JobFilterTypeEnum.None,
        icon: <ListIcon className='job-info-top-panel-icon' />
    }, {
        type: JobFilterTypeEnum.Applied,
        icon: <ApplyIcon className='job-info-top-panel-icon'/>
    }, {
        type: JobFilterTypeEnum.Hidden,
        icon: <HideIcon className='job-info-top-panel-icon' />
    }, {
        type: JobFilterTypeEnum.Important,
        icon: <ImportantIcon className='job-info-top-panel-icon' />
    }, {
        type: JobFilterTypeEnum.AutoIgnore,
        icon: <FilterIcon className='job-info-top-panel-icon' />
    }];

    const renderedFilterButtons = filters.map(filter =>
        <button
            key={`filter-${filter.type}`}
            className={`job-info-top-panel-button ${selectedFilter === filter.type ? 'selected' : ''}`}
            onClick={() => {
                onFilterSelected(filter.type)
            }}
        >
            { filter.icon }
        </button>
    );

    const rightPanel =
        <div className="right-panel">
            <div className="job-representation component-card">
                <JobRepresentationComponent job={selectedJob}/>
            </div>
        </div>

    const onExternalClicked = (jobId: number) => {
        window.open(`https://www.seek.co.nz/job/${jobId}`, "_blank");
    }

    const descriptionButtons = [{
        key: 'external',
        icon: <ExternalIcon />,
        onClick: onExternalClicked
    }]

    if (selectedFilter !== JobFilterTypeEnum.Hidden) {
        descriptionButtons.push({
            key: 'apply',
            icon: <ApplyIcon />,
            onClick: applyForAJob
        });

        descriptionButtons.push({
            key: 'hide',
            icon: <HideIcon />,
            onClick: hideJob
        });
    }

    const jobDescriptionButtonsPanel =
        <motion.div
            key='job-description-buttons-panel'
            className='job-description-buttons-panel'
            initial={{top: -100}}
            animate={{top: 0}}
            exit={{top: 100}}
            transition={{type: 'spring', duration: 0.3}}
        >
            <button
                className='job-info-top-panel-button'
                onClick={_ => setSelectedJob(undefined)}
            >
                <BackIcon />
            </button>
            <div className='job-manipulation-buttons'>
                {descriptionButtons.map(data =>
                    <button
                        className='job-info-top-panel-button'
                        key={`job-manipulation-button-${data.key}`}
                        onClick={_ => data.onClick(selectedJob?.id ?? -1)}
                    >
                        { data.icon }
                    </button>
                )}
            </div>
        </motion.div>

return (
    <div className={`job-info ${selectedJob ? 'job-selected' : ''}`}>
        <div className="jobs-container component-card">
            <div className='job-info-top-panel'>
                <AnimatePresence>
                    {
                        (!showRightPanelOutside && selectedJob) ?
                                jobDescriptionButtonsPanel :
                                <motion.div
                                    key='filters-container'
                                    className='filters-container'
                                    initial={{top: -100}}
                                    animate={{top: 0}}
                                    exit={{top: 100}}
                                    transition={{type: 'spring', duration: 0.3}}
                                >
                                    {renderedFilterButtons}
                                </motion.div>
                    }
                    </AnimatePresence>
                </div>
                {
                    (!showRightPanelOutside && selectedJob) ?
                        rightPanel :
                    <div className='jobs-list-with-pagination'>
                        <div ref={jobsContainerRef} className="jobs-container-list">
                            {jobsRepresentation}
                        </div>
                        <PaginatorComponent
                            pageCount={Math.floor(jobsCount / 20) + ((jobsCount % 20) > 0 ? 1 : 0)}
                            nextPageExists={jobs.size === 21}
                            loadPage={fetchJobs}
                        />
                    </div>
                }
            </div>
            { showRightPanelOutside && rightPanel }
        </div>
    )
}