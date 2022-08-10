import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc,getDoc, deleteDoc } from "firebase/firestore";
import { db } from '../firebaseConfig';
import styles from './RecipeDetails.module.css';
import { useNavigate } from "react-router-dom";
function RecipeDetails(){
    const [recipe, setRecipe] = useState({});
    const params = useParams();
    const recipeId = params.recipeId;
    const navigate = useNavigate();

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
    async function DeleteRecipe(){
        try {
            const docRef = doc(db, "recipes", recipeId);
            await deleteDoc(docRef);
            navigate("/MyRecipes", { replace: true });   
        } catch (error) {
            alert(error);
        }
    }
    function EditRecipe(){
        alert("iskam da napravq edit po tazi recepta");
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
                    <button className={styles.buttonRed} onClick={DeleteRecipe}>Delete</button>
                    <button className={styles.buttonBlue} onClick={EditRecipe}>Edit</button>
                </div>
            </div>
        </div>
    )
}

export default RecipeDetails;