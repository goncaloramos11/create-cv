import "./Dropdown.css"
function Dropdown({toggle, data}) {

    const addData = () => {
        data.push({});
    }

    return (
        <div className="dropdown-ul">
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.school}</li>
                ))}
            </ul>
            <button onClick={() => {
                toggle();
                addData();
            }}>Add</button>

        </div>
    )
} 


export default Dropdown