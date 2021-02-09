import React from 'react';
import { withRouter } from 'react-router-dom';

const LogoutButton = ({ logout, history }) => {
  const handleClick = () => {
    logout();
    history.push('/');
  };

  return <button onClick={handleClick}>로그아웃</button>;
};

export default withRouter(LogoutButton);
