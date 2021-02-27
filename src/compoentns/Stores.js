import React from 'react';
import './Stores.scss';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Stores = ({ stores }) => {
  return (
    <Row className="hp-items">
      <Col>
        {stores.map((store) => (
          <Link to={`/detail/${store.name}`} key={store.name}>
            <div className="item-card">
              <img src={store.imgSrc} alt="store" className="card-img"></img>
              <div className="card-text">
                <div className="card-name">{store.name}</div>
                <div className="card-detail">
                  <AiFillStar />
                  <p>
                    {store.grade} ({store.feedNum}) · 배달비{' '}
                    {store.deliveryCost}원
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Col>
    </Row>
  );
};

export default Stores;
// {
//    <div style={{ height: '150vh', textAlign: 'center' }}>
// }
