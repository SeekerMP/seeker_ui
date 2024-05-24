import './selectFilterSubtypeComponent.scss';
import {useEffect, useState} from "react";
import {JobFilterSubtypeEnum} from "../api-clients";

type SelectFilterSubtypeComponentProps = {
    mapName: (subtype: JobFilterSubtypeEnum) => string;
    onSelectedSubtypeChanged: (subtype: JobFilterSubtypeEnum) => void;
}

export const SelectFilterSubtypeComponent = (props: SelectFilterSubtypeComponentProps) => {
    const [showList, setShowList] = useState(false);
    const [selectedSubtype, setSelectedSubtype] = useState<JobFilterSubtypeEnum>(JobFilterSubtypeEnum.Content)

    const handleMouseEnter = () => setShowList(true);
    const handleMouseLeave = () => setShowList(false);

    useEffect(() => {
        setShowList(false);
        props.onSelectedSubtypeChanged(selectedSubtype);
    }, [selectedSubtype]);

    const renderedList =
        <div className='select-filter-subtype-items-list-container'>
            { (Object.keys(JobFilterSubtypeEnum) as Array<keyof typeof JobFilterSubtypeEnum>).map((key) =>
                <div key={ key } className='select-filter-subtype-items-list-item' onClick={ _=> setSelectedSubtype(JobFilterSubtypeEnum[key]) }>
                    { key }
                </div>
            )
            }
        </div>

    return (
        <div
            className='select-filter-subtype-component-container'
            onMouseEnter={ handleMouseEnter }
            onMouseLeave={ handleMouseLeave }
        >
            <div className={ `select-filter-subtype-component-selected-subtype select-filter-subtype-component-selected-subtype-${ selectedSubtype.toString().toLowerCase() }` }>
                { props.mapName(selectedSubtype) }
            </div>
            { showList ? renderedList : '' }
        </div>
    )
}