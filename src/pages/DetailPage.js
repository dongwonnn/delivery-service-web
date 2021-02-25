import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './DetailPage.scss';
import LikeList from '../compoentns/LikeList';
import { AiOutlineHeart, AiFillStar } from 'react-icons/ai';
import { BsClock } from 'react-icons/bs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const DetailPage = ({ match, setDetail, orderList, user, stores }) => {
  const { store } = match.params;
  const [detailItem, setDetailItem] = useState([]);
  const [payment, setPayment] = useState(0);

  useEffect(() => {
    const detail = stores.find((value) => value.name === store);
    if (detail !== undefined) {
      setDetailItem(detail);
      setDetail(detail);
    }
  }, [store, setDetail, stores]);

  useEffect(() => {
    const sum = orderList.reduce((acc, cur) => {
      return acc + cur.totalPrice;
    }, 0);

    setPayment(sum);
  }, [orderList]);

  if (detailItem.length === 0) {
    return <div>로딩중</div>;
  }

  return (
    <Container className="detail">
      <Row>
        <div className="detail-img">
          <Col>
            <span className="detail-favorite">
              {user ? (
                <LikeList user={user} store={store} detailItem={detailItem} />
              ) : (
                <Link to="/login">
                  <AiOutlineHeart />
                </Link>
              )}
            </span>
            <div className="detail-info">
              <p className="info-name">{detailItem.name}</p>
              <div className="info-detail">
                <AiFillStar />
                <p className="info-grade">{detailItem.grade}</p>
                <Link to={`/detail/${store}/review`}>
                  <p>
                    리뷰 <strong>{detailItem.feedNum}</strong>개 &gt;
                  </p>
                </Link>
              </div>
            </div>
          </Col>
        </div>
      </Row>
      <Row>
        <Col>
          <div className="detail-delivery-info">
            <div className="delivery-info-header">
              <div>
                <BsClock />
                <div> 21~31분</div>
              </div>
              <div className="delivery-store-info">매장 / 원산지 정보</div>
            </div>

            <div className="delivery-price-info">
              <p className="delivery-text">배달비</p>
              <p>
                <strong>{detailItem.deliveryCost}원</strong>
              </p>
            </div>
            <div className="delivery-price-info">
              <p className="delivery-text">최소주문</p>
              <p>5000원</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <div className="menu-nav">
          <div>추천메뉴</div>
          <div>메뉴소개</div>
          <div>튀김류</div>
          <div>토핑류</div>
        </div>
      </Row>
      <Row>
        <div className="line"></div>
      </Row>
      <Row>
        <Col>
          <div className="detail-subMenu">
            {detailItem.menu.length > 0 &&
              detailItem.menu.map((food) => (
                <Link to={`/detail/${store}/${food.name}`} key={food.id}>
                  <div className="subMenu">
                    <div className="subMenu-info">
                      <p className="food-name">{food.name}</p>
                      <p className="food-price">{food.price}원</p>
                      <p className="food-detail">{food.detail}</p>
                    </div>
                    <div className="subMenu-img"></div>
                  </div>
                  <hr />
                </Link>
              ))}
          </div>
        </Col>
      </Row>
      <Row>
        <div className="detail-cart">
          {orderList.length > 0 && (
            <Link to={`/detail/${store}/cart`}>
              <button className="detail-addBtn">
                <p className="order-length">{orderList.length} </p>
                <p>카트보기</p>
                <p className="order-price">{payment}원</p>
              </button>
            </Link>
          )}
        </div>
      </Row>
    </Container>
    // <div className="detail">
    //   <h2>디테일 페이지</h2>
    //   <div className="detail-img">
    //     <div>이미지</div>
    //   </div>
    //   {user ? (
    //     <LikeList user={user} store={store} detailItem={detailItem} />
    //   ) : (
    //     <Link to="/login">
    //       <AiOutlineHeart />
    //     </Link>
    //   )}

    //   <div className="detail-cart">
    //     {orderList.length > 0 && (
    //       <Link to={`/detail/${store}/cart`}>
    //         <button>
    //           <p>{orderList.length}</p>
    //           <p>카트보기</p>
    //           <p>{payment}</p>
    //         </button>
    //       </Link>
    //     )}
    //   </div>
    //   <div className="detail-info">
    //     <div>가게 이름 : {detailItem.name}</div>
    //     <AiFillStar />
    //     <div>별점 : {detailItem.grade}</div>
    //     <div>리뷰 개수 : {detailItem.feedNum}</div>
    //   </div>
    //   <div className="detail-delivery-info">
    //     <div>
    //       <BsClock />
    //       <div> 21~31분</div>
    //       <div>매장 / 원산지 정보</div>
    //     </div>
    //     <div>배달비 : {detailItem.deliveryCost}</div>
    //     <div>최소주문 : 5000원</div>
    //   </div>

    //   <div className="detail-review">
    //     {/* 후기 이동 */}
    //     <Link to={`/detail/${store}/review`}>
    //       <hr />
    //       리뷰
    //       <hr />
    //     </Link>
    //   </div>
    //   <div className="detail-subMenu">
    //     <div>
    //       메뉴 :
    //       {detailItem.menu.length > 0 &&
    //         detailItem.menu.map((food) => (
    //           <Link to={`/detail/${store}/${food.name}`} key={food.id}>
    //             <div>
    //               <div>음식 이름 : {food.name}</div>
    //               <div>음식 가격 : {food.price}</div>
    //               <div>음식 설명 : {food.detail}</div>
    //               <hr />
    //             </div>
    //           </Link>
    //         ))}
    //     </div>
    //   </div>
    // </div>
  );
};

export default DetailPage;

// {
//    {user ? (
//           <LikeList user={user} store={store} detailItem={detailItem} />
//         ) : (
//           <Link to="/login">
//             <AiOutlineHeart />
//           </Link>
//         )}
// }
