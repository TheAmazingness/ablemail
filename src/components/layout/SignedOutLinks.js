import React from 'react';
import { Link } from 'react-router-dom';

const SignedOutLinks = ({ home }) => {
  return (
    <>
      <Link className={ `navbar-item ${ home ? 'is-active' : '' }` } to="/">Home</Link>
      <Link className="navbar-item" to="/about">About</Link>
      <span className="navbar-item">
        <Link className="button is-primary is-inverted is-large" to="/signup">
          <span className="icon">
            <i className="fas fa-key" />
          </span>
          <span>Sign Up</span>
        </Link>
      </span>
      <Link className="navbar-item" to="/signin">Sign In</Link>
    </>
  );
};

export default SignedOutLinks;