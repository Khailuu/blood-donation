import React, { Fragment } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export const ReactToastifyProvider = ({ children }) => {
  return (
    <Fragment>
      <ToastContainer
        pauseOnHover={true}
        closeOnClick={true}
        draggable={true} 
        style={{ marginTop: '80px' }}
      />
      {children}
    </Fragment>
  );
};