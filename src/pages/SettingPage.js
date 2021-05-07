import React from 'react';
import LogoutButton from '../compoentns/LogoutButton';
import './SettingPage.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SettingPage = ({ logout, history }) => {
  const handleClick = () => {
    logout();
    history.push('/');
  };

  return (
    <Container className="setting">
      <Row>
        <Col>
          <h1 className="setting-title">설정</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="setting-list">배달 현황 알림</div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="setting-list">쿠폰&amp;혜택 정보 알림</div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="setting-list" onClick={handleClick}>
            로그아웃
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SettingPage;
