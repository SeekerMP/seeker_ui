interface NextIconProps {
    className?: string
}

export const NextIcon = (props: NextIconProps) => {
    return (
        <svg className={props.className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
             stroke="#000000">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path className='icon-colored-stroke-part'
                      d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#6D707C"
                      strokeWidth="0.72" strokeLinecap="round" strokeLinejoin="round"></path>
                <path className='icon-colored-stroke-part' d="M10.74 15.53L14.26 12L10.74 8.46997" stroke="#6D707C"
                      strokeWidth="0.72" strokeLinecap="round"
                      strokeLinejoin="round"></path>
            </g>
        </svg>
    )
}