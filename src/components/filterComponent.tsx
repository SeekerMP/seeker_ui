import './filterComponent.scss';
import { PlusIcon } from "@icons/plusIcon";
import React, { useState } from "react";
import { JobFilter, JobFilterSubtypeEnum, JobFilterTypeEnum } from "../api-clients";
import { SelectFilterSubtypeComponent } from "./selectFilterSubtypeComponent";

type FilterComponentProps = {
    filters: JobFilter[],
    title: string,
    type: JobFilterTypeEnum,
    addNewFilter: (text: string, type: JobFilterTypeEnum, subtype: JobFilterSubtypeEnum) => void
}

export const FilterComponent = (props: FilterComponentProps) => {
    const [newFilter, setNewFilter] = useState<string>('');
    const [subtype, setSubtype] = useState<JobFilterSubtypeEnum>(JobFilterSubtypeEnum.Content);

    const onInputChange = (event: React.FormEvent<HTMLInputElement>) => {
        setNewFilter(event.currentTarget.value);
    }

    const addNewFilter = () => {
        props.addNewFilter(newFilter, props.type, subtype);
        setNewFilter('');
    }

    const mapSubtype = (subtype: JobFilterSubtypeEnum | undefined): string => {
        if (subtype == null)
            return '';

        switch (subtype) {
            case JobFilterSubtypeEnum.Content:
                return 'C';
            case JobFilterSubtypeEnum.Title:
                return 'T';
        }
    }

    const renderedFilters = props.filters.map(filter =>
        <div key={ `filter_${filter.text}` } className={ `filter-component-filter-cloud-filter-item filter-item-subtype-${filter.subtype?.toString().toLowerCase()}`} >
            <div className='filter-item-part filter-item-part-subtype'>{ mapSubtype(filter.subtype) }</div>
            <div className='filter-item-part'>{ filter.text }</div>
        </div>
    )

    const changeSelectedSubtype = (subtype: JobFilterSubtypeEnum) => {
        setSubtype(subtype);
    }

    return (
        <div className={ `filter-component filter-component-${ props.title.toLowerCase() }` }>
            <div className="filter-component-title">{props.title}</div>
            <div className="filter-component-filter-cloud">
                { renderedFilters }
            </div>
            <div className="filter-component-add-container">
                <SelectFilterSubtypeComponent mapName={mapSubtype} onSelectedSubtypeChanged={changeSelectedSubtype}/>
                <input onChange={onInputChange} value={newFilter ?? ''}/>
                <div className={`filter-component-add-container-add-button ${newFilter === '' ? 'disabled' : ''}`}
                     onClick={addNewFilter}>
                    <PlusIcon />
                </div>
            </div>
        </div>
    )
}