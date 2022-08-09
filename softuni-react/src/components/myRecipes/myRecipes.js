import {useState, useEffect} from 'react';
import { collection, query,where, getDocs } from "firebase/firestore";
import { db } from '../firebaseConfig';
import { AuthContext } from "../contexts/UserContext";
import { useContext } from 'react';
function MyRecipes(){

    const[recipes, setResult] = useState([]);   
    const applicationUser = useContext(AuthContext);
    
    async function getRecipes(){
        const dbQery = query(collection(db, "recipes"), where("user", "==", applicationUser));
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]) 
    return(
        <div>{recipes[0]?.category}</div>
    )
}
export default MyRecipes;