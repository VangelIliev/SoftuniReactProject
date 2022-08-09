import styles from './Header.module.css';
import { signOut } from "firebase/auth";
import { auth } from '../firebaseConfig.js';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { AuthContext } from "../contexts/UserContext";
function Header() {
    const user = useContext(AuthContext);
    const [currentUser, setUser] = useState("");

    const logout = async () => {
        await signOut(auth);
      }
     const isUserLogged = Object.keys(user).length === 0;
     useEffect(() => {
        if(!isUserLogged){
            setUser(user);
        }
    }, [isUserLogged, user]);
    if(!isUserLogged){      
        return (
            <nav className="bg-dark navbar-dark navbar">
            <div className="row col-12 d-flex justify-content-center text-white">
                <ul className={styles.navigation}>
                    <li className={styles.item}><Link className={styles.link} to="/Recipes">Recipes</Link></li>
                    <li className={styles.item}><Link className={styles.link} to="/MyRecipes">My Recipes</Link></li>
                    <li className={styles.item}><Link className={styles.link} to="/AddRecipe">Add Recipe</Link></li>
                    <li className={styles.item}><Link className={styles.link} to="/About">About</Link></li>
                    <button className={styles.userNavButton} onClick={logout}>Log Out</button>             
                    <button className={styles.userNavButton}>Welcome  {currentUser}</button>                        
                </ul>
            </div>
        </nav>
        )
    }
    else{
        return (
            <nav className="bg-dark navbar-dark navbar">
                <div className="row col-12 d-flex justify-content-center text-white">
                    <ul className={styles.navigation}>
                        <li className={styles.item}><Link className={styles.link} to="/Recipes">Recipes</Link></li>
                        <li className={styles.item}><Link className={styles.link} to="/About">About</Link></li>      
                        <li className={styles.userNav}><Link className={styles.link} to="Register">Register</Link></li>
                        <li className={styles.userNav}><Link className={styles.link} to="Login">Login</Link></li>                 
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Header;