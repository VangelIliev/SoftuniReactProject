import styles from './Header.module.css';
function Header() {
    return (
        <nav className="bg-dark navbar-dark navbar">
            <div className="row col-12 d-flex justify-content-center text-white">
                <ul className={styles.navigation}>
                    <li className={styles.item}><a className={styles.link} href="Home">Home</a></li>
                    <li className={styles.item}><a className={styles.link} href="Recipes">Recipes</a></li>
                    <li className={styles.item}><a className={styles.link} href="MyRecipes">My Recipes</a></li>
                    <li className={styles.item}><a className={styles.link} href="AddRecipe">Add Recipe</a></li>
                    <li className={styles.item}><a className={styles.link} href="About">About</a></li>
                    <li className={styles.userNav}><a className={styles.link} href="Logout">LogOut</a></li>             
                    <li className={styles.userNav}><a className={styles.link} href="Register">Register</a></li>
                    <li className={styles.userNav}><a className={styles.link} href="Login">Login</a></li>                         
                </ul>
            </div>
        </nav>
    )
}
export default Header;