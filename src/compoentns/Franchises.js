import React, { useState, useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import './Franchises.scss';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import { store } from '../data/stores';
const franchise = [...store];

const Franchises = () => {
  // const [stores, setStores] = useState(store);

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
      </div>
      <div className="hp-recommand-lists">
        {franchise.map(
          (store) =>
            store.franchise && (
              <Link to={`/detail/${store.name}`} key={store.name}>
                <div className="hp-recommand-list">
                  <img
                    src={store.imgSrc}
                    alt="franchise"
                    className="list-img"
                  ></img>
                  <p className="list-name">{store.name}</p>
                  <div className="list-detail">
                    <AiFillStar />
                    <p>
                      {store.grade} ({store.feedNum})<br />
                    </p>
                  </div>
                  <p className="list-delivery-cost">
                    배달비 {store.deliveryCost}
                  </p>
                </div>
              </Link>
            ),
        )}
      </div>
    </div>
  );
};

export default Franchises;
