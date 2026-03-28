import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Person from "../Person/Person";
import "./PreviewCV.css";

function PreviewCV({person}){
    return(
        <div className="cv">
            <Person person = {person}/>

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