import styles from './header.module.css';
function Header() {
    return (
        <nav className="bg-dark navbar-dark navbar">
            <div className="row col-12 d-flex justify-content-center text-white">
                <ul className={styles.navigation}>
                    <li className={styles.item}><a className={styles.link} href="#home">Home</a></li>
                    <li className={styles.item}><a className={styles.link}>Recipes</a></li>
                    <li className={styles.item}><a className={styles.link}>My Recipes</a></li>
                    <li className={styles.item}><a className={styles.link}>About</a></li>
                    <li className={styles.item}><a className={styles.link}>Login</a></li>
                    <li className={styles.item}><a className={styles.link}>LogOut</a></li>
                    <li className={styles.item}><a className={styles.link}>Register</a></li>
                </ul>
            </div>
        </nav>
    )
}
export default Header;