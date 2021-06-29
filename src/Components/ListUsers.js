import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import axios from "axios"; 
//import { useEffect } from 'react';
import axios from 'axios';
//import { useState } from 'react';

function App() {
  const [users, setUsers] = useState(null)
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res=>setUsers(res.data))
    .catch(err=>console.log("error",err.response.data.error))
  },[])
  return (
    <div className="App">
      {users && users.map((user)=>
      <div>
        <h4>{user.name}</h4>
        <h4>☛ {user.username}</h4>
        <h4>✉ {user.email}</h4>
        <p>☏ {user.phone}</p>
        <p>🔗 {user.website}</p>
      
      </div>
      
        )}
    </div>
  );
}

export default App;


