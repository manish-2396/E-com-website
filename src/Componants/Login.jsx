import React, { useContext } from 'react';
import { AuthContext } from '../Contex/AuthContext';


const Login = () => {

  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  }

  return (
    <div style={{ margin: "4rem" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: "column",
          margin: "auto",
          gap: "2rem",
          padding: "4rem",
          maxWidth: "30%",
          border: "1px solid black",
          backgroundColor: "teal"
        }}
      >
        <div  >
          <input
            style={{ border: "1px solid black", padding: "10px", maxWidth: "100%", width: "20rem " }}
            name="email"
            type="text"
            placeholder="Enter Email"
          />
        </div>

        <div >
          <input
            style={{ border: "1px solid black", padding: "10px", maxWidth: "100%", width: "20rem " }}
            name="password"
            type="password"
            placeholder='Enter Password'
          />
        </div>

        <div style={{ margin: "auto" }} >
          <button type="submit" style={{ border: "1px solid black", width: "10rem", color: "black", backgroundColor: "#fff", fontSize: "1.4rem" , fontWeight:"bolder"}} >
            Login
          </button>
        </div>

      </form>
    </div>
  )
}

export default Login
