import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const DetailPage = ({ match }) => {
  const { store } = match.params;

  const [details, setDetails] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/stores/?name=${store}`,
        );

        setDetails(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [store]);

  return (
    <div>
      <h2>디테일 페이지</h2>
      <div>
        {details.map((detail) => (
          <div key={detail.name}>
            <div>가게 이름 : {detail.name}</div>
            <div>별점 : {detail.grade}</div>
            <div>리뷰 개수 : {detail.feedNum}</div>
            <div>배달비 : {detail.deliveryCost}</div>
            {/* 후기 이동 */}
            <Link to={`/detail/${store}/review`}>리뷰</Link>
            <div>
              메뉴 :
              {detail.menu.map((food) => (
                <div key={food.id}>
                  <div>음식 이름 : {food.name}</div>
                  <div>음식 가격 : {food.price}</div>
                  <div>음식 설명 : {food.detail}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailPage;
