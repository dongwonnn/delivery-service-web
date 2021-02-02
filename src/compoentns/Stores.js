import React from 'react';
import './Stores.scss';
import { AiFillStar } from 'react-icons/ai';
import { Link, Route, Switch } from 'react-router-dom';
import DetailPage from '../pages/DetailPage';
import OrderListPage from '../pages/OrderListPage';
import ReviewPage from '../pages/ReviewPage';

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
      <Switch>
        <Route path="/detail/:store" exact={true} component={DetailPage} />
      </Switch>
    </div>
  );
};

export default Stores;
