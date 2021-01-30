import React from 'react';

const DetailPage = ({ match }) => {
  const { store } = match.params;
  return (
    <div>
      <h2>디테일 페이지</h2>
      <p>{store}</p>
    </div>
  );
};

export default DetailPage;
