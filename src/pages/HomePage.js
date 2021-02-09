import React, { useCallback, useEffect, useState } from 'react';
import './HomePage.scss';
import Categories from '../compoentns/Categories';
import Franchises from '../compoentns/Franchises';
import Stores from '../compoentns/Stores';
import Sort from '../modules/Sort';
import Search from '../compoentns/Search';
import Address from '../compoentns/Address';
import Banner from '../compoentns/Banner';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomePage = ({ categories, orderList }) => {
  const [stores, setStores] = useState([]);
  const [recommand, setRecommand] = useState(false);
  const [cost, setCost] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/stores');

        setStores(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const onRecommand = useCallback(() => {
    recommand
      ? setStores([...stores.sort((a, b) => b.grade - a.grade)])
      : setStores([...stores.sort((a, b) => a.grade - b.grade)]);

    setRecommand((recommand) => !recommand);
  }, [stores, recommand]);

  const onDeliveryCost = useCallback(() => {
    cost
      ? setStores([...stores.sort((a, b) => b.deliveryCost - a.deliveryCost)])
      : setStores([...stores.sort((a, b) => a.deliveryCost - b.deliveryCost)]);

    setCost((cost) => !cost);
  }, [stores, cost]);

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
      {orderList.totalPrice && (
        <div>
          <div>카트보기</div>
          <div>{orderList.totalPrice}</div>
        </div>
      )}
      <Franchises />
      <hr />
      <Sort
        onRecommand={onRecommand}
        onDeliveryCost={onDeliveryCost}
        recommand={recommand}
        cost={cost}
      />
      <Stores stores={stores} />
    </div>
  );
};

export default HomePage;
