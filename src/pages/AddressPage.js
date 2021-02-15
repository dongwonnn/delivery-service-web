import React from 'react';
import { Link } from 'react-router-dom';

const AddressPage = ({ user }) => {
  const hasHomeAddress = user.addrList.find((addr) => addr.addrCat === '집');
  const hasWorkAddress = user.addrList.find((addr) => addr.addrCat === '회사');

  return (
    <div>
      <h1>주소 페이지</h1>
      <Link to="/setAddress">
        <div>새 배달 주소 추가</div>
      </Link>
      {hasHomeAddress ? (
        <div>{hasHomeAddress.address}</div>
      ) : (
        <Link to="/setAddress">
          <div>집 추가</div>
        </Link>
      )}
      {hasWorkAddress ? (
        <div>{hasWorkAddress.address}</div>
      ) : (
        <Link to="/setAddress">
          <div>회사 추가</div>
        </Link>
      )}
      {user.addrList.map((addr) =>
        addr.addrCat === '기타' ? (
          <div key={addr.address}>{addr.address}</div>
        ) : null,
      )}
    </div>
  );
};

export default AddressPage;
