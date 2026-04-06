import PersonForm from '../forms/PersonForm/PersonForm.jsx';
import EducationDisplay from '../forms/EducationForm/EducationDisplay.jsx';
import ExperienceDisplay from '../forms/ExperienceForm/ExperienceDisplay.jsx';

import "./FormDetails.css";
import "../forms/Forms.css"

function FormDetails({cv, setCV}){
    return(
        <div className="forms">
            <PersonForm cv = {cv} setCV = {setCV}></PersonForm>   
            <EducationDisplay cv = {cv} setCV={setCV}></EducationDisplay>
            <ExperienceDisplay cv = {cv} setCV={setCV}></ExperienceDisplay>

        </div>
    );
}

export default FormDetails;