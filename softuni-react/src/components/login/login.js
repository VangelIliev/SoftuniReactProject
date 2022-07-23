import { useState } from 'react';
import styles from './login.module.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseConfig.js';
function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    }
    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    }
    const login = async () => {

        try{
            const user = await signInWithEmailAndPassword(auth, email, password);
            setEmail('');
            setPassword('');
            console.log(user);
        }
        catch(error){
            alert(error.message);
        }
    }
    return (
        <div className={styles.formWrapper}>
        <form>
            <h1 className={styles.headerLogin}>Log In form</h1>
            <div className={styles.form}>
            <div className={styles.formFieldWrapper}>
                <div>
                <label className={styles.formLabel} htmlFor='email'>Email Address:</label>
                </div>
                <input className={styles.formInput} type="email" value={email} onChange={emailChangeHandler}></input>
            </div>
            <div className={styles.formFieldWrapper}>
                <div>
                <label className={styles.formLabel} htmlFor='password'>Password:</label>
                </div>
                <input className={styles.formInput} type="password" value={password} onChange={passwordChangeHandler}></input>
            </div>
            </div>
            <div>
                <button onClick={login} className={styles.buttonRegister} type='button'>Log In</button>
            </div>
        </form>
        </div>
    )
}
export default LogIn;