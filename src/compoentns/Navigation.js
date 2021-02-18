import React from 'react';
import './Navigation.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { BiHomeAlt, BiSearch, BiHeart, BiCalendarCheck } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';

const Navigation = () => {
  return (
    <Container>
      <Row className="nav-main">
        <Col className="nav-item">
          <Link to="/">
            <div className="nav-item-body">
              <BiHomeAlt />
              <p>홈</p>
            </div>
          </Link>
        </Col>
        <Col className="nav-item">
          <Link to="/search">
            <div className="nav-item-body">
              <BiSearch />
              <p>검색</p>
            </div>
          </Link>
        </Col>
        <Col className="nav-item">
          <Link to="/order">
            <div className="nav-item-body">
              <BiHeart />
              <p>즐겨찾기</p>
            </div>
          </Link>
        </Col>
        <Col className="nav-item">
          <Link to="/favorite">
            <div className="nav-item-body">
              <BiCalendarCheck />
              <p>주문내역</p>
            </div>
          </Link>
        </Col>
        <Col className="nav-item">
          <Link to="/profile">
            <div className="nav-item-body">
              <BsPerson />
              <p>My</p>
            </div>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Navigation;
