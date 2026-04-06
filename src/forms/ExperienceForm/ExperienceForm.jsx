import "./ExperienceForm.css";

function ExperienceForm({ cv, setCV }){

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
        <form className="style-box">
            <h1>Experience</h1>

            <div className="form-detail">
                <label htmlFor="name">Name: </label>
                <input 
                    id="name"
                    onChange={handleChange}
                    type="text"
                    name="name"
                />
            </div>

            <div className="form-detail">
                <label htmlFor="email">Email: </label>
                <input 
                    id="email"
                    onChange={handleChange}
                    type="email" 
                    name="email"
                />
            </div>

            <div className="form-detail">
                <label htmlFor="phone">Phone: </label>
                <input 
                    id="phone"
                    onChange={handleChange}
                    type="number" 
                    name="phone"
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

        </form>
    )
}

export default ExperienceForm;