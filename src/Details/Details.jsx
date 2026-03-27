import PersonForm from "../forms/PersonForm/PersonForm.jsx";
import EducationForm from "../forms/EducationForm/EducationForm.jsx";
import ExperienceForm from "../forms/ExperienceForm/ExperienceForm.jsx";


function Details(){
    return(
        <>
            <PersonForm></PersonForm>   
            <EducationForm></EducationForm>
            <ExperienceForm></ExperienceForm>
        </>
    );
}

export default Details;