import React from 'react';
import { FidgetSpinner } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.spinner}>
      <FidgetSpinner />
    </div>
  );
};

export default Loader;
