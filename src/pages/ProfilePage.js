import React from 'react';

const ProfilePage = ({ user }) => {
  const { email, phoneNum, name } = user || {};
  return (
    <div>
      <h1>profile</h1>
      <dt>이메일</dt>
      <dd>{email}</dd>
      <dt>이름</dt>
      <dd>{name}</dd>
      <dt>번호</dt>
      <dd>{phoneNum}</dd>
    </div>
  );
};

export default ProfilePage;
