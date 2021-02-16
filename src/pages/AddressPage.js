import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AddressPage = ({ user, setDefaultAddress }) => {
  const [hasHomeAddress, setHasHomeAddress] = useState('');
  const [hasWorkAddress, setHasWorkAddress] = useState('');

  useEffect(() => {
    if (user.addrList.length > 0) {
      const nextHasHomeAddress = user.addrList.find(
        (addr) => addr.addrCat === '집',
      );
      const nextHasWorkAddress = user.addrList.find(
        (addr) => addr.addrCat === '회사',
      );
      setHasHomeAddress(nextHasHomeAddress);
      setHasWorkAddress(nextHasWorkAddress);
    }
  }, [user.addrList]);

  return (
    <div>
      <h1>주소 페이지</h1>
      <Link to="/setAddress">
        <div>새 배달 주소 추가</div>
      </Link>
      {hasHomeAddress ? (
        <div onClick={() => setDefaultAddress(hasHomeAddress.address)}>
          {hasHomeAddress.address}
        </div>
      ) : (
        <Link to="/setAddress">
          <div>집 추가</div>
        </Link>
      )}
      {hasWorkAddress ? (
        <div onClick={() => setDefaultAddress(hasWorkAddress.address)}>
          {hasWorkAddress.address}
        </div>
      ) : (
        <Link to="/setAddress">
          <div>회사 추가</div>
        </Link>
      )}
      {user.addrList.length > 0 &&
        user.addrList.map((addr) =>
          addr.addrCat === '기타' ? (
            <div
              key={addr.address}
              onClick={() => setDefaultAddress(addr.address)}
            >
              {addr.address}
            </div>
          ) : null,
        )}
    </div>
  );
};

export default AddressPage;
