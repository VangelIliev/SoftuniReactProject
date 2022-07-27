import {useState, useEffect} from 'react';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebaseConfig';
function Recipes(){

    const[result, setResult] = useState([]);

    async function getRecipes(){
        const dbQery = query(collection(db, "recipes"));
        const querySnapshot = await getDocs(dbQery);
        const recipesArray = [];
        setResult(result => [...result, querySnapshot]);
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            console.log(data);       
        })
        console.log(recipesArray);
    }
    
    useEffect(() => {
        getRecipes();
        console.log(result);
        
    },[])

    return(
        <div>
            <ul></ul>
        </div>
    )
}
export default Recipes;