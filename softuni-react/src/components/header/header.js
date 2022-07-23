import styles from './Header.module.css'
function Header() {
    return (
        <nav class="bg-dark navbar-dark navbar">
            <div className="row col-12 d-flex justify-content-center text-white">
                <ul className="navigation-top">
                    <li><a class="active" href="#home">Home</a></li>
                    <li><a href="#news">Recipes</a></li>
                    <li><a href="#contact">My Recipes</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
            </div>
        </nav>
    )
}
export default Header;