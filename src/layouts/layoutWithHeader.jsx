import React from 'react';
import Header from '../components/Header';

const layoutWitchHeader = ({ children }) => {
  return (
    <div className="container">
        <Header/>
        <div>
          {children}
        </div>
    </div>
  );
}

export default layoutWitchHeader;