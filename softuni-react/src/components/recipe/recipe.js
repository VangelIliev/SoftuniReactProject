function Recipe(props){
    return (
        <div>
            <h2>{props.title}</h2>
            <div className="imageContainer">
                <image src={props.recipeName}></image>
            </div>
            <div>
                <div>
                    {props.category}
                </div>
                <div>
                    {props.timeToPrepare}
                </div>
                <div>{props.description}</div>
            </div>
        </div>
    )
}

export default Recipe;