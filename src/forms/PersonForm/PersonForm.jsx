import "./PersonForm.css"

function PersonForm({ cv, setCV }){

    const handleChange = (e) =>{
        const value = e.target.name;
        const newCV = {
            ...cv,
            person:{
                ...cv.person,
                [value]: e.target.value
            }
        };
        setCV(newCV);
    }

    return(
        <form className="style-box">
            <h1>Person Details</h1>

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

export default PersonForm;