import {useState } from "react";
import "./EducationForm.jsx";
import "./EducationForm.css"
import EducationForm from "./EducationForm.jsx";
import Dropdown from "../../Dropdown/Dropdown.jsx";
import person_data from "../../data/data.jsx";
import { GoChevronDown } from "react-icons/go";


function EducationDisplay({cv, setCV}){

    const [isActive, setIsActive] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const education = person_data.education

    const toggleChange = () => {
        setIsActive(!isActive)
    };

    const toggleDropDown = () => {
        setDropdown(!dropdown)
        console.log(dropdown);
        console.log(person_data);
    }   
    

    return (
        <div className="dropdown">
            <div onClick={toggleDropDown} className="dropdown-header">
                <div  className="education-title">
                    Education
                </div>
                <GoChevronDown 
                    size="24px"
                    style={{
                        transform: dropdown ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease'
                    }}
                />
            </div>


            {isActive ? (
                dropdown && 
                <EducationForm 
                cv={cv} 
                setCV={setCV} 
                toggleChange={toggleChange} 
                />
            ) : (
                dropdown && <Dropdown toggle={toggleChange} data={education} />
            )}
        </div>

    );
}

export default EducationDisplay;