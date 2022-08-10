import Header from './components/header/header'
import Register from './components/register/register'
import LogIn from './components/login/login';
import AddRecipe from './components/addRecipe/addRecipe';
import Recipes from  './components/recipes/recipes';
import MyRecipes from './components/myRecipes/myRecipes';
import RecipeDetails from './components/recipeDetails/recipeDetails';
import { Routes, Route} from 'react-router-dom';
import { useState} from 'react';
import { onAuthStateChanged} from "firebase/auth";
import { auth } from './components/firebaseConfig.js';
import { AuthContext } from './components/contexts/UserContext';

import './App.css';

function App() {

  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    if(currentUser){
      setUser(currentUser.email);
    }
    else{
      setUser('');
    }
  })

  return (
    <div className="App">
        <AuthContext.Provider value={user}>
        <Header/>
        <Routes>
          <Route path='Register' element={ <Register /> } />
          <Route path='Login' element={ <LogIn /> } />
          <Route path="AddRecipe" element={ <AddRecipe /> } />
          <Route path="Recipes" element={ <Recipes /> } />
          <Route path="MyRecipes" element={ <MyRecipes/> } />
          <Route path="RecipeDetails/:recipeId" element={ <RecipeDetails/> } />
        </Routes>
        </AuthContext.Provider>

    </div>
  );
}

export default App;
