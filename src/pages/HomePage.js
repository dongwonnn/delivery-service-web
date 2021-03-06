import React, { useCallback, useState } from 'react';
import './HomePage.scss';
import Categories from '../compoentns/Categories';
import Franchises from '../compoentns/Franchises';
import Stores from '../compoentns/Stores';
import Sort from '../modules/Sort';
import Search from '../compoentns/Search';
import Address from '../compoentns/Address';
import Banner from '../compoentns/Banner';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigation from '../compoentns/Navigation';

const HomePage = ({
  categories,
  orderList,
  user,
  setStores,
  stores,
  defaultAddress,
  recommand,
  cost,
  onDeliveryCost,
  onRecommand,
}) => {
  return (
    <Container className="homepage">
      <Navigation />
      <Row>
        <Col>
          <div className="homepage-header">
            <div className="header-address">
              <Link to="/address">
                <Address user={user} defaultAddress={defaultAddress} />
              </Link>
              <div className="header-search">
                <Link to="/search">
                  <Search />
                </Link>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Banner />
      </Row>
      <Row>
        <Categories categories={categories} />
      </Row>
      <Row>
        <span className="homepage-hr" />
      </Row>
      <Row>
        <Col>
          <Franchises />
        </Col>
      </Row>
      <Row>
        <span className="homepage-block" />
      </Row>
      <Row>
        <Col>
          <p className="homepage-sort">
            <strong>골라먹는 맛집</strong>
          </p>

          <Sort
            onRecommand={onRecommand}
            onDeliveryCost={onDeliveryCost}
            recommand={recommand}
            cost={cost}
          />
        </Col>
      </Row>
      {/* xs < 768 md < 1024 xl >= 1024 */}
      <Stores stores={stores} />
    </Container>
  );
};

export default React.memo(HomePage);
