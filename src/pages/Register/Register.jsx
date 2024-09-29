
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SERVER_URL from '../../server';

const Register = () => {

    const [inputs, setInputs]= useState({
        username:"",
        email: "",
        password: "",
        confirmPassword:""
    });
    // const [error, setError] = useState(null);
    const navigate = useNavigate();
    const handelChange = (e)=>{
        setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            if(!inputs.username || !inputs.email || !inputs.password || !inputs.confirmPassword){
                return Swal.fire({
                    title:'Please Fill All The fields',
                    text: `SomeThing Missing`,
                    icon: 'warning',
                })
            }

            await axios.post(SERVER_URL + "api/auth/register", inputs)
            Swal.fire({
                icon: "success",
                title: "You have been registered successfully",
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/login');
        
        } catch (err) {
            Swal.fire({
                icon: "warning",
                text: `${err.response.data.message}`,
            });
        }
    };




    return (
        <div className="auth-container">
            <div className="form-container">
                {/* Logo & App Name */}
                <div className="app-header">
                    
                </div>
                <div className="register-form">
                    <h2>Sign up</h2>
                    <form >
                        <input type="text" placeholder="Username" required name='username' onChange={handelChange}/>
                        <input type="email" placeholder="Email" required name='email' onChange={handelChange}/>
                        <input
                            type="password"
                            placeholder="Password"
                            required
                            name='password' onChange={handelChange}
                        />
                        <input
                            type="password"
                            placeholder="confirm Password"
                            required
                            name='confirmPassword' onChange={handelChange}
                        />
                        <div className="button-group">
                            <button onClick={handleSubmit}>Sign up</button>
                            <button
                                type="button"
                                className="cancel-btn"
                                
                            >
                                <Link to={'/posts'}>Cancel </Link>
                                
                            </button>
                        </div>
                    </form>
                </div>

                {/* Link to Log In Page */}
                <div className="toggle-link">
                    <p>
                        Already have an account? <Link to="/login">Sign In</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Register;
