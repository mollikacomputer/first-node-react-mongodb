import React from 'react';
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div>
            <h1> Home route</h1>
            <ul>
                 <li>
                 <Link to="/">Home</Link>
                 </li>
                <li> 
                <Link to="/adduser">Add User</Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;