import React from 'react';
import './CartPage.scss';
import { GrFormClose } from 'react-icons/gr';

const CartPage = ({ orderList, detail }) => {
  if (orderList.length === 0) return <div></div>;

  let payment = 0;
  for (let i = 0; i < orderList.length; i++) {
    payment = payment + orderList[i].totalPrice;
  }

  return (
    <div className="cart">
      <div className="cart-header">
        <h1>카트</h1>
        <p className="header-building">대승빌딩 (으)로 배달</p>
        <p className="header-address">주소</p>
      </div>
      <hr />

      <div className="cart-main">
        <div>
          {orderList.map((list, idx) => (
            <div key={idx}>
              <p>{list.mainMenu}</p>
              <p>{list.reqMunu}</p>
              <p>{list.selMenu}</p>
              <p>{list.totalPrice}</p>
              <GrFormClose />
            </div>
          ))}
        </div>
        <hr />
        <div className="main-addMenu">
          <p>+메뉴추가</p>
        </div>
      </div>
      <hr />
      <div className="cart-coupon">
        <p className="coupon-title">할인쿠폰</p>
        <div className="coupon-card">
          <p className="card-title">사용가능 쿠폰 0장</p>
          <div className="coupon-inner">
            <div>
              <p>쿠폰을 선택해 주세요</p>
            </div>
            <button>선택</button>
          </div>
        </div>
      </div>
      <hr />
      <div className="cart-list">
        <div>
          <p>주문금액</p>
          <p>{payment}원</p>
        </div>
        <div>
          <p>배달비</p>
          <p>{detail.deliveryCost}원</p>
        </div>
        <div>
          <p className="list-amount">총 결제금액</p>
          <p>{detail.deliveryCost + payment}원</p>
        </div>
      </div>
      <hr />

      <div className="cart-request">
        <p className="request-header">요청사항</p>
        <div>
          <p>가게 사장님에게</p>
          <textarea placeholder="예) 견과류는 빼주세요"></textarea>
          <input type="checkbox" />
          <label htmlFor="request">일회용 수저, 포크는 빼주세요</label>
        </div>
        <div>
          <p>배달 기사님에게</p>
          <textarea placeholder="초인종 누르고 문 앞"></textarea>
        </div>
        <hr />

        <div>
          <p>결제수단</p>
          <p>KB국민카드 ********</p>
        </div>
      </div>
      <div className="cart-payment">
        <button>{detail.deliveryCost + payment}원 결제하기</button>
      </div>
    </div>
  );
};

export default CartPage;
