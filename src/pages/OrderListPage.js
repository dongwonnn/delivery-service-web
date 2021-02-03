import React from 'react';

const OrderListPage = ({ match, detail }) => {
  const { food } = match.params;

  console.log('22', detail.menu);

  return (
    <div>
      <div></div>
      <div>카트에 담기</div>
      <div>메뉴 이름 : {food}</div>
      <div>가격 : </div>
      <div>수량</div>
      <button>카트에 담기</button>
    </div>
  );
};

export default OrderListPage;
