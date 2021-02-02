import React from 'react';

const OrderListPage = ({ match }) => {
  const { food } = match.params;

  return (
    <div>
      <div>카트에 담기</div>
      <div>메뉴 이름 : {food}</div>
      <div>가격 : </div>
      <div>수량</div>
      <button>카트에 담기</button>
    </div>
  );
};

export default OrderListPage;
