import React from 'react';
import { Link } from 'react-router-dom';
import AuthDetails from '../../pages/LoginSignup/AuthDetails'; 
import useAuth from '../../pages/LoginSignup/useAuth';
import './Header.css';

// Functional component
function Header() {
  const { user } = useAuth();  

  return (
    <header className="header-container">
      <nav className="nav-bar">
        <div className="logo">
          <Link to="/" className="brand-name"> RecipeFinder</Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/recipe-explore" className="nav-link">Explore Recipes</Link></li>
          {user && (
            <>
              <li><Link to="/recipe-form" className="nav-link">Add Recipes</Link></li>
              <li><Link to="/my-recipes" className="nav-link">My Recipes</Link></li>
            </>
          )}
          {!user && (
            <>
              <li><Link to="/signup" className="nav-link">Join the Culinary Adventure</Link></li>
              <li><Link to="/login" className="nav-link">Login</Link></li>
            </>
          )}
        </ul>
        <AuthDetails />
      </nav>
    </header>
  );
}

export default Header;
