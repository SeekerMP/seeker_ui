import { LocalSeekJob } from "@models/LocalSeekJob";
import "./jobComponent.scss";
import { motion, PanInfo, useAnimate } from "framer-motion";
import React from "react";

import { HideIcon } from "@icons/hideIcon";
import { ApplyIcon } from "@icons/applyIcon";
import { ExternalIcon } from "@icons/externalIcon";

type JobProps = {
    job: LocalSeekJob,
    hideJob?: (jobId: number) => void;
    applyForAJob?: (jobId: number) => void;
    selectJob: (jobId: number) => void;
    selected: boolean;
    hasMouse: boolean
}

export const JobComponent = (props: JobProps) => {
    const { title, teaser, branding, jobLocation, advertiser, salary, bulletPoints, solMetadata } = props.job
    const [scope, animate] = useAnimate();

    let logo = null;
    let location = null;
    let adv = null;
    let bullets = null;

    if (branding != null) {
        logo = <img className="job-logo sapced" src={branding.assets.logo.strategies.jdpLogo}/>
    }

    if (advertiser != null) {
        adv = <div className="job-advertiser sapced">{ advertiser.description }</div>
    }

    if (jobLocation != null) {
        location = <div>{ jobLocation.label }</div>
    }

    if (bulletPoints != null && bulletPoints.length > 0) {
        bullets = (
            <ul>
                { bulletPoints.map((point, index) => <li key={`point-${index}`}>{point}</li>) }
            </ul>
        )
    }

    const onHideClicked = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        props.hideJob?.(props.job.id);
    }

    const onApplyClicked = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        props.applyForAJob?.(props.job.id);
    }

    const onExternalClicked = () => {
        window.open(`https://www.seek.co.nz/job/${solMetadata.jobId}`, "_blank");
    }

    const actionButtons = () => {
        const buttons = [];

        buttons.push(
            <button key="button-external" className="job-action-button" onClick={ onExternalClicked }>
                <ExternalIcon />
            </button>
        );

        if (props.applyForAJob && props.hasMouse) {
            buttons.push(
                <button key="button-apply" className="job-action-button" onClick={ onApplyClicked }>
                    <ApplyIcon />
                </button>
            );
        }

        if (props.hideJob && props.hasMouse) {
            buttons.push(
                <button key="button-hide" className="job-action-button" onClick={onHideClicked}>
                    <HideIcon />
                </button>
            );
        }

        return buttons;
    }

    const onJobSelected = () => {
        props.selectJob(props.job.id);
    }

    const animateDragOver =(event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        if (Math.abs(info.offset.x) < 100) {
            animate(scope.current, { x: 0 });
        }
    }

    return (
        <div className='job-info-container'>
            <motion.div
                ref={scope}
                drag={!props.hasMouse && 'x'}
                dragConstraints={{ left: -100, top: 0, right: 100 }}
                dragElastic={0.1}
                onDragEnd={ animateDragOver }
                className={ `job ${ props.selected ? "selected" : '' }`}
                onClick={ onJobSelected }
            >
                <div className="job-header">
                    {logo}
                    <div className="job-actions-container">
                        { actionButtons() }
                    </div>
                </div>
                <div dangerouslySetInnerHTML={{__html: `<h3>${title}</h3>` }} className='job-title-container'/>
                {adv}
                {location}
                <div className="spaced">{salary}</div>
                {bullets}
                <div>{teaser}</div>
            </motion.div>
            {
                !props.hasMouse &&
                <div className='job-info-background'>
                    <button className='job-info-apply-button'>
                        <ApplyIcon />
                    </button>
                    <div className='job-info-background-gradient'/>
                    <button
                        className='job-info-hide-button'
                        onClick={onHideClicked}
                    >
                        <HideIcon />
                    </button>
                </div>
            }
        </div>
    )
}