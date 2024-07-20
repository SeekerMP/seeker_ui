interface ImportantIconProps {
    className?: string
}

export const ImportantIcon = (props: ImportantIconProps) => {
    return (
        <svg className={ `icon-colored-stroke-part icon-colored-fill-part ${ props.className }`} viewBox="0 0 48 48" id="a" xmlns="http://www.w3.org/2000/svg" fill="#6D707C" stroke="#6D707C"
             strokeWidth="1.44">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <defs>
                    <style>{`.c{fill:none;stroke-linecap:round;stroke-linejoin:round;}`}</style>
                </defs>
                <g>
                    <path className="c"
                          d="m41.6801,13.015h-16.91c-2-.1-5.93-4.23-8.19-4.23H6.6801c-1.204-.0003-2.1803.9754-2.1806,2.1794,0,.0169.0002.0337.0006.0506h0v7.29h39v-3.42c.0221-1.0104-.7791-1.8475-1.7895-1.8696-.0102-.0002-.0203-.0004-.0305-.0004Z"></path>
                    <path className="c"
                          d="m4.5001,18.295v18.72c-.0111,1.2039.956,2.1889,2.1599,2.1999.0034,0,.0067,0,.0101,0h34.65c1.204,0,2.18-.9759,2.1801-2.1799,0-.0067,0-.0134,0-.0201h0v-18.72"></path>
                </g>
                <g>
                    <circle className="b icon-colored-fill-part" fill="#6D707C" cx="36.285" cy="33.7264" r=".75"></circle>
                    <line className="c icon-colored-stroke-part" stroke="#6D707C" x1="36.285" y1="22.755" x2="36.285" y2="30.915"></line>
                </g>
            </g>
        </svg>
    )
}