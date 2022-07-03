import React , {useContext} from 'react';
import { AuthContext } from '../contex/AuthContext';


const Login = () => {

  const {login} = useContext(AuthContext);

  const handleSubmit = (e) =>{
    e.preventDefault();
    login();
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: "column",
          margin: "auto",
          maxWidth: "200px",
          gap: "10px"
        }}
      >
        <input name="email"
          type="text"
          placeholder="Enter Email"
          />

        <input name="password"
          type="password"
          placeholder='Enter Password'
          />

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
