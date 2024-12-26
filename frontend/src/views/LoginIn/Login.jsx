import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const savedUsernameOrEmail = localStorage.getItem(
      'rememberUsernameOrEmail'
    );
    const savedPassword = localStorage.getItem('rememberPassword');
    if (savedUsernameOrEmail && savedPassword) {
      setUsernameOrEmail(savedUsernameOrEmail);
      setPassword(savedPassword);
      setRememberMe(true);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://youshow.onrender.com/auth/login',
        {
          identifier: usernameOrEmail,
          password,
        }
      );

      if (rememberMe) {
        localStorage.setItem('rememberUsernameOrEmail', usernameOrEmail);
        localStorage.setItem('rememberPassword', password);
      } else {
        localStorage.removeItem('rememberUsernameOrEmail');
        localStorage.removeItem('rememberPassword');
      }

      localStorage.setItem('token', response.data.token);
      // alert('Login successful!');
      navigate('/homepage');
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-[url('/images/startbackground.jpg')]">
      <div className="bg-orange-100 shadow-md rounded-lg flex overflow-hidden w-[900px]">
        {/* Left Section */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src="/images/Avatar.jpg"
            alt="Login Illustration"
            className="w-[300px] h-[300px] object-contain"
          />
        </div>

        {/* Right Section */}
        <div className="flex-1 p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Sign in</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Username or Email
              </label>
              <input
                type="text"
                value={usernameOrEmail}
                onChange={(e) => setUsernameOrEmail(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                id="rememberMe"
                className="mr-2"
              />
              <label htmlFor="rememberMe" className="text-sm text-gray-600">
                Remember me
              </label>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600"
            >
              Log in
            </button>
          </form>
          <div className="flex justify-between items-center mt-4">
            <a
              href="/register"
              className="text-sm text-blue-500 hover:underline"
            >
              Create an account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
