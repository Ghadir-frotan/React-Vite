import {useState} from 'react';

const Login = () => {
const [username,setUsername] = useState('');
const [password,setPassword] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('username',username);
    console.log('password',password);
};
return (
<div>
  <h2>Login Form</h2>
    <form onSubmit={handleSubmit}>
        <div className="row col-md-6 mx-auto">

        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" 
           className='form-control'
          id="username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} /><br></br>
          </div>
          <div> 
            <label htmlFor="password">Password:</label>
            <input type="password"
            className='form-control'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            /><br></br>
        </div>
        <button className='btn btn-info' type="submit">Login</button>
        </div>
        </form>
    </div>
);
};
export default Login;