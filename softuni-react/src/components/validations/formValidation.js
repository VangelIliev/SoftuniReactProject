const isEmailCorrect = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
export const validateEmail = (email) =>{
    const isValidEmail = isEmailCorrect(email);
    if(email === ''){
        return ('Email cannot be empty');
    }
    else if(!isValidEmail){
       return ("Please enter a valid email")
    }
    else{
        return ('');
    }
}
export const validatePassword = (password) => {   
    if(password === ''){
        return ('Password cannot be empty');
    }
    else if(password.length < 6){
        return ('Password should be attleast 6 symbols');
    }
    else{
        return('');
    }
}