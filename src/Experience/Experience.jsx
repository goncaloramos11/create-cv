import "./Experience.css"

function Experience(){
    return (
    <div className="experience">
        <div className="left-side">
            <div className="date">
                <div className="start-date">20/02/2022</div>
                <span>-</span>
                <div className="end-date">20/4/2026</div>
            </div>
            <div className="location">Lisbon</div>
        </div>
        <div className="right-side">
            <div className="company">Umbrella Inc.</div>
            <div className="position">UX & UI Designer</div>
            <div className="description">Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android</div>
        </div>
    </div>
    );
}

export default Experience;