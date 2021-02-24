import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ProfilePage.scss';
import { CgList } from 'react-icons/cg';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiPurchaseTag } from 'react-icons/bi';
import { FiCreditCard, FiSettings } from 'react-icons/fi';
import { RiEBike2Line } from 'react-icons/ri';
import { MdChatBubbleOutline } from 'react-icons/md';
import { IoCallOutline } from 'react-icons/io5';
import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { CgFileDocument } from 'react-icons/cg';
import Navigation from '../compoentns/Navigation';

const ProfilePage = ({ user }) => {
  const { phoneNum, name } = user || {};
  return (
    <Container className="profile">
      <Row>
        <Col>
          <Navigation />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="profile-header">
            <p className="header-name">{name}</p>
            <p>{phoneNum}</p>
          </div>
        </Col>
      </Row>
      <Row>
        <div className="profile-coupone">쿠폰배너</div>
      </Row>

      <Row>
        <Col>
          <div className="profile-body">
            <Link to="/address">
              <CgList />
              <p>배달 주소 관리</p>
            </Link>
            <Link to="/favorite">
              <AiOutlineHeart />
              <p>즐겨찾기</p>
            </Link>
            <Link to="#">
              <BiPurchaseTag />
              <p>할인쿠폰</p>
            </Link>
            <Link to="#">
              <FiCreditCard />
              <p>결제관리</p>
            </Link>
            <Link to="#">
              <RiEBike2Line />
              <p>배달파트너 모집</p>
            </Link>
            <Link to="#">
              <MdChatBubbleOutline />
              <p>자주 묻는 질문</p>
            </Link>

            <Link to="#">
              <IoCallOutline />
              <p>고객지원</p>
            </Link>

            <Link to="/setting">
              <FiSettings />
              <p>설정</p>
            </Link>
            <Link to="#">
              <HiOutlineSpeakerphone />
              <p>공지사항</p>
            </Link>
            <Link to="#">
              <CgFileDocument />
              <p>약관·개인정보 처리방침</p>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
    // <div>
    //   <h1>profile</h1>
    //   <div>
    //     <dt>이름</dt>
    //     <dd>{name}</dd>
    //     <dt>번호</dt>
    //     <dd>{phoneNum}</dd>
    //   </div>

    //   <div>
    //     <Link to="/address">
    //       <p>배달 주소 관리</p>
    //     </Link>
    //     <Link to="/favorite">
    //       <p>즐겨찾기</p>
    //     </Link>
    //     <p>할인쿠폰</p>
    //     <p>결제관리</p>
    //     <p>배달파트너 모집</p>
    //     <p>자주 묻는 질문</p>
    //     <p>고객지원</p>
    //     <Link to="/setting">
    //       <p>설정</p>
    //     </Link>
    //     <p>공지사항</p>
    //     <p>약관·개인정보 처리방침</p>
    //   </div>
    // </div>
  );
};

export default ProfilePage;
