//import React from 'react';
import { Link } from 'react-router-dom';

function RegisterPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle registration logic here
  };
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

        <div className="register-form">
          <h2>Sign up</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Verify Password" required />
            <div className="button-group">
                <button type="submit">Sign up</button>
                <button type="button" className="cancel-btn" onClick={handleCancel}>
    Cancel
  </button>
</div>

          </form>
        </div>

        {/* Link to Log In Page */}
        <div className="toggle-link">
          <p>
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
