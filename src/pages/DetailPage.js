import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './DetailPage.scss';
import LikeList from '../compoentns/LikeList';
import { AiOutlineHeart } from 'react-icons/ai';
import { Redirect } from 'react-router-dom';

const DetailPage = ({
  match,
  setDetail,
  orderList,
  user,
  stores,
  authenticated,
  AuthRoute,
}) => {
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
    <div className="detail-page">
      <h2>디테일 페이지</h2>
      {user ? (
        <LikeList user={user} store={store} detailItem={detailItem} />
      ) : (
        <Link to="/login">
          <AiOutlineHeart />
        </Link>
      )}

      {/* {user ? (
        <LikeList user={user} store={store} detailItem={detailItem} />
      ) : (
        <AiOutlineHeart />
      )} */}
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
        <div>가게 이름 : {detailItem.name}</div>
        <div>별점 : {detailItem.grade}</div>
        <div>리뷰 개수 : {detailItem.feedNum}</div>
        <div>배달비 : {detailItem.deliveryCost}</div>
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
          {detailItem.menu.length > 0 &&
            detailItem.menu.map((food) => (
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
