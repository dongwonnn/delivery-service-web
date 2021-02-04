import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DetailPage = ({ match, setDetailFromApp, orderList }) => {
  const { store } = match.params;

  const [detail, setDetail] = useState();

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

  if (detail === undefined) {
    return <div>로딩중</div>;
  }

  return (
    <div>
      <h2>디테일 페이지</h2>
      <div>
        <div>
          {orderList && <div>체큰</div>}
          <div>가게 이름 : {detail.name}</div>
          <div>별점 : {detail.grade}</div>
          <div>리뷰 개수 : {detail.feedNum}</div>
          <div>배달비 : {detail.deliveryCost}</div>
          {/* 후기 이동 */}
          <Link to={`/detail/${store}/review`}>
            <hr />
            리뷰
            <hr />
          </Link>
          <div>
            메뉴 :
            {detail.menu.map((food) => (
              <Link to={`/detail/${store}/${food.name}`} key={food.id}>
                <div>
                  <div>음식 이름 : {food.name}</div>
                  <div>음식 가격 : {food.price}</div>
                  <div>음식 설명 : {food.detail}</div>
                  {/* <div>맛 선택</div>
                    {food.favor.map((fav) => (
                      <div key={fav.text}>맛 : {fav.text}</div>
                    ))} */}
                  <hr />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
