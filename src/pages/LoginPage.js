import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LoginPage = ({ login, history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = () => {
    try {
      login({ email, password });
      history.go(-1);
    } catch (e) {
      alert('다시 입력해주세요.');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <Container className="loginPage">
      <Row>
        <Col>
          <main className="login-main">
            <div className="login-content">
              <input
                value={email}
                onChange={onChangeEmail}
                type="text"
                placeholder="아이디(이메일)"
              />
              <input
                value={password}
                onChange={onChangePassword}
                type="password"
                placeholder="비밀번호"
              />
              <div className="login-message">
                <div className="login-checkbox">
                  <input type="checkbox" id="auto-login" />
                  <label htmlFor="auto-login">자동로그인</label>
                </div>
                <p className="login-search">아이디(이메일)/비밀번호 찾기</p>
              </div>
              <div className="login-submit">
                <button className="login-login" onClick={handleClick}>
                  로그인
                </button>
                <div className="login-line"></div>
                <div className="login-register">
                  <Link to="/register">
                    <p>회원가입</p>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </Col>
      </Row>
      <Row>
        <Col>
          <footer className="login-footer">
            <p className="login-copy">©Coupang Corp. All rights reserved</p>
          </footer>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
