import "./ExperienceForm.css";

function ExperienceForm({ cv, setCV, toggleChange }){

    const handleChange = (e) =>{
        const value = e.target.name;
        const newExperience = [...cv.experience];
        const lastIndex = newExperience.length - 1;
        

        newExperience[lastIndex] = {
                ...newExperience[lastIndex],
                [value]: e.target.value
            };

        const newCV = {
            ...cv,
            experience: newExperience
        };    
        console.log(value);
        console.log(newCV);
        setCV(newCV);
    }

    return(
        <form>

            <div className="form-detail">
                <label htmlFor="company">Company: </label>
                <input 
                    id="company"
                    onChange={handleChange}
                    type="text"
                    name="company"
                />
            </div>

            <div className="form-detail">
                <label htmlFor="position">Position Title: </label>
                <input 
                    id="school"
                    onChange={handleChange}
                    type="text"
                    name="position"
                />
            </div>

            <div className="form-detail">
                <label htmlFor="start">Start Date: </label>
                <input 
                    id="start"
                    onChange={handleChange}
                    type="text" 
                    name="start"
                />
            </div>

            <div className="form-detail">
                <label htmlFor="end">End Date: </label>
                <input 
                    id="end"
                    onChange={handleChange}
                    type="text" 
                    name="end"
                />
            </div>

            <div className="form-detail">
                <label htmlFor="location">Location: </label>
                <input 
                    id="location"
                    onChange={handleChange}
                    type="text" 
                    name="location"
                />
            </div>

            <div className="form-detail">
                <label htmlFor="description">Description: </label>
                <input 
                    id="description"
                    onChange={handleChange}
                    type="textarea" 
                    name="description"
                />
            </div>

            <button onClick={toggleChange}>Save</button>


        </form>
    )
}

export default ExperienceForm;