import React from 'react';
import './HomePage.scss';
import Categories from '../compoentns/Categories';
import Franchises from '../compoentns/Franchises';
import Stores from '../compoentns/Stores';
import Sort from '../modules/Sort';
import Search from '../compoentns/Search';
import Address from '../compoentns/Address';
import Banner from '../compoentns/Banner';
import { Link } from 'react-router-dom';

const HomePage = ({ stores, categories }) => {
  return (
    <div className="hompage">
      <div className="hp-header">
        <Link to="/address">
          <Address />
        </Link>
        <Link to="/search">
          <Search />
        </Link>
      </div>
      <Banner />
      <Categories categories={categories} />
      <Franchises stores={stores} />
      <hr />
      <Sort />
      <Stores stores={stores} />
    </div>
  );
};

export default HomePage;
