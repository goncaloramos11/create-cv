import "./Education.css";
function Education(){
    return (
    <div className="education">
        <div className="left-side">
            <div className="date">
                <div className="start-date">20/02/2022</div>
                <span>-</span>
                <div className="end-date">20/4/2026</div>
            </div>
            <div className="location">Lisbon</div>
        </div>
        <div className="right-side">
            <div className="school">London City University</div>
            <div className="degree">Bachelors in Economics</div>
        </div>
    </div>
    );
}

export default Education;
