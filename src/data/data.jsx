const person_data = 
{
    person: { name: "John Doe", email: "johndoe@example.com", phone: 999999999, location: "Lisboa"},
    education: [{id: crypto.randomUUID(), school: "London City University", degree: "Bachelors in Economics", start: "08/2020", end: "present", location: "New York City"},
                {id: crypto.randomUUID(), school: "Lisbon City University", degree: "Random in Economics", start: "02/2020", end: "06/2023", location: "Lisbon"}
            ],
    experience: [{id: crypto.randomUUID(), company: "Umbrella Inc.", position: "UX & UI Designer", start: "08/2020", end: "present", location: "New York City", description: "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android"}]
}

export default person_data;