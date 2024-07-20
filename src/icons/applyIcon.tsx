interface ApplyIconProps {
    className?: string
}

export const ApplyIcon = (props: ApplyIconProps) => {
    return (
        <svg className={props.className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path  className='icon-colored-stroke-part' d="M9 12H15" stroke="#6D707C" strokeWidth="0.72" strokeLinecap="round"
                      strokeLinejoin="round"></path>
                <path  className='icon-colored-stroke-part' d="M12 9L12 15" stroke="#6D707C" strokeWidth="0.72" strokeLinecap="round"
                      strokeLinejoin="round"></path>
                <path className='icon-colored-stroke-part'
                    d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z"
                    stroke="#6D707C" strokeWidth="0.72"></path>
            </g>
        </svg>
    )
}