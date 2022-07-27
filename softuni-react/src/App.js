import Header from './components/header/header'
import Register from './components/register/register'
import LogIn from './components/login/login';
import AddRecipe from './components/recipe/addRecipe';
import Recipes from  './components/recipes/recipes';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { onAuthStateChanged} from "firebase/auth";
import { auth } from './components/firebaseConfig.js';
import './App.css';

function App() {

  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })

  return (
    <div className="App">
        <Header user={user?.email}/>
        <Routes>
          <Route path='Register' element={<Register />} />
          <Route path='Login' element={<LogIn />} />
          <Route path="AddRecipe" element={<AddRecipe />} />
          <Route path="MyRecipes" element={<Recipes />} />
        </Routes>
    </div>
  );
}

export default App;
