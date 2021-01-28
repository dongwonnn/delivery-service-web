import React from 'react';
import './HomePage.scss';

const HomePage = () => {
  return (
    <div className="hp">
      <div className="hp-header">
        <div className="hp-address">서울특별시 강남구 강남대로92길 15</div>
        <div>search button</div>

        <div>배너자리</div>
      </div>

      <div className="hp-main">
        <div className="hp-header">
          <ul>
            <li>한식</li>
            <li>일식</li>
            <li>중식</li>
            <li>양식</li>
          </ul>
        </div>

        <hr />

        <div className="hp-category">
          <ul>
            <li>만랩커피</li>
            <li>찜닭</li>
            <li>모모스테이크</li>
          </ul>
        </div>

        <div className="hp-sort">
          <ul>
            <li>추천순</li>
            <li>치타배달</li>
            <li>배달비</li>
            <li>최수주문</li>
          </ul>
        </div>

        <div className="hp-items">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
