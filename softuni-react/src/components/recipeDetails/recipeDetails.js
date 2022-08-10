import { useParams } from "react-router-dom";

function RecipeDetails(){
    const params = useParams();
    return(
        <div>This is the recipe details page {params.recipeId}</div>
    )
}

export default RecipeDetails;