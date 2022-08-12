import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc,getDoc, deleteDoc } from "firebase/firestore";
import { db } from '../firebaseConfig';
import styles from './RecipeDetails.module.css';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from "../contexts/UserContext";
import EditCurrentRecipe from "../editRecipe/editRecipe";
function RecipeDetails(){
    const [recipe, setRecipe] = useState({});
    const [editRecipe, changeRecipe] = useState(false);
    const params = useParams();
    const recipeId = params.recipeId;
    const applicationUser = useContext(AuthContext);
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
        changeRecipe(true);
    }
    useEffect( () => {
        getRecipe(recipeId);    
    },[recipeId])
    if(applicationUser === ''){
        return <h1>please login</h1>
    }
    else if(!editRecipe){
        return(
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.image}>
                        <img alt={recipe.recipeName} src={recipe.recipeImage} />
                    </div>
                    <div className={styles.content}>
                        <h4>{recipe.recipeName}</h4>
                        <div className={styles.ingredients}>
                            <p>Ingredients</p>
                            {recipe.ingredients?.map((x, index) => {
                                return (<p key={index}>{x.ingredient} : {x.quantity} Grams</p>)
                            })}
                        </div>
                            <p className={styles.paragraph}>Category: <strong>{recipe.category}</strong></p>
                            <p className={styles.paragraph}>Servings: <strong>{recipe.servings}</strong></p>
                            <p className={styles.paragraph}>Preparation Time: <strong>{recipe.timeToPrepare} minutes</strong></p>
                            <p className={styles.paragraph}>Description: <strong>{recipe.description}</strong></p>          
                            <button className={styles.buttonRed} onClick={DeleteRecipe}>Delete</button>
                            <button className={styles.buttonBlue} onClick={EditRecipe}>Edit</button>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return <EditCurrentRecipe recipe={recipe}></EditCurrentRecipe>
    }
}

export default RecipeDetails;