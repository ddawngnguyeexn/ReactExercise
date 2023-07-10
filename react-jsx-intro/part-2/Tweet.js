const Tweet = ({username,name,date,msg}) => {
    return (
        <div className="tweet">
            <span>{name}</span>
            <span className="username"> {username}</span>
            
            <span className="date">{date}</span>
            <p>Message: {msg}</p>
        </div>
    )

}