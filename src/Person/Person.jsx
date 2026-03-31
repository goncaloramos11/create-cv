import "./Person.css"

function Person({person}){
    return(
        <div className="header">
            <div className="title">{person.name}</div>
            <div className="information">
                <div className="mail">{person.email}</div>
                <div className="number">{person.phone}</div>
                <div className="location">{person.location}</div>
            </div>
        </div>
    );
}

export default Person;