import React from 'react';
import { Link } from 'react-router-dom';

const ProfilePage = ({ user }) => {
  const { phoneNum, name } = user || {};
  return (
    <div>
      <h1>profile</h1>
      <div>
        <dt>이름</dt>
        <dd>{name}</dd>
        <dt>번호</dt>
        <dd>{phoneNum}</dd>
      </div>

      <div>
        <Link to="/address">
          <p>배달 주소 관리</p>
        </Link>
        <Link to="/favorite">
          <p>즐겨찾기</p>
        </Link>
        <p>할인쿠폰</p>
        <p>결제관리</p>
        <p>배달파트너 모집</p>
        <p>자주 묻는 질문</p>
        <p>고객지원</p>
        <Link to="/setting">
          <p>설정</p>
        </Link>
        <p>공지사항</p>
        <p>약관·개인정보 처리방침</p>
      </div>
    </div>
  );
};

export default ProfilePage;
