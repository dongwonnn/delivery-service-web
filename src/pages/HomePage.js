import React, { useEffect, useState } from 'react';
import './HomePage.scss';
import Categories from '../compoentns/Categories';
import Franchises from '../compoentns/Franchises';
import Stores from '../compoentns/Stores';
import Sort from '../modules/Sort';
import Search from '../compoentns/Search';
import Address from '../compoentns/Address';
import Banner from '../compoentns/Banner';
import axios from 'axios';

const HomePage = () => {
  // json-server ./data.json --port 4000

  const [stores, setStores] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/stores');
        setStores(response.data);
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="hompage">
      <div className="hp-header">
        <Address />
        <Search />
      </div>
      <Banner />
      <Categories />
      <Franchises />
      <hr />
      <Sort />
      <Stores stores={stores} />
    </div>
  );
};

export default HomePage;
