import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Register.css'; // Import the CSS file

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Reset error message on new submit

    try {
      const response = await fetch('https://cloudnutri.vercel.app/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, email, password, isAdmin: false }),
      });

      if (response.ok) {
        navigate('/login'); // Redirect to login page
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.msg || 'Registration failed');
      }
    } catch (error) {
      console.error('Registration failed:', error);
      setErrorMessage('Server error. Please try again later.');
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleRegister}>
        <h2>Register</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Register</button>
        <a className="login-link" href="/login">Already registered? Login</a>
      </form>
    </div>
  );
};

export default Register;
