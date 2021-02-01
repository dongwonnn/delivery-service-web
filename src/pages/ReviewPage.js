import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReviewPage = ({ match }) => {
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
      <p>후기 페이지</p>
      {details.map((detail) => (
        <div key={detail.name}>
          <div>
            {detail.review.map((review) => (
              <div key={review.id}>
                <div>텍스트 : {review.text}</div>
                <div>주문 음식 : {review.orderdMenu}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewPage;
