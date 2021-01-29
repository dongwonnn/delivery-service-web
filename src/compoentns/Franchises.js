import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import './Franchises.scss';

const franchises = [
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
    name: '바스버거역삼',
    text: '바스버거 역삼점',
    detail: '4.8(2,526)·0.2km',
  },
];

const Franchises = () => {
  return (
    <div className="hp-recommand">
      <div className="hp-recommand-header">
        <p>인기 프랜차이즈</p>
        <BsArrowRight className="arrow-right" />
      </div>
      <div className="hp-recommand-lists">
        {franchises.map((fc) => (
          <div className="hp-recommand-list" key={fc.name}>
            <div className="list-img">이미지</div>
            <p className="list-name">{fc.text}</p>
            <div className="list-detail">
              <AiFillStar />
              <p>{fc.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Franchises;
