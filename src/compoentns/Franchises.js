import React, { useState, useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import './Franchises.scss';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import { store } from '../data/stores';

const Franchises = () => {
  const [stores, setStores] = useState(store);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:4000/stores');

  //       setStores(response.data);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="hp-recommand">
      <div className="hp-recommand-header">
        <p>인기 프랜차이즈</p>
        <BsArrowRight className="arrow-right" />
      </div>
      <div className="hp-recommand-lists">
        {stores.map(
          (store) =>
            store.franchise && (
              <Link to={`/detail/${store.name}`} key={store.name}>
                <div className="hp-recommand-list">
                  <div className="list-img">이미지</div>
                  <p className="list-name">{store.name}</p>
                  <div className="list-detail">
                    <AiFillStar />
                    <p>
                      {store.grade} ({store.feedNum})
                    </p>
                  </div>
                </div>
              </Link>
            ),
        )}
      </div>
      <hr />
    </div>
  );
};

export default Franchises;
