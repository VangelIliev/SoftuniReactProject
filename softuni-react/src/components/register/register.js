import { useState } from 'react';
import styles from './register.module.css';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseConfig.js';
import { useNavigate } from "react-router-dom";
import { validateEmail, validatePassword} from '../validations/formValidation';
function Register() {
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
                await createUserWithEmailAndPassword(auth, email, password);
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
        <div className={styles.formWrapper}>
        <form onSubmit={submitForm}>
            <h1 className={styles.headerRegister}>Register  form</h1>
            <div className={styles.form}>
            <div className={styles.formFieldWrapper}>
                <div>
                <label className={styles.formLabel} htmlFor='email'>Email Address:</label>
                </div>
                <input className={styles.formInput} type="email" value={email} onChange={emailChangeHandler} onBlur={validateEmailField}></input>
                <span className={styles.inputValidation}>{emailError}</span>
            </div>
            <div className={styles.formFieldWrapper}>
                <div>
                <label className={styles.formLabel} htmlFor='password'>Password:</label>
                </div>
                <input className={styles.formInput} type="password" value={password} onChange={passwordChangeHandler} onBlur={validatePasswordField}></input>
                <span className={styles.inputValidation}>{passwordError}</span>
            </div>
            </div>
            <div>
                <button className={styles.buttonRegister} type='submit'>Register</button>
            </div>
        </form>
        </div>
    )
}
export default Register;