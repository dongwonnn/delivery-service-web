import React, { useState } from 'react';
import './CartPage.scss';
import { GrFormClose } from 'react-icons/gr';
import { BiCaretRight } from 'react-icons/bi';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CartPage = ({
  orderList,
  detail,
  setOrderList,
  history,
  user,
  defaultAddress,
}) => {
  const [lists, setLists] = useState(orderList);

  const onCloseBtn = (idx) => {
    if (lists.length > 1) {
      const newLists = lists.filter((_, index) => index !== idx);
      setLists(newLists);
      setOrderList(lists);
    } else {
      alert('최소 한가지 선택');
    }
  };

  const onAddMenu = () => {
    setOrderList(lists);
    history.go(-1);
  };

  const payment = lists.reduce((acc, cur) => {
    return acc + cur.totalPrice;
  }, 0);

  const onPayBtn = () => {
    // 이 로직은 주문-> 배달 완료일 때 가능한 로직
    // 임시로 결제하기 눌렀을 때 배달이 완료됐다고 가정

    const orderInfo = {
      orderMenu: lists,
      orderDate: getFormatDate(),
      delivCheck: true,
    };

    user.orderHistory.push(orderInfo);
    setOrderList([]);
    history.push('/');
  };

  console.log(lists);

  if (orderList.length === 0) return <div></div>;
  return (
    <Container className="cart">
      <Row>
        <Col>
          <div className="cart-header">
            <h4>카트</h4>
            <p className="header-building">{defaultAddress} (으)로 배달</p>
            <p className="header-address">주소</p>
          </div>
        </Col>
      </Row>
      <Row>
        <div className="cart-block"></div>
      </Row>
      <Row>
        <Col>
          <div className="cart-main">
            <p className="main-name">{detail.name}</p>
            <hr />
            {lists.map((list, idx) => (
              <div key={idx} className="main-body">
                <div className="main-count">{list.count}</div>
                <div className="main-menu">
                  <div>{list.mainMenu}</div>
                  <div className="main-cancel">
                    <p>{list.totalPrice}원</p>
                    <GrFormClose onClick={() => onCloseBtn(idx)} />
                  </div>
                </div>
                <p>{list.reqMunu}</p>
                <p>{list.selMenu}</p>
              </div>
            ))}
            <hr />
            <div className="main-addMenu">
              <p onClick={onAddMenu}>+메뉴추가</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <div className="cart-block"></div>
      </Row>
      <Row>
        <Col>
          <div className="cart-coupon">
            <p className="coupon-title">할인쿠폰</p>
            <div className="coupon-card">
              <p className="card-title">
                사용가능 쿠폰
                <span>
                  0장 <BiCaretRight />
                </span>
              </p>
              <div className="coupon-inner">
                <div>
                  <p>쿠폰을 선택해 주세요</p>
                </div>
                <button>선택</button>
              </div>
            </div>
            <hr />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="cart-list">
            <div>
              <p>주문금액</p>
              <p>{payment}원</p>
            </div>
            <div>
              <p>배달비</p>
              <p>+{detail.deliveryCost}원</p>
            </div>
            <hr />
            <div className="list-amount">
              <div className="list-text">
                <p>총 결제금액</p>
              </div>
              <div className="list-total">
                <p>{detail.deliveryCost + payment}원</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <div className="cart-thick-block"></div>
      </Row>
      <Row>
        <Col>
          <div className="cart-request">
            <p className="request-header">요청사항</p>
            <p>가게 사장님에게</p>
            <input placeholder="예) 견과류는 빼주세요"></input>
            <div className="request-semi">
              <input type="checkbox" />
              <label htmlFor="request">일회용 수저, 포크는 빼주세요</label>
            </div>
            <div className="request-message">
              <p>배달 기사님에게</p>
              <input placeholder="초인종 누르고 문 앞"></input>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <div className="cart-block"></div>
      </Row>
      <Row>
        <Col>
          <div className="pay-select">
            <p className="pay-header">결제수단</p>
            <p>KB국민카드 ********</p>
          </div>
        </Col>
      </Row>
      <Row>
        <div className="cart-block"></div>
      </Row>
      <Row>
        <div className="cart-payment" onClick={onPayBtn}>
          <p>{detail.deliveryCost + payment}원 결제하기</p>
        </div>
      </Row>
    </Container>
    // <div className="cart">
    //   <div className="cart-header">
    //     <h1>카트</h1>
    //     <p className="header-building">대승빌딩 (으)로 배달</p>
    //     <p className="header-address">주소</p>
    //   </div>
    //   <hr />

    //   <div className="cart-main">
    //     <div>
    //       {lists.map((list, idx) => (
    //         <div key={idx}>
    //           <p>{list.mainMenu}</p>
    //           <p>{list.reqMunu}</p>
    //           <p>{list.selMenu}</p>
    //           <p>{list.totalPrice}</p>
    //           <GrFormClose onClick={() => onCloseBtn(idx)} />
    //         </div>
    //       ))}
    //     </div>
    //     <hr />
    //     <div className="main-addMenu">
    //       <p onClick={onAddMenu}>+메뉴추가</p>
    //     </div>
    //   </div>
    //   <hr />
    //   <div className="cart-coupon">
    //     <p className="coupon-title">할인쿠폰</p>
    //     <div className="coupon-card">
    //       <p className="card-title">사용가능 쿠폰 0장</p>
    //       <div className="coupon-inner">
    //         <div>
    //           <p>쿠폰을 선택해 주세요</p>
    //         </div>
    //         <button>선택</button>
    //       </div>
    //     </div>
    //   </div>
    //   <hr />
    //   <div className="cart-list">
    //     <div>
    //       <p>주문금액</p>
    //       <p>{payment}원</p>
    //     </div>
    //     <div>
    //       <p>배달비</p>
    //       <p>{detail.deliveryCost}원</p>
    //     </div>
    //     <div>
    //       <p className="list-amount">총 결제금액</p>
    //       <p>{detail.deliveryCost + payment}원</p>
    //     </div>
    //   </div>
    //   <hr />

    //   <div className="cart-request">
    //     <p className="request-header">요청사항</p>
    //     <div>
    //       <p>가게 사장님에게</p>
    //       <textarea placeholder="예) 견과류는 빼주세요"></textarea>
    //       <input type="checkbox" />
    //       <label htmlFor="request">일회용 수저, 포크는 빼주세요</label>
    //     </div>
    //     <div>
    //       <p>배달 기사님에게</p>
    //       <textarea placeholder="초인종 누르고 문 앞"></textarea>
    //     </div>
    //     <hr />

    //     <div>
    //       <p>결제수단</p>
    //       <p>KB국민카드 ********</p>
    //     </div>
    //   </div>
    //   <div className="cart-payment">
    //     <button onClick={onPayBtn}>
    //       {detail.deliveryCost + payment}원 결제하기
    //     </button>
    //   </div>
    // </div>
  );
};

export default CartPage;

function getFormatDate() {
  const date = new Date();
  let year = date.getFullYear(); //yyyy
  let month = 1 + date.getMonth(); //M
  month = month >= 10 ? month : '0' + month; //month 두자리로 저장
  let day = date.getDate(); //d
  day = day >= 10 ? day : '0' + day; //day 두자리로 저장

  let hours = date.getHours();
  hours = hours >= 10 ? hours : '0' + hours; //day 두자리로 저장

  let min = date.getMinutes();
  min = min >= 10 ? min : '0' + min; //day 두자리로 저장

  return `${year}-${month}-${day} ${hours}:${min}`; //'-' 추가하여 yyyy-mm-dd 형태 생성 가능
}
