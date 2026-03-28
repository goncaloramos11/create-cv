import PersonForm from '../forms/PersonForm/PersonForm.jsx';
import EducationForm from '../forms/EducationForm/EducationForm.jsx';
import ExperienceForm from '../forms/ExperienceForm/ExperienceForm.jsx';

function FormDetails({cv, setCV}){
    return(
        <>
            <PersonForm cv = {cv} setCV = {setCV}></PersonForm>   
            <EducationForm></EducationForm>
            <ExperienceForm></ExperienceForm>
        </>
    );
}

export default FormDetails;