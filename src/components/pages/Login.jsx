import styled from 'styled-components'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { StyleRounded } from '@mui/icons-material';
import { Button } from '@mui/material';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondry from './ButtonSecondry';
import { auth } from '../../firebase/firebaseconfg';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../../features/cars/UseSlice';
function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
const dispatch =useDispatch()
const navigate = useNavigate()

const Signin = (e) => {
    e.preventDefault()

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
          })
        )
navigate('/')
     }).catch((error)=>{
console.log(error)
     })

     
    }
    return (
        <div>
            <LoginRoute>
                <Loginheader>
                    <Loginlogo>
                        <Link to="/"><img src="/images/logo.svg" alt="" /></Link>

                    </Loginlogo>
                    <LoginLangue>
                        <LanguageOutlinedIcon />
                        <h3>en-IN</h3>

                    </LoginLangue>
                </Loginheader>

                <Login__Info>
                    <h1>
                        Sign In
                    </h1>
                    <Login__form>
                        <form >
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id='email' value={email} onChange={(e) => {
                                setEmail(e.target.value)
                            }} />

                            <label htmlFor="passWord">passWord</label>
                            <input type="passWord" id='passWord' value={password} onChange={(e) => {
                                setPassword(e.target.value)
                            }} />

                            <ButtonPrimary  name="Sign-in" type="Submit"  onClick={Signin}/>
                        </form>
                    </Login__form>

                      <Login__divider>
                          <hr /> <span>OR</span> <hr />
                      </Login__divider>
                      <Link to="/Signup">
                          <ButtonSecondry name="Create Account" type='Submit'  />
                      </Link>
                </Login__Info>
            </LoginRoute>
        </div>
    )
}

export default Login

const LoginRoute = styled.div`
padding: 25px;
padding-top: 15px;
height: 100vh;
display: flex;
flex-direction: column;
gap:70px

`



const Loginheader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
position: sticky;
top: 0;


`
const Loginlogo = styled.div`

`
const LoginLangue = styled.div`

display: flex;
gap: 5px;
padding: 10px;
align-items: flex-end;
cursor: pointer;
padding: 5px 10px;
font-size: 15px;
transition: all .2s ;

h3:hover{
 background-color: hsla(0,0%,50.2%,0.25);
}
`

const Login__Info = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
min-width: 330px;
margin-left: auto;
margin-right:auto;
h1{
font-weight: 500 ;
 font-size: 40px;
 margin-left: -10px;
}
`

const Login__form = styled.div`
form{
    display: flex;
    flex-direction: column;

    input{
        margin-bottom: 30px;
        background-color: #f4f4f4;
        border: 1 px solid #f4f4f4;
       border:none;
        border-radius: 50px;
        padding:12px 20px;
        color:#393c41;
        font-weight: 600;

    }

label{
    color: #5c5e62;
    font-weight: 500;
    font-size: 15px;
    padding: 20px;
    
}

label:focus{
    border: 1px solid #d6d6d6;
    transition: all .2s;
}
 

}

`

const Login__divider =styled.div`
display: flex;
justify-content: space-around;
margin-bottom: 20px;
hr{
    width: 40%;
    height: 0;
    opacity: 0.3;

}

span{
    font-weight: 500;
    color: #5c5e62 ;
}
`
