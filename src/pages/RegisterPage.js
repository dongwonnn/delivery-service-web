import React, { useState } from 'react';
import './RegisterPage.scss';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [name, setName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangePasswordCheck = (e) => {
    setPasswordCheck(e.target.value);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangePhoneNum = (e) => {
    setPhoneNum(e.target.value);
  };

  const handleClick = () => {
    if (password === passwordCheck) {
      // 생성 로직
    } else {
      alert('비밀번호가 다릅니다.');
    }
  };

  return (
    <div className="registerPage">
      <header className="reg-title">
        <h1 className="reg-logo">
          <img src="/images/coupang-logo.jpg" alt="coupang logo" />
        </h1>
      </header>
      <main className="reg-main">
        <div className="reg-content">
          <p>회원정보를 입력해주세요</p>
          <from className="reg-form">
            <input
              text="email"
              placeholder="아이디(이메일)"
              value={email}
              onChange={onChangeEmail}
            />
            <input
              text="password"
              placeholder="비밀번호"
              value={password}
              onChange={onChangePassword}
            />
            <input
              text="password"
              placeholder="비밀번호 확인"
              value={passwordCheck}
              onChange={onChangePasswordCheck}
            />
            <input
              text="text"
              placeholder="이름"
              value={name}
              onChange={onChangeName}
            />
            <input
              text="number"
              placeholder="휴대폰 번호"
              value={phoneNum}
              onChange={onChangePhoneNum}
            />
          </from>
          <div className="reg-line" />
          <div>
            <p>쿠팡 서비스약관에 동의해주세요.</p>
            <div className="reg-agree-all">
              <input type="checkbox" id="all" />
              <label for="all">모두 동의합니다.</label>
            </div>
            <div className="reg-agree-form">
              <ul>
                <li>
                  <input type="checkbox" id="age" />
                  <label for="age">[필수] 만 14세 이상입니다</label>
                </li>
                <li>
                  <input type="checkbox" id="use" />
                  <label for="use">[필수] 쿠팡 이용약관 동의.</label>
                </li>
                <li>
                  <input type="checkbox" id="elect" />
                  <label for="elect">[필수] 전자금융거래 이용약관 동의.</label>
                </li>
                <li>
                  <input type="checkbox" id="collect" />
                  <label for="collect">
                    [필수] 개인정보 수집 및 이용 동의.
                  </label>
                </li>
                <li>
                  <input type="checkbox" id="offer" />
                  <label for="offer">[필수] 개인정보 제공 동의.</label>
                </li>
              </ul>
            </div>
            <button className="reg-submit" onClick={handleClick}>
              동의하고 가입하기
            </button>
          </div>
        </div>
      </main>
      <footer className="reg-footer">
        <p className="reg-copy">©Coupang Corp. All rights reserved</p>
      </footer>
    </div>
  );
};

export default RegisterPage;
