import {useState, useEffect} from 'react';
import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../firebaseConfig';
function Recipes(){

    const[result, setResult] = useState([]);
    async function getRecipes(){
        const dbQery = query(collection(db, "recipes"));
        const querySnapshot = await getDocs(dbQery);
        const recipesArray = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            recipesArray.push(data); 
            console.log(data);      
        })
        setResult(recipesArray);
    }
    useEffect(() => {       
       getRecipes();      
    },[]) 

    return(
        <div>{result[0]?.category}</div>
    )
}
export default Recipes;