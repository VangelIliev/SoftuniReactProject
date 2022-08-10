import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc,getDoc } from "firebase/firestore";
import { db } from '../firebaseConfig';
function RecipeDetails(){
    const [recipe, setRecipe] = useState({});
    const params = useParams();
    const recipeId = params.recipeId;
    
    async function getRecipe(recipeId) {
        try {
            const docRef = doc(db, "recipes", recipeId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setRecipe(docSnap.data());
            }
            else {
                alert("The Recipe doesn't exists")
            }
        } catch (error) {
            alert(error);
        }
    }
    useEffect( () => {
        getRecipe(recipeId);    
    },[recipeId])
    return(
        <div>This is the recipe details page {recipe.recipeName}</div>
    )
}

export default RecipeDetails;