import React from 'react';

const Address = ({ user }) => {
  let lastNum = 0;

  if (user) {
    lastNum = user.addrList.length - 1;
  }

  return (
    <div>{user ? <p>{user.addrList[lastNum].address}</p> : <p>주소</p>}</div>
  );
};

export default Address;
