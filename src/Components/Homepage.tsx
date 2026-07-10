import Section from "./Section"

const teal = 'bg-teal-600'
const gray = 'bg-gray-500'

const Homepage = () => {

    return (
        <div className="">
            <Section title={"About Me"} styles={{ background: teal, divider: gray }} />
            <Section title={"My Work Experience"} styles={{ background: gray, divider: teal }} />
            <Section title={"Languages and Other Technology"} styles={{ background: teal, divider: gray }} />
            <Section title={"Hobbies"} styles={{ background: gray, divider: teal }} />
            <Section title={"Contact Me"} styles={{ background: teal, divider: gray }} />
        </div>
    )

}

export default Homepage