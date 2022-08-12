import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, query,where, getDocs } from "firebase/firestore";
import { db } from '../firebaseConfig';
import  Recipe  from "../recipe/recipe.js";
function Categories(){
    const params = useParams();
    const category = params.category;
    const[recipes, setResult] = useState([]);
    async function getRecipes(){
        const dbQery = query(collection(db, "recipes"), where("category", "==", category));
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
     // getRecipes by category only if the params change
     // eslint-disable-next-line react-hooks/exhaustive-deps
     },[category])
     if(recipes.length > 0){
        return(
        
            <ul style={{width:"100%",textAlign:"center"}}>
            {recipes.map((recipe) =>
              <Recipe key={recipe.Id} currentRecipe={recipe}/>
            )}
        </ul>
        )
     }
     else{
        return <h1>There are no recipes with this category please add </h1>
     }    
}
export default Categories;