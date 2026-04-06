import {useState } from "react";
import "./ExperienceForm.jsx";
import "./ExperienceForm.css"
import Dropdown from "../../Dropdown/Dropdown.jsx";
import person_data from "../../data/data.jsx";
import { GoChevronDown } from "react-icons/go";
import ExperienceForm from "./ExperienceForm.jsx";


function ExperienceDisplay({cv, setCV}){

    const [isActive, setIsActive] = useState(false);
    const [dropdown, setDropdown] = useState(false);

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
                <div  className="experience-title">
                    Experience
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
                <ExperienceForm 
                cv={cv} 
                setCV={setCV} 
                toggleChange={toggleChange} 
                />
            ) : (
                dropdown && <Dropdown toggle={toggleChange} data={cv.experience} />
            )}
        </div>

    );
}

export default ExperienceDisplay;