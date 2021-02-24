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
          <div className="item-card" key={store.name}>
            <Link to={`/detail/${store.name}`}>
              <div className="card-img"></div>
              <div className="card-text">
                <div className="card-name">{store.name}</div>
                <div className="card-detail">
                  <AiFillStar />
                  <p>
                    {store.grade} {store.feedNum} / ({store.deliveryCost}원)
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Col>
    </Row>
  );
};

export default Stores;
// {
//    <div style={{ height: '150vh', textAlign: 'center' }}>
// }
