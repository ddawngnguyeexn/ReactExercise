const NamedComponent = (props) => {
    return (
        <p>My name is {props.name}</p>
    )
}

// ReactDOM.render(<NamedComponent name="Dang" />, document.getElementById("root"))