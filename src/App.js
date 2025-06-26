// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import './App.css'; // Optional: style it to your taste

export default function LoginForm() {
  const [userType, setUserType] = useState('Student');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUserSwitch = () => {
    setUserType((prev) => (prev === 'Student' ? 'Admin' : 'Student'));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { userType, ...formData });
    // Send data to your backend/API
  };

  return (
    <div className="login-container">
      <h2>{userType} Login</h2>
      <p>Log in to GCE Study Companion</p>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <div className="form-footer">
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit">Get Started</button>
      </form>

      <div className="social-login">
        <p>Or sign in with</p>
        <div className="social-buttons">
          <button className="facebook">f</button>
          <button className="google">G</button>
          <button className="linkedin">in</button>
        </div>
      </div>

      <div className="signup-note">
        {userType === 'Student'
          ? "Ask your teacher to create one for you"
          : <a href="/sign-up">Don't have an account? Sign Up</a>}
      </div>

      <button onClick={handleUserSwitch} className="user-switch">
        Switch to {userType === 'Student' ? 'Admin' : 'Student'} Login
      </button>
    </div>
  );
};

