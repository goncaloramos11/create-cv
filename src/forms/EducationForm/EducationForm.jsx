
function EducationForm({ cv, setCV, toggleChange }){

    const handleChange = (e) =>{
        const value = e.target.name;
        const newEducation = [...cv.education];
        const lastIndex = newEducation.length - 1;
        

        newEducation[lastIndex] = {
                ...newEducation[lastIndex],
                [value]: e.target.value
            };

        const newCV = {
            ...cv,
            education: newEducation
        };    
        console.log(value);
        console.log(newCV);
        setCV(newCV);
    }

    return(
        <form>

            <div className="form-detail">
                <label htmlFor="school">School: </label>
                <input 
                    id="school"
                    onChange={handleChange}
                    type="text"
                    name="school"
                />
            </div>

            <div className="form-detail">
                <label htmlFor="degree">Degree: </label>
                <input 
                    id="degree"
                    onChange={handleChange}
                    type="text" 
                    name="degree"
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

            <button onClick={toggleChange}>Save</button>

        </form>

    )
}

export default EducationForm;