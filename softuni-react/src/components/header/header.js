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
    const isUserLogged = Object.keys(user).length === 0;

    const logout = async () => {
        await signOut(auth);
    }

     useEffect(() => {
        if(!isUserLogged){
            setUser(user);
        }
    }, [isUserLogged, user]);

    if(!isUserLogged){      
        return (
            <div className={styles.navbar}>
                <Link className={styles.navLink} to="/Recipes">Recipes</Link>
                <Link className={styles.navLink} to="/MyRecipes">My Recipes</Link>
                <div className={styles.dropdown}>
                    <button className={styles.dropbtn}>Categories</button>
                    <div className={styles.content}>
                        <Link to="#">Breakfast</Link>
                        <Link to="#">Lunch</Link>
                        <Link to="#">Dinner</Link>
                        <Link to="#">Dessert</Link>
                    </div>
                </div>
                <Link className={styles.navLink} to="/AddRecipe">Add Recipe</Link>
                <button className={styles.userNavButton} onClick={logout}>Log Out</button>             
                <button className={styles.userNavButtonUser}>Welcome  {currentUser}</button> 
            </div>
        )
    }
    else{
        return (           
            <div className={styles.navbar}>
                <Link className={styles.navLink} to="/Recipes">Recipes</Link>
                <div className={styles.dropdown}>
                    <button className={styles.dropbtn}>Categories</button>
                    <div className={styles.content}>
                        <Link to="#">Breakfast</Link>
                        <Link to="#">Lunch</Link>
                        <Link to="#">Dinner</Link>
                        <Link to="#">Dessert</Link>
                    </div>
                </div>
                <Link className={styles.authLinks} to="Register">Register</Link>
                <Link className={styles.authLinks} to="Login">Login</Link>
            </div>
        )
    }
}
export default Header;