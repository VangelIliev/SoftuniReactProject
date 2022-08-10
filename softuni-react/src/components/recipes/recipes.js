import { useState, useEffect } from 'react';
import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../firebaseConfig';
import  Recipe  from "../recipe/recipe.js";
function Recipes(){
    const[result, setResult] = useState([]);
    async function getRecipes(){
        const dbQery = query(collection(db, "recipes"));
        const querySnapshot = await getDocs(dbQery);
        const recipesArray = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            data.Id = doc.id;
            recipesArray.push(data);    
        })
        setResult(recipesArray);
    }
    useEffect(() => {       
       getRecipes();      
    },[]) 

    return(
        <ul style={{width:"100%",textAlign:"center"}}>
            {result.map((recipe) =>
              <Recipe key={recipe.Id} currentRecipe={recipe}/>
            )}
        </ul>
    )
}
export default Recipes;