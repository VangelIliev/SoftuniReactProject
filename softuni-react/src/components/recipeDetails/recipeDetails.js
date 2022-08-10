import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc,getDoc } from "firebase/firestore";
import { db } from '../firebaseConfig';
import styles from './RecipeDetails.module.css';
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
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.image}>
                    <img alt={recipe.recipeName} src={recipe.recipeImage} />
                </div>
                <div className={styles.content}>
                    <h4>{recipe.recipeName}</h4>
                    <p>Category: <strong>{recipe.category}</strong></p>
                    <p>Servings: <strong>{recipe.servings}</strong></p>
                    <p>Preparation Time: <strong>{recipe.timeToPrepare} minutes</strong></p>
                    <p>Description: <strong>{recipe.description}</strong></p>
                    <button className={styles.buttonRed}>Delete</button>
                    <button className={styles.buttonBlue}>Edit</button>
                </div>
            </div>
        </div>
    )
}

export default RecipeDetails;