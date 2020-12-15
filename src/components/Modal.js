import React, { useState } from 'react';

const Modal = () => {
  return (
    <div className='modal' tabIndex='-1'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>
              {' '}
              Are you sure you want to delete all the tasks?
            </h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
            <div className='modal-footer'>
              <div
                className='btn-secondary'
                type='button'
                data-bs-dismiss='modal'
              >
                Cancel
              </div>
              <div className='btn-primary' type='button'>
                Yes
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
