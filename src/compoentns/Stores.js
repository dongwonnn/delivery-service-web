import React from 'react';
import './Stores.scss';
import { AiFillStar } from 'react-icons/ai';

const stores = [
  {
    name: '만랩커피강남',
    text: '만랩커피 강남점',
    detail: '4.8(2,526)·0.2km',
  },
  {
    name: '내가찜한닭강남',
    text: '내가찜한닭 강남점',
    detail: '4.8(2,526)·0.2km',
  },
  {
    name: '버거킹신논현',
    text: '버거킹 신논현점',
    detail: '4.8(2,526)·0.2km',
  },
  {
    name: '크리스피크림도넛강남',
    text: '크리스피크림도넛 강남점',
    detail: '4.8(2,526)·0.2km',
  },
  {
    name: '맘스터치 논현아이파크',
    text: '맘스터치 논현아이파크점',
    detail: '4.8(2,526)·0.2km',
  },
  {
    name: '바스버거역삼1',
    text: '바스버거 역삼점1',
    detail: '4.8(2,526)·0.2km',
  },
  {
    name: '바스버거역삼2',
    text: '바스버거 역삼점2',
    detail: '4.8(2,526)·0.2km',
  },
  {
    name: '바스버거역삼3',
    text: '바스버거 역삼점3',
    detail: '4.8(2,526)·0.2km',
  },
  {
    name: '바스버거역삼4',
    text: '바스버거 역삼점4',
    detail: '4.8(2,526)·0.2km',
  },
];

const Stores = () => {
  return (
    <div className="hp-items">
      {stores.map((store) => (
        <div className="item-card" key={store.name}>
          <div className="card-img">
            <div className="fir-img"></div>
            <div className="sec-img"></div>
            <div className="third-img"></div>
          </div>
          <div className="card-text">
            <div className="card-name">{store.text}</div>
            <div className="card-detail">
              <AiFillStar />
              <p>{store.detail} </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stores;
