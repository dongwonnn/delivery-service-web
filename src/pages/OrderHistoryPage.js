import React, { useState } from 'react';
import Recept from '../compoentns/Recept';
import './OrderHistoryPage.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigation from '../compoentns/Navigation';

const OrderHistoryPage = ({ user, detail }) => {
  const [modal, setModal] = useState(false);

  const onModalBtn = () => {
    setModal(!modal);
  };

  const onReviewBtn = () => {};

  if (user.orderHistory.length === 0) {
    return (
      <Container className="orderHistoryPage">
        <Row>
          <Navigation />
        </Row>
        <Row>
          <div className="orderHistoryPage-header">
            <p>과거 주문 내역</p>
            <p>준비중</p>
          </div>
          <div className="orderHistoryPage-hr" />
        </Row>
        <Row>
          <div className="orderHistory-empty">
            <p>주문 내역이 없습니다.</p>
          </div>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="orderHistoryPage">
      <Row>
        <Navigation />
      </Row>
      <Row>
        <div className="orderHistoryPage-header">
          <p>과거 주문 내역</p>
          <p>준비중</p>
        </div>
        <div className="orderHistoryPage-hr" />
      </Row>
      {user.orderHistory.map((order, index) => (
        <Row key={index}>
          <Col>
            <div className="orderHistoryPage-body">
              <div className="body-header">
                <div>
                  <p className="body-store">{order.orderMenu[0].store}</p>
                  <p className="body-date">{order.orderDate}</p>
                  {order.delivCheck ? (
                    <p className="body-delivery-check">배달 완료</p>
                  ) : (
                    <p>배달 취소</p>
                  )}
                </div>
                <div className="body-img"></div>
              </div>
              {order.orderMenu.map((list, index) => (
                <div className="body-orderList" key={index}>
                  <div className="list-count">{list.count}</div>
                  <div>{list.mainMenu}</div>
                  <div>{list.reqMenu}</div>
                  <div>{list.selMenu}</div>
                </div>
              ))}
              <p className="body-price">
                합계 :
                <strong>
                  {order.orderMenu.reduce((acc, cur) => {
                    return acc + cur.totalPrice;
                  }, 0)}
                </strong>
                원
              </p>

              {/* <p onClick={onReviewBtn}>후기 쓰기</p> */}
              <div className="body-reorder">재주문하기</div>
              <button className="body-receipt" onClick={onModalBtn}>
                영수증보기
              </button>
              <Recept modal={modal} order={order} detail={detail} />
            </div>
          </Col>
        </Row>
      ))}
    </Container>

    // <div>
    //   {user.orderHistory.map((order, index) => (
    //     <div key={index}>
    //       <p>{order.orderMenu[0].store}</p>
    //       <p>{order.orderDate}</p>
    //       {order.delivCheck ? <p>배달 완료</p> : <p>배달 취소</p>}
    //       {order.orderMenu.map((list, index) => (
    //         <div key={index}>
    //           <div>{list.count}</div>
    //           <div>{list.mainMenu}</div>
    //           <div>{list.reqMenu}</div>
    //           <div>{list.selMenu}</div>
    //         </div>
    //       ))}
    //       <p>
    //         {order.orderMenu.reduce((acc, cur) => {
    //           return acc + cur.totalPrice;
    //         }, 0)}
    //       </p>

    //       <p onClick={onReviewBtn}>후기 쓰기</p>
    //       <p>재주문하기</p>
    //       <button onClick={onModalBtn}>영수증보기</button>
    //       <Recept modal={modal} order={order} detail={detail} />
    //       <hr />
    //     </div>
    //   ))}
    // </div>
  );
};

export default OrderHistoryPage;
