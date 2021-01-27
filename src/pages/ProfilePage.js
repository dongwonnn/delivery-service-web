import React from 'react';

const ProfilePage = ({ user }) => {
  const { email, password, name } = user || {};
  return (
    <div>
      <h1>profile</h1>
      <dt>Email</dt>
      <dd>{email}</dd>
      <dt>Password</dt>
      <dd>{password}</dd>
      <dt>Name</dt>
      <dd>{name}</dd>
    </div>
  );
};

export default ProfilePage;
