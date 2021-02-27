import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.scss';

const Categories = ({ categories }) => {
  return (
    <div className="hp-categorys">
      {categories.map((category) => (
        <Link to={`/category/${category.text}`} key={category.name}>
          <div className="hp-category">
            <img
              src={category.imgSrc}
              alt="food-category"
              className="hp-category-image"
            ></img>
            <p>{category.text}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
