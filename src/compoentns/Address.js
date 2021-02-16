import React from 'react';

const Address = ({ user, defaultAddress }) => {
  // let lastNum = 0;

  // if (user) {
  //   lastNum = user.addrList.length - 1;
  // }

  return <div>{user ? <p>{defaultAddress}</p> : <p>잠실 8동 </p>}</div>;
};

export default Address;
