function Recipe(props) {
    return (
        <li>
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
        </li>
    )
}

export default Recipe;