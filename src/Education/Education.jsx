import "./Education.css";
function Education({education}){
    return (
    <div className="education">
        <div className="left-side">
            <div className="date">
                <div className="start-date">{education.start}</div>
                <span>-</span>
                <div className="end-date">{education.end}</div>
            </div>
            <div className="location">{education.location}</div>
        </div>
        <div className="right-side">
            <div className="school">{education.school}</div>
            <div className="degree">{education.degree}</div>
        </div>
    </div>
    );
}

export default Education;
