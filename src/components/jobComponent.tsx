import {LocalSeekJob} from "../models/LocalSeekJob";
import "./jobComponent.scss";
import hideJobIcon from "Assets/hide-job.svg";
import applyIcon from "Assets/apply.svg";
import externalIcon from "Assets/external.svg";

type JobProps = {
    job: LocalSeekJob,
    hideJob?: (jobId: number) => void;
    applyForAJob?: (jobId: number) => void;
    selectJob: (jobId: number) => void;
    selected: boolean;
}

export const JobComponent = (props: JobProps) => {
    const { title, teaser, branding, jobLocation, advertiser, salary, bulletPoints, solMetadata } = props.job
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

    const onHideClicked = () => {
        props.hideJob?.(props.job.id);
    }

    const onApplyClicked = () => {
        props.applyForAJob?.(props.job.id);
    }

    const onExternalClicked = () => {
        window.open(`https://www.seek.co.nz/job/${solMetadata.jobId}`, "_blank");
    }

    const actionButtons = () => {
        const buttons = [];

        buttons.push(<img src={externalIcon} key="button-external" className="job-action-button" onClick={onExternalClicked}/>);

        if (props.applyForAJob) {
            buttons.push(<img src={applyIcon} key="button-apply" className="job-action-button" onClick={onApplyClicked}/>);
        }

        if (props.hideJob) {
            buttons.push(<img src={hideJobIcon} key="button-hide" className="job-action-button" onClick={onHideClicked}/>);
        }

        return buttons;
    }

    const onJobSelected = () => {
        props.selectJob(props.job.id);
    }

    return (
        <div className={ `job ${ props.selected ? "selected" : '' }`} onClick={ onJobSelected }>
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
        </div>
    )
}