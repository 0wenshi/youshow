import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

const API_URL = import.meta.env.VITE_API_URL;

const Login = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const { setUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      const savedRememberMe = localStorage.getItem('rememberMe');
      const savedUsernameOrEmail = localStorage.getItem(
        'rememberUsernameOrEmail'
      );

      if (savedRememberMe === 'true' && savedUsernameOrEmail) {
        setUsernameOrEmail(savedUsernameOrEmail);
        setRememberMe(true);
      }
    }, 500);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Step 1: Login API
      const loginResponse = await axios.post(
        `${API_URL}/auth/login`,
        {
          identifier: usernameOrEmail,
          password,
        },
        {
          withCredentials: true, // Send HttpOnly cookies with the request
        }
      );

      //console.log('Login response:', loginResponse.data);

      // Step 2: Validate User API
      const validationResponse = await axios.get(`${API_URL}/auth/user`, {
        withCredentials: true, // Include cookies in this request as well
      });

      //console.log('Validation response:', validationResponse.data);

      // Step 3: Set the user in context
      setUser(validationResponse.data.user);
      //console.log('User set in context:', validationResponse.data.user);

      // Handle "Remember Me" logic
      if (rememberMe) {
        localStorage.setItem('rememberMe', 'true');
        localStorage.setItem('rememberUsernameOrEmail', usernameOrEmail);
      } else {
        localStorage.removeItem('rememberMe');
        localStorage.removeItem('rememberUsernameOrEmail');
      }

      // Navigate to homepage or a specific role-based page
      if (validationResponse.data.user.role === 'admin') {
        navigate('/actorsmanagement');
      } else {
        navigate('/homepage');
      }
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);
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
          <form
            action="/"
            method="POST"
            onSubmit={handleLogin}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Username or Email
              </label>
              <input
                type="text"
                name="username"
                defaultValue={usernameOrEmail}
                onChange={(e) => setUsernameOrEmail(e.target.value)}
                placeholder="Username or Email"
                required
                className="w-full border border-gray-300 rounded-md p-2"
                autoComplete="username"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                name="password"
                defaultValue={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full border border-gray-300 rounded-md p-2"
                autoComplete="current-password"
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
              <label
                htmlFor="rememberMe"
                className="text-sm text-gray-600 cursor-pointer"
              >
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
            <input type="submit" hidden />
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
};

export default Login;
