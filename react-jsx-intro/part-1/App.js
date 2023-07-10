const App = () => {
    return (
        <div>
        <FirstComponent />
        <NamedComponent name="Dang" />
        </div>
    )
}

ReactDOM.render(<App />,document.getElementById("root"))