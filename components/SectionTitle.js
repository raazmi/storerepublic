function SectionTitle({align = 'center', sectionName, sectionHeading}){
    const classNames = (align) => {
        if(align === 'left'){
            return 'mi-sectiontitle text-left';
        }else if(align === 'right'){
            return 'mi-sectiontitle text-right';
        }else{
            return 'mi-sectiontitle text-center';
        }
    }
    return(
        <div className={classNames(align)}>
            <h6>{sectionName}</h6>
            <h2>{sectionHeading}</h2>
        </div>
    )
}

export default SectionTitle;