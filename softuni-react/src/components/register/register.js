import {useState} from 'react';
import styles from './register.module.css';

function Register(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const firstNameChangeHandler = (e) => {
        setFirstName(e.target.value);
    }
    const lastNameChangeHandler = (e) => {
        setLastName(e.target.value);
    }
    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    }
    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    }
    const confirmPasswordChangeHandler = (e) => {
        setConfirmPassword(e.target.value);
    }
    return (
        <div className={styles.formWrapper}>
        <form>
            <h1>Registration form</h1>
            <div className={styles.form}>
            <div className={styles.formFieldWrapper}>
                    <div>
                    <label className={styles.formLabel} htmlFor='firstName'>FirstName:</label>
                    </div>
                    <input className={styles.formInput} type="text" value={firstName} onChange={firstNameChangeHandler}></input>
                </div>
                <div className={styles.formFieldWrapper}>
                    <div>
                    <label className={styles.formLabel} htmlFor='lastName'>LastName:</label>
                    </div>
                    <input className={styles.formInput} type="text" value={lastName} onChange={lastNameChangeHandler}></input>
                </div>
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
            <div className={styles.formFieldWrapper}>
                <div>
                <label className={styles.formLabel} htmlFor='Confirmpassword'>Confirm Password:</label>
                </div>
                <input className={styles.formInput} type="password" value={confirmPassword} onChange={confirmPasswordChangeHandler}></input>
            </div>
            </div>
            <div>
                <button className={styles.buttonRegister} type='button'>Register</button>
            </div>
        </form>
        </div>
    )
}
export default Register;