import React from 'react';
import { Link } from 'react-router-dom';
import "./NotFoundPage.css"

const NotFoundPage = () => {
  return (
    <div className='not-found-container'>
      <div className="not-found-detail">
        <h1 className='error-text'>Error</h1>
        <h1 className='text-404'>404</h1>
        <h4 className='exist-text'>The page you are trying to access does not exist.</h4>
        <h4 className='going-back-text'>Try going back to our homepage.</h4>
        <Link to="/" className='home-btn'> Home </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;