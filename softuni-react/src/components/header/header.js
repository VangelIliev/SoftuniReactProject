import styles from './Header.module.css';
import { signOut } from "firebase/auth";
import { auth } from '../firebaseConfig.js';
function Header(props) {
    const logout = async () => {
        await signOut(auth);
      }
    return (
        <nav className="bg-dark navbar-dark navbar">
            <div className="row col-12 d-flex justify-content-center text-white">
                <ul className={styles.navigation}>
                    <li className={styles.item}><a className={styles.link} href="Home">Home</a></li>
                    <li className={styles.item}><a className={styles.link} href="Recipes">Recipes</a></li>
                    <li className={styles.item}><a className={styles.link} href="MyRecipes">My Recipes</a></li>
                    <li className={styles.item}><a className={styles.link} href="AddRecipe">Add Recipe</a></li>
                    <li className={styles.item}><a className={styles.link} href="About">About</a></li>
                    <button className={styles.userNav} onClick={logout}>Log Out</button>             
                    <li className={styles.userNav}><a className={styles.link} href="Register">Register</a></li>
                    <li className={styles.userNav}><a className={styles.link} href="Login">Login</a></li>
                    <li className={styles.userNav}><a className={styles.link} href="Login">{props.user.email}</a></li>                       
                </ul>
            </div>
        </nav>
    )
}
export default Header;