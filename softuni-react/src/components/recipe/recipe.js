function Recipe(props) {
    var currentRecipe = props.currentRecipe;
    return (
        <li>
            <div>
                <h2>{currentRecipe.description}</h2>
                <div className="imageContainer">
                    <img alt="test" src={currentRecipe.recipeImage}></img>
                </div>
                <div>
                    <div>
                        {currentRecipe.category}
                    </div>
                    <div>
                        {currentRecipe.timeToPrepare}
                    </div>
                    <div>{currentRecipe.description}</div>
                </div>
            </div>
        </li>
    )
}

export default Recipe;