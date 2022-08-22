import React, { useState } from 'react'
import styled from 'styled-components'

import useUser from '../hooks/useUser'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { login, loginErr } = useUser()

  const handleSubmit = (event) => {
    console.log('handleSubmit ran')
    event.preventDefault()
    login({ username, password })
  }

  return (
    <>
      <LoginContainer>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className='floating-form'>
            <input
              type='text'
              placeholder=' '
              onChange={(event) => {
                setUsername(event.target.value)
              }}
              id='user'
              required
            />
            <label>User</label>
          </div>
          <div className='floating-form'>
            <input
              type='password'
              placeholder=' '
              onChange={(event) => {
                setPassword(event.target.value)
              }}
              name='password'
              id='pass'
              required
            />
            <label>Password</label>
          </div>
          <div className='lgn'>
            <span className={`${loginErr ? 'login-err' : ''}`}>
              User or password are invalid... Please try again!
            </span>
          </div>
          <button
            type='submit'
            className={`btn ${username && password ? 'btn-disabled' : ''}`}
            disabled={!(username && password)}
          >
            Sign in
          </button>
        </form>
      </LoginContainer>

    </>
  )
}

export default Login

const LoginContainer = styled.div`
@import url(//fast.fonts.net/t/1.css?apiType=css&projectid=dce2cd3c-2b49-496c-8fe8-f7eedea7aa2b);

font-family: 'FF Mark W05', sans-serif;
position: absolute;
top: 50%;
left: 50%;
padding: 72.6px 48.38px 0;
transform: translate(-50%,-50%);
background-color: (249,249,249);
box-shadow: 0px 0px 10px rgba(0,0,0,.2);

.lgn{
  visibility:hidden;
  color: red;
  font-size: 10px;
  text-align: center;
  margin:0;
}
.login-err{
  visibility: visible;
}
h2{
  text-align: center;
  margin:0;
  margin-bottom: 48.38px;
  padding:0;
}
.floating-form input{
    padding: 19.355px 15.049px 5.645px 15.049px;
    margin-bottom: 15px; 
    width:88%;
    border-radius: 10px;
    font-size:   15px;
    border: 1px solid black;

}
.floating-form input::placeholder{
    color:transparent;
}
.floating-form{
    position: relative;
}
.floating-form label{
    position: absolute;
    top: 14px;
    left: 10px;
    font-size: 20px;
    pointer-events: none;
    transition: top .2s;
    font-weight: bold;
    pointer-events: none;
}
.floating-form input:focus + label{
    top:5px;
    font-size: 12px;
    opacity:.4;
}
.floating-form input:not(:placeholder-shown) + label{
    top: 5px;
    opacity:.4;
    font-size: 12px;
}
.btn-disabled{
    height: 30px;
    width: 50%;
    margin: 10px 0 20px 25%;
    
}
.btn{
    height: 30px;
    width: 50%;
    margin: 10px 0 20px 25%;
}

@media(max-width:768px){
    width: 200px;
}

`
