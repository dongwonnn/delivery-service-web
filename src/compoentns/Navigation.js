import React from 'react';
import { Link } from 'react-router-dom';
// import './Navigation.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Navigation = () => {
  return (
    <div className="nav">
      <ul className="nav-body">
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/search">검색</Link>
        </li>
        <li>
          <Link to="/order">주문</Link>
        </li>
        <li>
          <Link to="/favorite">즐겨찾기</Link>
        </li>
        <li>
          <Link to="/profile">프로필</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
