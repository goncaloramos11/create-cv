function Person({person}){
    return(
        <div className="header">
            <div className="title">{person.name}</div>
            <div className="information">
                <div className="mail">johndoe@example.com</div>
                <div className="number">999999999</div>
                <div className="location">Lisbon</div>
            </div>
        </div>
    );
}

export default Person;