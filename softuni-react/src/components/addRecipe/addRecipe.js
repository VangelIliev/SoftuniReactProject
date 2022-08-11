import styles from './addRecipe.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../firebaseConfig';
import { useContext } from 'react';
import { AuthContext } from "../contexts/UserContext";
function AddRecipe(){
    const [ingredient, setIngredient] = useState([]);
    const [quantity, setIngredientQuantity] = useState([]);
    const [ingredients, setIngredients] = useState([]);
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
    function setIngredientHandler(e){
        setIngredient(e.target.value);
    }
    function setIngredientQuantityHandler(e){
        setIngredientQuantity(e.target.value);
    }
    function addIngredient(){
        if(ingredient === ''){
            alert("Ingredient can't be empty")
        }
        else if(quantity === ''){
            alert("Quantity can't be empty")
        }
        else{
            const ingredientToAdd = {"ingredient":ingredient,"quantity":quantity};
            console.log(ingredientToAdd);
            setIngredients([...ingredients, ingredientToAdd]);
            setIngredient('');
            setIngredientQuantity('');
        }
    }
    useEffect(() => {
        setUser(applicationUser);
    },[applicationUser])
    
    const submitFormHandler = async (event) => {
        event.preventDefault();
        try {
            await addDoc(collection(db, "recipes"), {
                user:currentUser,
                recipeName:recipeName,
                ingredients:ingredients,
                timeToPrepare:timeToPrepare,
                description:description,
                category:category,
                recipeImage:recipeImage,
                servings:servings
            });
            navigate("/MyRecipes", { replace: true });          
          } catch (e) {
            console.error("Error adding document: ", e);
          }  
    }
    return (
        <div className={styles.container}>
                <div className={styles.screen}>
                    <div className={styles.content}>
                        <form className={styles.login} onSubmit={submitFormHandler}>
                            <div className={styles.field}>                                                                
                                <input type="text" className={styles.input} value={recipeName} onChange={recipeChangeHandler} placeholder="RecipeName" />                                
                            </div>
                            <div className={styles.field}>                                
                                <input type="text" className={styles.input} placeholder="Recipe Image" value={recipeImage} onChange={setRecipeImageHandler}  />                               
                            </div>
                            <div className={styles.selectField}>
                                <div>Category: </div>
                            <select onChange={setCategoryHandler} value={category}>
                                <option value="select">Select</option>
                                <option value="Breakfast">Breakfast</option>
                                <option value="Lunch">Lunch</option>
                                <option value="Dinner">Dinner</option>
                                <option value="Dessert">Dessert</option>
                            </select>
                            </div>
                            <div className={styles.field}>                                
                                <input type="number" className={styles.input} placeholder="Preparation Type" value={timeToPrepare} onChange={timeChangeHandler}  />                               
                            </div>
                            <div className={styles.field}>                                
                                <input type="number" className={styles.input} placeholder="Servings" value={servings} onChange={setServingsHandler}  />                               
                            </div>
                            <div className={styles.ingredients}>
                                <div className={styles.ingredientsTitle}>Ingredients</div>
                                <input type="text" className={styles.ingredient} placeholder="Ingredient" value={ingredient} onChange={setIngredientHandler}></input>
                                <input type="number" className={styles.quantity} placeholder="Quantity" value={quantity} onChange={setIngredientQuantityHandler}></input>
                                <button type="button" onClick={addIngredient} className={styles.ingredientsBtn}>Add Ingredient</button>
                                <div className={styles.allIngredients}>
                                    {ingredients.map((x, index) => {
                                        return (
                                            <div key={index}><span>{x.ingredient} : </span><span>{x.quantity} Grams</span></div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className={styles.field}>
                                <div className={styles.description}>Description</div>                                
                                <textarea className={styles.textArea} type="text" value={description} onChange={descriptionChangeHandler}></textarea>                            
                            </div>
                            <button className={styles.submit} type='submit'>
                                <span className={styles.text}>Add Recipe</span>                               
                            </button>
                        </form>
                    </div>
                </div>
            </div>
    )
}
export default AddRecipe;