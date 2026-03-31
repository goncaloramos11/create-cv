import PersonForm from '../forms/PersonForm/PersonForm.jsx';
import EducationForm from '../forms/EducationForm/EducationForm.jsx';
import ExperienceForm from '../forms/ExperienceForm/ExperienceForm.jsx';
import "./FormDetails.css";
import "../forms/Forms.css"

function FormDetails({cv, setCV}){
    return(
        <div className="forms">
            <PersonForm cv = {cv} setCV = {setCV}></PersonForm>   
            <EducationForm></EducationForm>
            <ExperienceForm></ExperienceForm>
        </div>
    );
}

export default FormDetails;