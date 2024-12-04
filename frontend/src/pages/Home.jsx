import React, { useState } from 'react';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleLogin = () => {
    const data = {
      username,
      password,
    };

    setLoading(true);
    axios
      .post('http://localhost:5555/login', data)
      .then((response) => {
        setLoading(false);

        // Save token or user details if provided by the backend
        localStorage.setItem('token', response.data.token);

        enqueueSnackbar('Login successful!', { variant: 'success' });
        navigate('/dashboard'); // Redirect to a protected route
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Invalid username or password', { variant: 'error' });
        console.error('Login error:', error);
      });
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl my-4">Login</h1>
      {loading ? <Spinner /> : ''}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleLogin}>
          Login
        </button>
      </div>
      <div className="text-center mt-4">
        <p>
          Don't have an account? <a href="/books/create" className="text-blue-500">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
