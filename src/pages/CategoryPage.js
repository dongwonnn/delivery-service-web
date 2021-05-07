import React, { useEffect, useState } from 'react';
import Categories from '../compoentns/Categories';
import './CategoryPage.scss';
import Stores from '../compoentns/Stores';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sort from '../modules/Sort';

const CategoryPage = ({
  match,
  categories,
  stores,
  recommand,
  cost,
  onDeliveryCost,
  onRecommand,
}) => {
  const { category } = match.params;
  const [catStores, setCatStores] = useState([]);

  useEffect(() => {
    const sortCat = stores.filter((store) => store.category === category);
    setCatStores(sortCat);
  }, [category, stores]);

  return (
    <Container className="categoryPage">
      <Row>
        <Col>
          <div className="categroy-title">{category}</div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Categories categories={categories} />
        </Col>
      </Row>
      <Row>
        <div className="category-line"></div>
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
      <Row>
        <Col>
          <Stores stores={catStores} />
        </Col>
      </Row>
    </Container>
  );
};

export default CategoryPage;
