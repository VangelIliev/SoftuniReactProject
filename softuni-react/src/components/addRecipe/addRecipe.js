import styles from './addRecipe.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../firebaseConfig';
import { useContext } from 'react';
import { AuthContext } from "../contexts/UserContext";
function AddRecipe(){
    const [nameError, setNameError] = useState('');
    const [imageError, setImageError] = useState('');
    const [categoryError, setCategoryError] = useState('');
    const [preparationError, setPreparationError] = useState('');
    const [servingsError, setServingsError] = useState('');
    const [ingredientError, setIngredientError] = useState('');
    const [quantityError, setQuantityError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');
    const [ingredient, setIngredient] = useState('');
    const [quantity, setIngredientQuantity] = useState('');
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

    function setErrorHandler(e){
        var inputName = e.target.name;
        var inputValue = e.target.value;
        if(inputName === "Name"){
            if(inputValue === ''){
                setNameError("Name can't be empty");
            }
            else if(inputValue.length < 6){
                setNameError("Name must be atleast 6 chars");
            }
            else{
                setNameError("");
            }
        }
        else if(inputName === "Image"){
            if(inputValue === ''){
                setImageError("Image can't be empty");
            }
            
            else{
                setImageError("");
            }
        }
        else if(inputName === "Category"){
            if(inputValue === ''){
                setCategoryError("Category can't be empty");
            }
            
            else{
                setCategoryError("");
            }
        }
        else if(inputName === "Preparation"){
            if(inputValue === ''){
                setPreparationError("Preparation can't be empty");
            }
            
            else{
                setPreparationError("");
            }
        }
        else if(inputName === "Servings"){
            if(inputValue === ''){
                setServingsError("Servings can't be empty");
            }
            
            else{
                setServingsError("");
            }
        }
        else if(inputName === "Ingredient"){
            if(inputValue === ''){
                setIngredientError("Ingredient can't be empty");
            }
            else if(inputValue.length < 3){
                setIngredientError("Ingredient can't be less than 3 symbols");
            }
            else{
                setIngredientError("");
            }
        }
        else if(inputName === "Quantity"){
            if(inputValue === ''){
                setQuantityError("Quantity can't be empty");
            }
            
            else{
                setQuantityError("");
            }
        }
        else if(inputName === "Description"){
            if(inputValue === ''){
                setDescriptionError("Description can't be empty");
            }
            else if(inputValue.length < 10){
                setDescriptionError("Description can't be less than 10 symbols");
            }
            else{
                setDescriptionError("");
            }
        }

    }
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
        console.log(ingredient);  
        if(ingredient !== '' && quantity !== ''){
            const ingredientToAdd = { "ingredient": ingredient, "quantity": quantity };
            setIngredients([...ingredients, ingredientToAdd]);
            setIngredient('');
            setIngredientQuantity('');  
        }     
    }
    function validateRecipe(){
        var error = false;
        if(recipeName === '' || recipeName.length <= 6){
            error = true           
        }
        else if(recipeImage === ''){
            error = true          
        }
        else if(category === ''){
            error = true
        }
        else if(timeToPrepare === ''){
            error = true
        }
        else if(servings === ''){
            error = true
        }
        else if(ingredients.length === 0){
            error = true;
        }
                 
        else if(description === '' || description.length < 10){
            error = true
        }        
        
        return error;
    }
    useEffect(() => {
        setUser(applicationUser);
    },[applicationUser])
    
    const submitFormHandler = async (event) => {
        event.preventDefault();
        var isValidated = validateRecipe();
        if(isValidated){
            return alert("Some fields are missing");
        }
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
                                <input type="text" name="Name" className={styles.input} value={recipeName} onChange={recipeChangeHandler} placeholder="RecipeName" onBlur={setErrorHandler} />
                                <div className={styles.error}>{nameError}</div>                                        
                            </div>
                            <div className={styles.field}>                                
                                <input type="text" name="Image" className={styles.input} placeholder="Recipe Image" value={recipeImage} onChange={setRecipeImageHandler} onBlur={setErrorHandler}  />
                                <div className={styles.error}>{imageError}</div>                             
                            </div>
                            <div className={styles.selectField}>
                                <div>Category: </div>
                            <select onChange={setCategoryHandler} name="Category" value={category} onBlur={setErrorHandler}>
                                <option value="">Select</option>
                                <option value="Breakfast">Breakfast</option>
                                <option value="Lunch">Lunch</option>
                                <option value="Dinner">Dinner</option>
                                <option value="Dessert">Dessert</option>
                            </select>
                            <div className={styles.error}>{categoryError}</div>
                            </div>
                            <div className={styles.field}>                                
                                <input type="number" name="Preparation" className={styles.input} placeholder="Preparation Time" value={timeToPrepare} onChange={timeChangeHandler} onBlur={setErrorHandler} />
                                <div className={styles.error}>{preparationError}</div>                             
                            </div>
                            <div className={styles.field}>                                
                                <input type="number" name="Servings" className={styles.input} placeholder="Servings" value={servings} onChange={setServingsHandler}  onBlur={setErrorHandler}/>
                                <div className={styles.error}>{servingsError}</div>                                
                            </div>
                            <div className={styles.ingredients}>
                                <div className={styles.ingredientsTitle}>Ingredients</div>
                                <input type="text" name="Ingredient" className={styles.ingredient} placeholder="Ingredient" value={ingredient} onChange={setIngredientHandler} onBlur={setErrorHandler}></input>
                                <div className={styles.error}>{ingredientError}</div>
                                <input type="number" name="Quantity" className={styles.quantity} placeholder="Quantity" value={quantity} onChange={setIngredientQuantityHandler} onBlur={setErrorHandler}></input>
                                <div className={styles.error}>{quantityError}</div>
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
                                <textarea className={styles.textArea} name="Description" type="text" value={description} onChange={descriptionChangeHandler} onBlur={setErrorHandler}></textarea>
                                <div className={styles.error}>{descriptionError}</div>                          
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