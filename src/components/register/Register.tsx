import React, { ChangeEvent, useState } from 'react';
import axios from 'axios';
import "./Register.css";
import { useNavigate } from "react-router-dom";

function Register() {


  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [amountOfKids, setAmountOfKids] = useState<number>(0);
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function onNameChanged(event : ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function onAddressChanged(event : ChangeEvent<HTMLInputElement>) {
    setAddress(event.target.value);
  }

  function onAmountOfKidsChanged(event : ChangeEvent<HTMLInputElement>) {
    setAmountOfKids(+event.target.value);
  }

  function onPhoneChanged(event : ChangeEvent<HTMLInputElement>) {
    setPhone(event.target.value);
  }

  function onUsernameChanged(event : ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
  }

  function onPasswordChanged(event : ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  async function onButtonClicked() {

    try {
      const response = await axios.post("http://localhost:8080/customers", {
        name: name,
        address: address,
        amountOfKids: amountOfKids,
        phone: phone,
        user: {
          username: username,
          password: password,
          userType: "Customer",
          companyId: null,
        }
      });
      const serverResponse = response.data;
      console.log(serverResponse);
      alert("Registration succeeded");
      navigate("/");
    } catch (error) {
      alert("Register failed, please try again.");
    }
  }

  return (


<div className="register-container">
<h1>Register</h1>
<form>
<input type="text" placeholder="Customer Name" />
    <input type="text" placeholder="Address" />
    <input type="number" placeholder="Amount of Kids" min="0" />
    <input type="tel" placeholder="Phone Number" />
    <input type="email" placeholder="username@gmail.com" />
    <input type="password" placeholder="Password" />
    <button type="submit">Register</button>
</form>
</div>
  );
}

export default Register;
