import PersonForm from '../forms/PersonForm/PersonForm.jsx';
import EducationDisplay from '../forms/EducationForm/EducationDisplay.jsx';
import ExperienceForm from '../forms/ExperienceForm/ExperienceForm.jsx';
import "./FormDetails.css";
import "../forms/Forms.css"

function FormDetails({cv, setCV}){
    return(
        <div className="forms">
            <PersonForm cv = {cv} setCV = {setCV}></PersonForm>   
            <EducationDisplay></EducationDisplay>
            <ExperienceForm></ExperienceForm>
        </div>
    );
}

export default FormDetails;