import React from 'react';
import { Link } from 'react-router-dom';

const AddressPage = () => {
  return (
    <div>
      <h1>주소 페이지</h1>
      <Link to="/setAddress">
        <div>새 배달 주소 추가</div>
        <div>집 추가</div>
        <div>회사 추가</div>
      </Link>
    </div>
  );
};

export default AddressPage;
