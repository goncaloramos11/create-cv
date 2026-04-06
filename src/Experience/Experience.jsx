import "./Experience.css"

function Experience({experience}){
    return (
    <div className="experience">
        <div className="left-side">
            <div className="date">
                <div className="start-date">{experience.start}</div>
                <span>-</span>
                <div className="end-date">{experience.end}</div>
            </div>
            <div className="location">{experience.location}</div>
        </div>
        <div className="right-side">
            <div className="company">{experience.company}</div>
            <div className="position">{experience.position}</div>
            <div className="description">{experience.description}</div>
        </div>
    </div>
    );
}

export default Experience;