import "./PersonForm.css";

function PersonForm({ cv, setCV }){

    const handleChange = (e) =>{
        const newCV = {
            ...cv,
            person:{
                name: e.target.value
            }
        };
        setCV(newCV);
    }

    return(
        <form>
            <label htmlFor="name">Name: </label>
            <input 
                onChange={handleChange}
                type="text" 
            />
        </form>
    )
}

export default PersonForm;