import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import "./PreviewCV.css";

function PreviewCV(){
    return(
        <div className="cv">
            <div className="header">
                <div className="title">John Doe</div>
                <div className="information">
                    <div className="mail">johndoe@example.com</div>
                    <div className="number">999999999</div>
                    <div className="location">Lisbon</div>
                </div>
            </div>

            <div className="details">
                <h2>Education</h2>
                <Education></Education>
                <Education></Education>
                <h2>Professional Experience</h2>
                <Experience></Experience>
                <Experience></Experience>
                <Experience></Experience>
            </div>
        </div>
    );
}

export default PreviewCV