import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return(
    <nav className='navbar-nav navbar-expand-lg navbar-dark bg-dark mb-3 pr-5 py-3'>
        <a href='/' className='navbar-brand ml-5'>User App</a>
        <ul className='navbar-nav ml-auto'>
            <li className='nav-item active'>
                <Link to="/" className='nav-link'>Home</Link>
            </li>
            <li className='nav-item active'>
                <Link to="/add" className='nav-link'>Add User</Link>
            </li>
        </ul>
    </nav>
  );
}
export default Navbar;