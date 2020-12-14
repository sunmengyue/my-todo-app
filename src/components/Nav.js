import React from 'react';
import Link from './Link';
import '../styles/Nav.css';

const Nav = ({ setStatus }) => {
  const statusHandler = (e) => {
    setStatus(e.target.innerText);
  };
  return (
    <ul
      className='nav d-flex justify-content-between mt-3'
      onClick={statusHandler}
    >
      <li className='nav-item'>
        <Link
          className='nav-link'
          aria-current='page'
          href='/'
          data-bs-toggle='tab'
          role='tab'
          aria-controls='All'
          aria-selected='true'
        >
          All
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          className='nav-link'
          aria-current='page'
          href='/active'
          data-bs-toggle='tab'
          role='tab'
          aria-controls='Active'
          aria-selected='true'
        >
          Active
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          className='nav-link'
          aria-current='page'
          href='/completed'
          data-bs-toggle='tab'
          role='tab'
          aria-controls='Completed'
          aria-selected='false'
        >
          Completed
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
