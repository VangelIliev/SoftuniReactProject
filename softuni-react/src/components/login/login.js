import { useState } from 'react';
import styles from './login.module.css';
function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    }
    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
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
                <button className={styles.buttonRegister} type='button'>Register</button>
            </div>
        </form>
        </div>
    )
}
export default LogIn;