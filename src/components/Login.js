import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth,authProvider } from '../firebase'
import { useNavigate } from 'react-router-dom'

function Login(props) {
    const navigate = useNavigate();
    const login = () => {

         signInWithPopup(auth,authProvider)
        .then(() => {
            const userName = auth.currentUser.displayName;
            const userEmail = auth.currentUser.email;
            console.log(userName,userEmail)
            props.info(true)
            navigate('/home');

        })
        .catch((error) => {
            console.log(error)
        })
    }
  return (
    <div className='m-3'>
        <button className='btn btn-outline-primary' onClick={login}>Continue with Google</button>
    </div>
  )
}

export default Login