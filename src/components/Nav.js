import React from 'react';
import Link from './Link';
import '../styles/Nav.css';

const Nav = ({ setStatus }) => {
  const statusHandler = (e) => {
    setStatus(e.target.innerText);
  };

  return (
    <ul id='navbar' onClick={statusHandler}>
      <li className='nav-item'>
        <Link
          className={`${
            window.location.pathname === '/' ? 'currentPage' : 'nav-link'
          }`}
          href='/'
        >
          All
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          className={`${
            window.location.pathname === '/active' ? 'currentPage' : 'nav-link'
          }`}
          href='/active'
        >
          Active
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          className={`${
            window.location.pathname === '/completed'
              ? 'currentPage'
              : 'nav-link'
          }`}
          href='/completed'
        >
          Completed
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
