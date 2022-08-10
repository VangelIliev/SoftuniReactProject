import styles from './addRecipe.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../firebaseConfig';
import { useContext } from 'react';
import { AuthContext } from "../contexts/UserContext";
import { v4 as uuidv4 } from 'uuid';
function AddRecipe(props){
    // const userEmail = props.email;
    const [recipeName, setRecipeName] = useState('');
    const [recipeImage, setRecipeImage] = useState('');
    const [timeToPrepare, setTimeToPrepare] = useState('');
    const [description, setRecipeDescription] = useState('');
    const [category, setCategory] = useState('select');
    const [currentUser, setUser] = useState('');
    const [servings, setServings] = useState('');

    const navigate = useNavigate();
    const applicationUser = useContext(AuthContext);
    function recipeChangeHandler(e){
        setRecipeName(e.target.value);
    }
    function timeChangeHandler(e){
        setTimeToPrepare(e.target.value);
    }
    function descriptionChangeHandler(e){
        setRecipeDescription(e.target.value);
    }
    function setCategoryHandler(e){
        setCategory(e.target.value);
    }
    function setRecipeImageHandler(e){
        setRecipeImage(e.target.value);
    }
    function setServingsHandler(e){
        setServings(e.target.value);
    }
    useEffect(() => {
        setUser(applicationUser);
    },[applicationUser])
    
    const submitFormHandler = async (event) => {
        event.preventDefault();
        try {
            await addDoc(collection(db, "recipes"), {
                recipeId:uuidv4(),
                user:currentUser,
                recipeName:recipeName,
                timeToPrepare:timeToPrepare,
                description:description,
                category:category,
                recipeImage:recipeImage
            });
            navigate("/MyRecipes", { replace: true });          
          } catch (e) {
            console.error("Error adding document: ", e);
          }  
    }
    return (
        <div className={styles.formWrapper}>
        <form onSubmit={submitFormHandler}>
            <h1 className={styles.headerAddRecipe}>Add a Recipe</h1>
            <div className={styles.form}>
            <div className={styles.formFieldWrapper}>
                <div>
                <label className={styles.formLabel} htmlFor='recipeName'>RecipeName:</label>
                </div>
                <input className={styles.formInput} type="text" value={recipeName} onChange={recipeChangeHandler}></input>
            </div>
            <div className={styles.formFieldWrapper}>
                <div>
                <label className={styles.formLabel} htmlFor='recipeImage'>RecipeImageUrl:</label>
                </div>
                <input className={styles.formInput} type="text" value={recipeImage} onChange={setRecipeImageHandler}></input>
            </div>
            <div className={styles.formFieldWrapper}>
                <div>
                <label className={styles.formLabel} htmlFor='category'>Category:</label>
                </div>
               <select className={styles.select}  onChange={setCategoryHandler} value={category}>
                  <option value="select">Select</option>
                  <option value="Breakfast">Breakfast</option>
                  <option value="Lunch">Lunch</option>
                  <option value="Dinner">Dinner</option>
                  <option value="Dessert">Dessert</option>
               </select>
           </div>
            <div className={styles.formFieldWrapper}>
                <div>
                <label className={styles.formLabel} htmlFor='timeToPrepare'>Preparation Time:</label>
                </div>
                <input className={styles.formInput} type="number" value={timeToPrepare} onChange={timeChangeHandler}></input>
            </div>
            <div className={styles.formFieldWrapper}>
                <div>
                <label className={styles.formLabel} htmlFor='servings'>Servings:</label>
                </div>
                <input className={styles.formInput} type="number" value={servings} onChange={setServingsHandler}></input>
            </div>
            <div className={styles.formFieldWrapper}>
                <div>
                <label className={styles.formLabel} htmlFor='description'>Description:</label>
                </div>
                <textarea className={styles.formInput} type="text" value={description} onChange={descriptionChangeHandler}></textarea>
            </div>
            </div>
            <div>
                <button className={styles.buttonRegister} type='submit'>Add</button>
            </div>
        </form>
        </div>
    )
}
export default AddRecipe;