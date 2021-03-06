import React , {useState, useContext}from 'react'
import { FirebaseContext } from '../Firebase'
const Singup = () => {

  const firebase =  useContext(FirebaseContext);

  const data = {
    pseudo: '',  
    email: '',
    password:'',
    confirmPassword:'',

  } 
 const [loginData, setLoginData] =  useState(data);
 const[error, setError] = useState('')

 const handleChange = e => {
   setLoginData({...loginData, [e.target.id]: e.target.value })
 }
 const handleSubmit = e => {
   e.preventDefault();
   const {email, password} = loginData;
   firebase.signupUser(email, password)
   .then(user => {
      setLoginData({...data});
   })
   .catch(error => {
      setError(error);
      setLoginData({...data});

   })
 }
 
 const {pseudo, email, password, confirmPassword} = loginData;
 
 const btn =  pseudo === '' || email ==='' || password ==='' || password !== confirmPassword ?
  <button disabled>Inscription</button>:<button>Inscription</button>

    // gestion erreurs
   const errorMsg = error !== '' && <span>{error.message}</span>;
 return (
    <div className="signUpLoginBox"> 
        <div className="slContainer">
          <div className="formBoxLeftSignup">

        </div>
        <div className="formBoxRight">
          <div className="formContent"></div>
              <from onSubmit={handleSubmit}>
                {errorMsg}
                <h2>Inscription</h2>
                <div className="inputBox">
                  <input type="text" id="pseudo" autoComplete="off" required />
                  <label htmlFor="pseudo">Pseudo</label>
                </div>
                <div className="inputBox">
                  <input type="email" id="email" autoComplete="off" required />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="inputBox">
                  <input type="password" id="password" autoComplete="off" required />
                  <label htmlFor="password">Mot de Passe</label>
                </div>
                <div className="inputBox">
                  <input type="password" id="confirmPassword" autoComplete="off" required />
                  <label htmlFor="password">Confirmer votre mot de passe</label>
                </div>
                {btn}
              </from>
        </div>
    </div>
    </div>
  )
}

export default Singup