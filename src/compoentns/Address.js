import React from 'react';
import './Address.scss';
import { GrLocation } from 'react-icons/gr';
import { AiOutlineArrowDown } from 'react-icons/ai';

const Address = () => {
  return (
    <div className="hp-address">
      <GrLocation />
      <p>서울특별시 강남구 강남대로92길 15</p>
      <AiOutlineArrowDown />
    </div>
  );
};

export default Address;
