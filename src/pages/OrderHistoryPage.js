import React, { useState } from 'react';
import Recept from '../compoentns/Recept';

const OrderHistoryPage = ({ user, detail }) => {
  const [modal, setModal] = useState(false);

  const onModalBtn = () => {
    setModal(!modal);
  };

  const onReviewBtn = () => {};

  if (user.orderHistory.length === 0) {
    return <div>주문 기록 없음</div>;
  }

  return (
    <div>
      {user.orderHistory.map((order, index) => (
        <div key={index}>
          <p>{order.orderMenu[0].store}</p>
          <p>{order.orderDate}</p>
          {order.delivCheck ? <p>배달 완료</p> : <p>배달 취소</p>}
          {order.orderMenu.map((list, index) => (
            <div key={index}>
              <div>{list.count}</div>
              <div>{list.mainMenu}</div>
              <div>{list.reqMenu}</div>
              <div>{list.selMenu}</div>
            </div>
          ))}
          <p>
            {order.orderMenu.reduce((acc, cur) => {
              return acc + cur.totalPrice;
            }, 0)}
          </p>

          <p onClick={onReviewBtn}>후기 쓰기</p>
          <p>재주문하기</p>
          <button onClick={onModalBtn}>영수증보기</button>
          <Recept modal={modal} order={order} detail={detail} />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default OrderHistoryPage;
