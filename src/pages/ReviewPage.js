import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ReviewPage.scss';
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';

const ReviewPage = ({ match, stores }) => {
  const { store } = match.params;
  const [details, setDetails] = useState([]);
  const [recommandToggle, setRecommandToggle] = useState(false);

  useEffect(() => {
    const nextDetails = stores.find((value) => value.name === store);
    setDetails(nextDetails);
  }, [stores, store]);

  const upBtn = (id) => {
    const nextRecommandToggle = !recommandToggle;
    if (nextRecommandToggle === true) {
      details.review[id].recommand += 1;
    } else {
      details.review[id].recommand -= 1;
    }

    setRecommandToggle(nextRecommandToggle);
  };

  const downBtn = () => {};

  if (details.length === 0) {
    return <div>로딩중</div>;
  }

  return (
    <Container className="review">
      <Row>
        <Col className="review-header">
          <p>{store} 리뷰</p>
        </Col>
      </Row>
      <Row>
        <Col className="review-sort">
          <div>
            <input type="checkbox" />
            <label htmlFor="photo-check">포토리뷰</label>
          </div>
          <div className="sort-latest">
            최신순
            <IoIosArrowDown />
          </div>
        </Col>
      </Row>

      <Row>
        <Col className="review-main">
          {details.review.length > 0 &&
            details.review.map((review) => (
              <div key={review.id} className="review-list">
                <p className="review-name">{review.user[0]}**</p>
                <div className="review-info">
                  <p>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </p>
                  <p className="review-data">{review.date}</p>
                </div>
                <div className="review-img"></div>
                <p className="review-text">{review.text}</p>
                <p className="review-order">
                  주문 음식{' '}
                  <strong className="order-menu">{review.orderdMenu}</strong>
                </p>
                {review.recommand > 0 && (
                  <p className="review-recommand">
                    <strong>{review.recommand}</strong>명에게 도움이 되었습니다.
                  </p>
                )}
                <div className="review-btn">
                  <button onClick={() => upBtn(review.id)}>
                    <p>
                      <FiThumbsUp />
                      도움이 돼요
                    </p>
                  </button>
                  <button onClick={() => upBtn(review.id)}>
                    <p>
                      <FiThumbsDown />
                      도움 안돼요
                    </p>
                  </button>
                </div>
                <hr />
              </div>
            ))}
        </Col>
      </Row>
    </Container>

    // <div>
    //   <p>{store} 리뷰</p>
    //   <div>
    //     <div>
    //       <input type="checkbox" />
    //       <label htmlFor="photo-check">포토리뷰</label>
    //     </div>
    //     <div>최신순</div>
    //   </div>
    //   <div>
    //     {details.review.length > 0 &&
    //       details.review.map((review) => (
    //         <div key={review.id}>
    //           <p>이름 : {review.user}</p>
    //           <p>날짜 : {review.date}</p>
    //           <p>별점 : {review.grade}</p>
    //           <div>텍스트 : {review.text}</div>
    //           <div>주문 음식 : {review.orderdMenu}</div>
    //           <p>추천수 : {review.recommand}</p>
    //         </div>
    //       ))}
    //   </div>
    // </div>
  );
};

export default ReviewPage;
