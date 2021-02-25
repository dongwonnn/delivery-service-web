import React from 'react';
import './Address.scss';
import { FiMapPin } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';

const Address = ({ user, defaultAddress }) => {
  console.log(defaultAddress);
  return (
    <div className="address">
      <FiMapPin className="address-pin" />
      {user ? <p>{defaultAddress}</p> : <p>잠실 8동 </p>}
      <IoIosArrowDown className="address-arrow" />
    </div>
  );
};

export default Address;
