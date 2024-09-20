import { Link } from 'react-router-dom';
import './Login.css';

function LoginPage() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login submission logic here
    };

homepage
    return (
        <div className="auth-container">
            <div className="form-container">
                {/* Logo & App Name */}
                <div className="app-header">
                    <h1>MyBlog</h1>
                </div>

                <div className="login-form">
                    <h2>Log In</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="email" placeholder="Email" required />
                        <input
                            type="password"
                            placeholder="Password"
                            required
                        />
                        <button type="submit">Log In</button>
                        <div className="forgot-password">
                            <a href="#">Forgot Password?</a>
                        </div>
                    </form>
                </div>

  const handleCancel = () => {
    history.push('/login'); // Redirect to the login page
  };

  return (
    <div className="auth-container">
      <div className="form-container">
        {/* Logo & App Name */}
        <div className="app-header">
          <h1>Blog</h1>
        </div>

        <div className="login-form">
          <h2>Log In</h2>
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <div className="button-group">
                <button type="submit">Sign up</button>
                <button type="button" className="cancel-btn" onClick={handleCancel}>
    Cancel
  </button>
</div>
            <div className="forgot-password">
              <a href="#">Forgot Password?</a>
            </div>
          </form>
        </div>
main

                {/* Link to Register Page */}
                <div className="toggle-link">
                    <p>
                        Do not have an account?{' '}
                        <Link to="/register">Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
