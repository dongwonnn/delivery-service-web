import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import './FavoritePage.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiFillStar } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';

const FavoritePage = ({ user }) => {
  if (user.likesList.length === 0) {
    return (
      <div className="favorite-empty">
        <h1 className="favorite-title">즐겨찾기</h1>

        <div className="favorite-empty-text">
          <p>즐겨찾는 맛집이 없습니다.</p>
          <p>
            좋아하는 맛집에 <AiFillHeart />를 눌러주세요.
          </p>
        </div>
      </div>
    );
  }

  return (
    <Container className="favorite">
      <Row>
        <Col>
          <h1 className="favorite-title">즐겨찾기</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="favorite-header">
            <p className="favorite-cnt">총 {user.likesList.length}개</p>
            <p className="favorite-sort">
              최근 주문순 <IoIosArrowDown />
            </p>
          </div>
        </Col>
      </Row>

      <Row>
        <div className="favorite-block"></div>
      </Row>

      <Row>
        <Col>
          {user.likesList.map((list) => (
            <Link to={`/detail/${list.name}`} key={list.id}>
              <div className="favorite-body">
                <div className="favorite-img"></div>
                <div className="favorite-info">
                  <p className="info-store">{list.name}</p>
                  <p className="info-grade">
                    <AiFillStar />
                    {list.grade}({list.feedNum})
                  </p>
                  <p className="info-dist">
                    0.8km · 21-31분 · {list.deliveryCost}원
                  </p>
                </div>
              </div>
            </Link>
          ))}
          <hr />
        </Col>
      </Row>

      <Row>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default FavoritePage;
