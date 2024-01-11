import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const check = (e) => {
    e.preventDefault();
  
    const storedData = JSON.parse(localStorage.getItem('k')) || [];
  
  
    const user = storedData.find((userData) => userData.name === name);
  
    if (user) {
      if (user.password === password) {
        alert("Login successfully");
        navigate('/home');
      } else {
        alert("Invalid password");
      }
    } else {
      alert("User not found");
    }
  };
  
  return (
    <div className="d-flex img vh-100 justify-content-center align-items-center">
      <div className="w-50 bg-light rounded-2 p-5">
        <form onSubmit={check}>
          <div className="ms-2">
            <label className="mt-2">UserName</label>
            <input
              className="form-control ms-3 mt-2"
              type="text"
              placeholder="Enter Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <label className="ms-2">Password</label>
            <input
              className="form-control ms-3 mt-2"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success ms-3 mt-3">
            Login
          </button>
          <div>
            <button
              className="btn btn-light ms-3 mt-3"
              onClick={() => navigate("/register")}
            >
              Create new Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
