import React from 'react';
import Link from './Link';

const Nav = () => {
  return (
    <ul className='nav'>
      <li className='nav-item'>
        <Link className='nav-link active' aria-current='page' href='/'>
          All
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' aria-current='page' href='/active'>
          Active
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' aria-current='page' href='/completed'>
          Completed
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
