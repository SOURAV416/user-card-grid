import React, { useState } from 'react';
import axios from 'axios';
import './App.scss';

import loader from '../src/assets/loder.gif';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('https://reqres.in/api/users?page=1');
      setUsers(response.data.data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <span className="brand">Tech Sourav</span>
        <button className="btn" onClick={getUsers} disabled={isLoading}>
          {isLoading ? (
            <div className="loader-container">
              <img src={loader} alt="Loading..." className="loader" style={{ width: '50px', height: '50px' }} />
            </div>
          ) : (
            'Get Users'
          )}
        </button>
      </nav>

      <div className="user-grid">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <img src={user.avatar} alt={user.first_name} />
            <h3>{`${user.first_name} ${user.last_name}`}</h3>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
