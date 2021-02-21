import React from 'react';
import './Sort.scss';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const Sort = ({ onRecommand, recommand, onDeliveryCost, cost }) => {
  return (
    <div className="hp-sort">
      <ul>
        <li onClick={() => onRecommand()}>
          <div>추천순</div>
          {recommand ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </li>
        <li onClick={() => onDeliveryCost()}>
          <div>배달비</div>
          {cost ? <IoIosArrowDown /> : <IoIosArrowUp />}
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
