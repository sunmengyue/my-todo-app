import React from 'react';
import Backdrop from './Backdrop';
import './Modal.css';

const Modal = ({ children, show, handleClose }) => {
  return (
    <>
      <Backdrop show={show} handleClose={handleClose} />
      <div
        className='confirm-box'
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0',
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Modal;
