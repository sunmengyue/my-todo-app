import React from 'react';
import './Backdrop.css';

const Backdrop = ({ show, handleClose }) => {
  return show ? <div className='backdrop' onClick={handleClose}></div> : '';
};

export default Backdrop;
