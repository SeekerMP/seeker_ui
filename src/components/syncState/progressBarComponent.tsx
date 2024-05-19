import {useEffect, useState} from "react";
import './progressBarComponent.scss';

type ProgressBarComponentProps = {
    title: string;
    percentage: number;
}

export const ProgressBarComponent = (props: ProgressBarComponentProps) => {
    const style = { clipPath: `inset(0 0 0 ${props.percentage}%)` };

    return (
        <div className='progress-bar'>
            <div
                className='progress-bar-line progress-bar-back'>
                { props.title }
            </div>
            <div className='progress-bar-line progress-bar-front'
                 style={style}>
                {props.title}
            </div>
        </div>
    )
}