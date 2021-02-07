import React from 'react';

const Recept = ({ modal, order, detail }) => {
  console.log(modal);
  console.log(order);

  const sumPrice = order.orderMenu.reduce((acc, cur) => {
    return acc + cur.totalPrice;
  }, 0);

  return (
    <div>
      {modal && (
        <div>
          <h1>영수증</h1>
          <hr />
          <div className="recept-card">
            <h1>{order.orderMenu[0].store}</h1>
            <p>{order.orderDate}</p>
            {order.orderMenu.map((list, index) => (
              <div key={index}>
                <div>{list.mainMenu}</div>
                <div>{list.reqMenu}</div>
                <div>{list.selMenu}</div>
                <div>{list.totalPrice}</div>
              </div>
            ))}
            <hr />
            <div>
              <p>주문금액 :{sumPrice}</p>
              <p>배달비 : {detail.deliveryCost}</p>
              <p>소액 주문비 : 0</p>
              <p>할인금액 : 0</p>
            </div>
            <hr />
            <h1>총 결제금액 : {sumPrice + detail.deliveryCost}</h1>
          </div>
          <p>KB국민카드 ****0000** 결제</p>
        </div>
      )}
    </div>
  );
};

export default Recept;
