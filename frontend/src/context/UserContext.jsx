import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

// Create a context to store the user state
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch the user data from the backend or cookies on initial load
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:3000/auth/user', {
          withCredentials: true, // Include credentials for cookies
        });
        console.log('User fetched from backend:', response.data.user);
        setUser(response.data.user); // Set the user in the context
      } catch (error) {
        console.error('Error fetching user:', error);
        setUser(null); // Ensure the user is null if an error occurs
      }
    };
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the user context
export const useUser = () => useContext(UserContext);
