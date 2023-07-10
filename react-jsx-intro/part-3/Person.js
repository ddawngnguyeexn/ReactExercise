const Person = ({name, age, hobbies}) => {
    const MAX_LENGTH = 6;
    return (
        <div>
            <p> Learn some information about this person</p>
            <ul>
            <li>Name: {name.slice(0,MAX_LENGTH)}</li>
            <li>Age: {age}</li>
                <ul>
                {hobbies.map(i => <li>{i}</li>)}
                </ul>
            </ul>
            <h3>{(age>=18) ? "Please go vote" : "You must be 18"}</h3>
        </div>

    )
}