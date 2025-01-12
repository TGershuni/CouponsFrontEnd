import React, { ChangeEvent, useState } from 'react';
import axios from 'axios';
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useUserRole } from '../../context/UserRoleContext';


function Login() {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const { setRole } = useUserRole(); 
  const navigate = useNavigate();

  

async function onButtonClicked() {
      try {
        const response = await axios.post("http://localhost:8080/users/login", {
          username: text,
          password: password,
        });
        const serverResponse = response.data;
        console.log(serverResponse);

        
        setRole(serverResponse.userType);

        alert("Welcome!");
        navigate("/");
      } catch (error) {
        alert("Login failed. Please check your credentials.");
      }
    }

  function onTextChanged(event : ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  function onPasswordChanged(event : ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  return (    
    <div className="login-container">
            <h1>Login</h1>
            <input type="email" placeholder="Username" value={text} onChange={onTextChanged} />
            <input type="password" placeholder="Password" value={password} onChange={onPasswordChanged}/>
            <button onClick={onButtonClicked}>Login</button>
        </div>
  );  
}

export default Login;