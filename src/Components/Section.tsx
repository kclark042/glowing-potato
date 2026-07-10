type Styles = {
    background: string
    divider: string
}

type SectionItems = {
    title: string
    styles: Styles
}

const Section = ({ title, styles }: SectionItems) => {
    return (
        <div className={`${styles.background} size-auto rounded-sm`}>
            <h1 className="text-3xl font-bold">
                {title}
            </h1>
            <hr className={`h-2 ${styles.divider}`} />
            <div className="">hello world</div>


        </div>
    )
}

export default Section