import { useState } from 'react';
import styles from './login.module.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseConfig.js';
import { useNavigate } from "react-router-dom";
import { validateEmail, validatePassword} from '../validations/formValidation';
function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    }
    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    }
    const validateEmailField = (e) =>{
        var email = e.target.value;
        const emailMessage = validateEmail(email);
        setEmailError(emailMessage);
    }
    const validatePasswordField = (e) => {
        var password = e.target.value;
        const passwordMessage = validatePassword(password);
        setPasswordError(passwordMessage);
    }
    const submitForm = async (event) => {
        event.preventDefault();
        if(email === ''){
            alert('Email cannot be empty');
        }
        else if(password === ''){
            alert('Password cannot be empty');
        }        
        else if(emailError === '' && passwordError === '') {
            try{                
                await signInWithEmailAndPassword(auth, email, password);           
                setEmail('');
                setPassword(''); 
                navigate("/Recipes", { replace: true });
            }
            catch(error){
                alert(error.message);
            }
        }
    }
    return (
        
            <div className={styles.container}>
                <div className={styles.screen}>
                    <div className={styles.content}>
                        <form className={styles.login} onSubmit={submitForm}>
                            <div className={styles.field}>
                                <i className="login__icon fas fa-user"></i>
                                <input type="email" className={styles.input} value={email} onChange={emailChangeHandler} onBlur={validateEmailField} placeholder="Email" />
                                <span className={styles.inputValidation}>{emailError}</span>
                            </div>
                            <div className={styles.field}>
                                <i className="icon fas fa-lock"></i>
                                <input type="password" className={styles.input} placeholder="Password" value={password} onChange={passwordChangeHandler} onBlur={validatePasswordField} />
                                <span className={styles.inputValidation}>{passwordError}</span>
                            </div>
                            <button className={styles.submit} type='submit'>
                                <span className={styles.text}>Log In Now</span>
                                <i className="icon fas fa-chevron-right"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
    )
}
export default LogIn;