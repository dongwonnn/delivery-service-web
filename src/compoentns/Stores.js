import React from 'react';
import './Stores.scss';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Stores = ({ stores }) => {
  return (
    <div className="hp-items">
      {stores.map((store) => (
        <Link to={`/detail/${store.name}`} key={store.name}>
          <div className="item-card" key={store.name}>
            <div className="card-img">
              <div className="fst-img"></div>
              <div className="sec-img"></div>
              <div className="third-img"></div>
            </div>
            <div className="card-text">
              <div className="card-name">{store.name}</div>
              <div className="card-detail">
                <AiFillStar />
                <p>
                  {store.grade} {store.feedNum} / ({store.deliveryCost}원)
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Stores;
