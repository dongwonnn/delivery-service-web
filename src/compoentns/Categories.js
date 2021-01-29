import React from 'react';
import './Categories.scss';

const categories = [
  {
    name: 'kor',
    text: '한식',
  },
  {
    name: 'jap',
    text: '일식',
  },
  {
    name: 'chn',
    text: '중식',
  },
  {
    name: 'west',
    text: '양식',
  },
  {
    name: 'alone',
    text: '1인분',
  },
  {
    name: 'chicken',
    text: '치킨',
  },
  {
    name: 'snack',
    text: '분식',
  },
  {
    name: 'pork',
    text: '돈가스',
  },
  {
    name: 'pork-feet',
    text: '족발',
  },
];

const Categories = () => {
  return (
    <div className="hp-categorys">
      {categories.map((category) => (
        <div className="hp-category" key={category.name}>
          <div></div>
          <p>{category.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
