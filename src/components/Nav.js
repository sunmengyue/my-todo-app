import React from 'react';

const Nav = () => {
  return (
    <ul className='nav'>
      <li className='nav-item'>
        <a className='nav-link active' aria-current='page' href='#'>
          All
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' aria-current='page' href='#'>
          Active
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' aria-current='page' href='#'>
          Completed
        </a>
      </li>
    </ul>
  );
};

export default Nav;
