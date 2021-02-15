import React, { useEffect, useState } from 'react';

const ReviewPage = ({ match, stores }) => {
  const { store } = match.params;
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const nextDetails = stores.find((value) => value.name === store);
    setDetails(nextDetails);
  }, [stores, store]);

  if (details.length === 0) {
    return <div>로딩중</div>;
  }

  return (
    <div>
      <p>후기 페이지</p>
      <div>
        {details.review.length > 0 &&
          details.review.map((review) => (
            <div key={review.id}>
              <div>텍스트 : {review.text}</div>
              <div>주문 음식 : {review.orderdMenu}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ReviewPage;
