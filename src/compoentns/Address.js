import React from 'react';
import './Address.scss';

const Address = ({ user, defaultAddress }) => {
  return (
    <div className="address">
      {user ? <p>{defaultAddress}</p> : <p>잠실 8동 </p>}
    </div>
  );
};

export default Address;
