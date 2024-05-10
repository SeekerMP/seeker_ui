import './filterComponent.scss';
import plusIcon from "Assets/plus.svg";
import React, {useState} from "react";
import {JobFilterType} from "../api-clients";

type FilterComponentProps = {
    filters: string[],
    title: string,
    type: JobFilterType,
    addNewFilter: (text: string, type: JobFilterType) => void
}

export const FilterComponent = (props: FilterComponentProps) => {
    const [newFilter, setNewFilter] = useState<string>('');

    const onInputChange = (event: React.FormEvent<HTMLInputElement>) => {
        setNewFilter(event.currentTarget.value);
    }

    const addNewFilter = () => {
        props.addNewFilter(newFilter, props.type);
        setNewFilter('');
    }

    const renderedFilters = props.filters.map(filter =>
        <div key={ `filter_${filter}` } className="filter-component-filter-cloud-filter-item">{ filter }</div>
    )

    return (
        <div className="filter-component">
            <div className="filter-component-title">{props.title}</div>
            <div className="filter-component-filter-cloud">
                { renderedFilters }
            </div>
            <div className="filter-component-add-container">
                <input onChange={onInputChange} value={newFilter ?? ''}/>
                <div className={`filter-component-add-container-add-button ${newFilter === '' ? 'disabled' : ''}`}
                     onClick={addNewFilter}>
                    <img src={plusIcon}/>
                </div>
            </div>
        </div>
    )
}