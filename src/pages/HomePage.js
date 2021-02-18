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

const HomePage = ({
  categories,
  orderList,
  user,
  setStores,
  stores,
  defaultAddress,
}) => {
  const [recommand, setRecommand] = useState(false);
  const [cost, setCost] = useState(false);

  const onRecommand = useCallback(() => {
    recommand
      ? setStores([...stores.sort((a, b) => b.grade - a.grade)])
      : setStores([...stores.sort((a, b) => a.grade - b.grade)]);

    setRecommand((recommand) => !recommand);
  }, [stores, recommand, setStores]);

  const onDeliveryCost = useCallback(() => {
    cost
      ? setStores([...stores.sort((a, b) => b.deliveryCost - a.deliveryCost)])
      : setStores([...stores.sort((a, b) => a.deliveryCost - b.deliveryCost)]);

    setCost((cost) => !cost);
  }, [stores, cost, setStores]);

  return (
    <Container>
      <Row>
        <Col>
          <Link to="/address">
            <Address user={user} defaultAddress={defaultAddress} />
          </Link>
          <Link to="/search">
            <Search />
          </Link>
        </Col>
      </Row>
      <Row>
        <Banner />
      </Row>
      <Row>
        <Col>
          <Categories categories={categories} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Franchises />
        </Col>
      </Row>
      <Row>
        <Col>
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

    // <div className="hompage">
    //   <div className="hp-header">
    //     <Link to="/address">
    //       <Address user={user} defaultAddress={defaultAddress} />
    //     </Link>
    //     <Link to="/search">
    //       <Search />
    //     </Link>
    //   </div>
    //   <Banner />
    //   <Categories categories={categories} />
    //   {orderList.totalPrice && (
    //     <div>
    //       <div>카트보기</div>
    //       <div>{orderList.totalPrice}</div>
    //     </div>
    //   )}
    //   <Franchises />
    //   <hr />
    //   <Sort
    //     onRecommand={onRecommand}
    //     onDeliveryCost={onDeliveryCost}
    //     recommand={recommand}
    //     cost={cost}
    //   />
    //   <Stores stores={stores} />
    // </div>
  );
};

export default React.memo(HomePage);
