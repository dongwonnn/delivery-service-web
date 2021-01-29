import React from 'react';
import './Sort.scss';
import { IoIosArrowDown } from 'react-icons/io';

const Sort = () => {
  return (
    <div className="hp-sort">
      <p>골라먹는 맛집</p>
      <ul>
        <li>
          <div>추천순</div>
          <IoIosArrowDown />
        </li>
        <li>
          <div>배달비</div>
          <IoIosArrowDown />
        </li>
        <li>
          <div>최소주문</div>
          <IoIosArrowDown />
        </li>
        <li>
          <div>치타배달</div>
        </li>
      </ul>
    </div>
  );
};

export default Sort;
