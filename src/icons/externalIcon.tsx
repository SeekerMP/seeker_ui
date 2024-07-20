interface ExternalIconProps {
    className?: string
}

export const ExternalIcon = (props: ExternalIconProps) => {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path d="M15 3.5H20.5M20.5 3.5V9M20.5 3.5L12.5 11.5" stroke="#6D707C" className='icon-colored-stroke-part'></path>
                <path
                    d="M11.5 5.5H7.5C6.39543 5.5 5.5 6.39543 5.5 7.5V16.5C5.5 17.6046 6.39543 18.5 7.5 18.5H16.5C17.6046 18.5 18.5 17.6046 18.5 16.5V12.5"
                    stroke="#6D707C" className='icon-colored-stroke-part' strokeLinecap="round"></path>
            </g>
        </svg>
    )
}