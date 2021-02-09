import React from 'react';
import LogoutButton from '../compoentns/LogoutButton';

const SettingPage = ({ authenticated, logout }) => {
  return (
    <div>
      <h1>설정 페이지</h1>
      <div>배달 현황 알림</div>
      <div>쿠폰&amp;혜택 정보 알림</div>
      <LogoutButton logout={logout} />
    </div>
  );
};

export default SettingPage;
