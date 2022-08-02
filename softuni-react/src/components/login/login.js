import { useState } from 'react';
import styles from './login.module.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseConfig.js';
import { useNavigate } from "react-router-dom";
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
    const isEmailCorrect = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
    const validateEmail = (e) =>{
        var email = e.target.value;
        const isValidEmail = isEmailCorrect(email);
        if(email === ''){
            setEmailError('Email cannot be empty');
        }
        else if(!isValidEmail){
            setEmailError("Please enter a valid email")
        }
        else{
            setEmailError('');
        }
    }
    const validatePassword = (e) => {
        var password = e.target.value;
        if(password === ''){
            setPasswordError('Password cannot be empty');
        }
        else if(password.length < 6){
            setPasswordError('Password should be attleast 6 symbols');
        }
        else{
            setPasswordError('');
        }
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
                navigate("/home", { replace: true });
            }
            catch(error){
                alert(error.message);
            }
        }
    }
    return (
        <div className={styles.formWrapper}>
        <form onSubmit={submitForm}>
            <h1 className={styles.headerLogin}>Log In form</h1>
            <div className={styles.form}>
            <div className={styles.formFieldWrapper}>
                <div>
                <label className={styles.formLabel} htmlFor='email'>Email Address:</label>
                </div>
                <input className={styles.formInput} type="email" value={email} onChange={emailChangeHandler} onBlur={validateEmail}></input>
                <span className={styles.inputValidation}>{emailError}</span>
            </div>
            <div className={styles.formFieldWrapper}>
                <div>
                <label className={styles.formLabel} htmlFor='password'>Password:</label>
                </div>
                <input className={styles.formInput} type="password" value={password} onChange={passwordChangeHandler} onBlur={validatePassword}></input>
                <span className={styles.inputValidation}>{passwordError}</span>
            </div>
            </div>
            <div>
                <button className={styles.buttonRegister} type='submit'>Log In</button>
            </div>
        </form>
        </div>
    )
}
export default LogIn;