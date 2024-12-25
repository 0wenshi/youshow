import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await axios.post('https://youshow.onrender.com/auth/register', {
        username,
        email,
        password,
      });
      alert('Registration successful!');
      navigate('/login');
    } catch (error) {
      setError(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-[url('/images/startbackground.jpg')]">
      <div className="bg-orange-100 shadow-md rounded-lg flex overflow-hidden w-[900px]">
        {/* Left Section */}
        <div className="flex-1 p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Sign up</h2>
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Repeat Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div className="flex items-center">
              <input type="checkbox" required className="mr-2" />
              <label className="text-sm text-gray-600">
                I agree to all statements in{' '}
                <a href="/terms" className="text-blue-500 hover:underline">
                  Terms of Service
                </a>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600"
            >
              Register
            </button>
          </form>
          <div className="flex justify-center items-center mt-4">
            <a href="/login" className="text-sm text-blue-500 hover:underline">
              I am already a member
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src="/images/Avatar.jpg"
            alt="Register Illustration"
            className="w-[300px] h-[300px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Register;
