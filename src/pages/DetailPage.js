import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './DetailPage.scss';

const DetailPage = ({ match, setDetailFromApp, orderList }) => {
  const { store } = match.params;
  const [detail, setDetail] = useState();
  const [payment, setPayment] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/stores/?name=${store}`,
        );
        setDetail(response.data[0]);
        setDetailFromApp(response.data[0]);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [store, setDetailFromApp]);

  useEffect(() => {
    const sum = orderList.reduce((acc, cur) => {
      return acc + cur.totalPrice;
    }, 0);

    setPayment(sum);
  }, [orderList]);

  if (detail === undefined) {
    return <div>로딩중</div>;
  }

  return (
    <div className="detail-page">
      <h2>디테일 페이지</h2>
      <div className="dp-cart">
        {orderList.length > 0 && (
          <Link to={`/detail/${store}/cart`}>
            <button>
              <p>{orderList.length}</p>
              <p>카트보기</p>
              <p>{payment}</p>
            </button>
          </Link>
        )}
      </div>
      <div className="dp-info">
        <div>가게 이름 : {detail.name}</div>
        <div>별점 : {detail.grade}</div>
        <div>리뷰 개수 : {detail.feedNum}</div>
        <div>배달비 : {detail.deliveryCost}</div>
      </div>

      <div className="dp-review">
        {/* 후기 이동 */}
        <Link to={`/detail/${store}/review`}>
          <hr />
          리뷰
          <hr />
        </Link>
      </div>
      <div className="dp-subMenu">
        <div>
          메뉴 :
          {detail.menu.map((food) => (
            <Link to={`/detail/${store}/${food.name}`} key={food.id}>
              <div>
                <div>음식 이름 : {food.name}</div>
                <div>음식 가격 : {food.price}</div>
                <div>음식 설명 : {food.detail}</div>
                <hr />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
