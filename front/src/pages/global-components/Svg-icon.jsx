// Componente para iconos svg, agregar un type para cada icono nuevo

function Icon({ type, height, width, classname }) {
    return (
        <>
            <svg className={classname} height={height} width={width} viewBox={`0 0 ${height} ${width}`} xmlns="http://www.w3.org/2000/svg">
                {type === 'leftArrow' ?
                    <path xmlns="http://www.w3.org/2000/svg" d="M19,11H9l3.29-3.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0l-4.29,4.3A2,2,0,0,0,6,12H6a2,2,0,0,0,.59,1.4l4.29,4.3a1,1,0,1,0,1.41-1.42L9,13H19a1,1,0,0,0,0-2Z" />
                    : type === 'rightArrow' ?
                        <path xmlns="http://www.w3.org/2000/svg" d="M18,12h0a2,2,0,0,0-.59-1.4l-4.29-4.3a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42L15,11H5a1,1,0,0,0,0,2H15l-3.29,3.29a1,1,0,0,0,1.41,1.42l4.29-4.3A2,2,0,0,0,18,12Z" />
                        : type === 'exclamationMark' ?
                            <>
                                <path xmlns="http://www.w3.org/2000/svg" d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z" />
                                <path xmlns="http://www.w3.org/2000/svg" d="M12,5a1,1,0,0,0-1,1v8a1,1,0,0,0,2,0V6A1,1,0,0,0,12,5Z" />
                                <rect xmlns="http://www.w3.org/2000/svg" x="11" y="17" width="2" height="2" rx="1" />
                            </>
                            : type === "userIcon" ?
                                <g xmlns="http://www.w3.org/2000/svg" id="_01_align_center" data-name="01 align center">
                                    <path d="M21,24H19V18.957A2.96,2.96,0,0,0,16.043,16H7.957A2.96,2.96,0,0,0,5,18.957V24H3V18.957A4.963,4.963,0,0,1,7.957,14h8.086A4.963,4.963,0,0,1,21,18.957Z" /><path d="M12,12a6,6,0,1,1,6-6A6.006,6.006,0,0,1,12,12ZM12,2a4,4,0,1,0,4,4A4,4,0,0,0,12,2Z" />
                                </g>
                                : type=== "assignUser" ? 
                                <>
                                <circle cx="9" cy="6" r="6"/><path d="M13.043,14H4.957A4.963,4.963,0,0,0,0,18.957V24H18V18.957A4.963,4.963,0,0,0,13.043,14Z"/><polygon points="21 10 21 7 19 7 19 10 16 10 16 12 19 12 19 15 21 15 21 12 24 12 24 10 21 10"/>
                               </>
                                :null}
            </svg>
        </>
    )
}

export default Icon;