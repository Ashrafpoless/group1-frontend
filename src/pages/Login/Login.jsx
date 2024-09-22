import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import  {AuthContext}  from '../../context/AuthContext';

import './Login.css';

const Login = () => {

  const [inputs, setInputs]= useState({
    email:"",
    password: ""
    
});

const [error, setError] = useState(null);
const navigate = useNavigate();

const {login} = useContext(AuthContext)


const handelChange = (e)=>{
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
};

console.log(inputs);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        
          await login(inputs);
          navigate('/');
      
      } catch (err) {
          setError(err.message);
      }
    };


  return (
    <div className="auth-container">
      <div className="form-container">
        {/* Logo & App Name */}
        <div className="app-header">
        </div>

        <div className="login-form">
          <h2>Log In</h2>
          {error && <p>{error}</p>}
          <form >
            <input type="email" placeholder="Email" name='email' required onChange={handelChange}/>
            <input type="password" placeholder="Password" name='password' required onChange={handelChange}/>
            <div className="button-group">
                <button type="submit" onClick={(e)=>handleSubmit(e)}>Sign In</button>
                <button type="button" className="cancel-btn" >Cancel</button>
          </div>
            <div className="forgot-password">
              <a href="#">Forgot Password?</a>
            </div>
          </form>
        </div>


                {/* Link to Register Page */}
                <div className="toggle-link">
                    <p>
                        Do not you have an account?{' '}
                        <Link to="/register">Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
