import Header from './components/header/header'
import Register from './components/register/register'
import LogIn from './components/login/login';
import AddRecipe from './components/recipe/addRecipe';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { onAuthStateChanged} from "firebase/auth";
import { auth } from './components/firebaseConfig.js';
import './App.css';

function App() {

  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    console.log(user.email);
  })

  return (
    <div className="App">
        <Header user={user?.email}/>
        <Routes>
          <Route path='Register' element={<Register />} />
          <Route path='Login' element={<LogIn />} />
          <Route path="AddRecipe" element={<AddRecipe />} />
        </Routes>
    </div>
  );
}

export default App;
