import styles from './Recipe.module.css';
import { Link } from 'react-router-dom';
function Recipe(props) {
    var currentRecipe = props.currentRecipe;
    var navigationLink = '/RecipeDetails/' + currentRecipe.Id;
    return (
        <li className={styles.card}>
            <div className={styles.ftrecipe}>
                <div className={styles.ftrecipethumb}>
                    <h3 className={styles.heading}>{currentRecipe.user} 's Recipe</h3>
                    <img className={styles.cardImage} src={currentRecipe.recipeImage} alt={currentRecipe.recipeName} />
                </div>
                <div className={styles.ftrecipeContent}>
                    <header className={styles.contentheader}>
                        <div className={styles.rowWrapper}>
                            <h2 className={styles.recipeTitle}>{currentRecipe.recipeName}</h2>
                            <div className={styles.userrating}></div>
                        </div>
                        <ul className={styles.recipeDetails}>
                            <li className={styles.recipeDetailsItem}><ion-icon className="ionIcon" name="time-outline"></ion-icon><span className={styles.value}>{currentRecipe.timeToPrepare}</span><span className={styles.title}>Minutes</span></li>
                            <li className={styles.recipeDetailsItem}><ion-icon className="ionIcon" name="book-outline"></ion-icon><span className={styles.value}>5</span><span className={styles.title}>Ingredients</span></li>
                            <li className={styles.recipeDetailsItem}><ion-icon className="ionIcon" name="people-outline"></ion-icon><span className={styles.value}>{currentRecipe.servings}</span><span className={styles.title}>Servings</span></li>
                        </ul>
                    </header>
                    <p className={styles.description}>
                        {currentRecipe.description}</p>
                    <footer className={styles.contentFooter}><Link className={styles.anker} to={navigationLink}>View Recipe </Link> </footer>
                </div>
            </div>
        </li>
    )
}

export default Recipe;