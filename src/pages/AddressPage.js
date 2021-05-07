import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './AddressPage.scss';
import { BsSearch } from 'react-icons/bs';
import { BiTargetLock, BiHomeAlt } from 'react-icons/bi';
import { IoBagHandleOutline } from 'react-icons/io5';
import { FiMapPin } from 'react-icons/fi';

const AddressPage = ({ user, setDefaultAddress }) => {
  const [hasHomeAddress, setHasHomeAddress] = useState('');
  const [hasWorkAddress, setHasWorkAddress] = useState('');

  useEffect(() => {
    if (user.addrList.length > 0) {
      const nextHasHomeAddress = user.addrList.find(
        (addr) => addr.addrCat === '집',
      );
      const nextHasWorkAddress = user.addrList.find(
        (addr) => addr.addrCat === '회사',
      );
      setHasHomeAddress(nextHasHomeAddress);
      setHasWorkAddress(nextHasWorkAddress);
    }
  }, [user.addrList]);

  return (
    <Container className="address-page">
      <Row>
        <Col>
          <h1 className="address-page-title">배달지 주소 설정</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to="/setAddress">
            <div className="address-page-search">
              <BsSearch />
              도로명, 건물명 또는 지번으로 검색
            </div>
          </Link>
        </Col>
      </Row>
      <Row>
        <div className="address-page-block"></div>
      </Row>
      <Row>
        <Col>
          <div className="address-page-find-location">
            <p>
              <BiTargetLock />
              현재 위치로 주소 찾기
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          {hasHomeAddress ? (
            <Link to="/">
              <div className="address-page-add-home">
                <BiHomeAlt />
                <div className="address-page-home">
                  <p>집</p>
                  <div
                    onClick={() => setDefaultAddress(hasHomeAddress.address)}
                  >
                    {hasHomeAddress.address}
                    <br />
                    <p className="address-page-sub">
                      {hasHomeAddress.subAddress}
                    </p>
                  </div>
                  <hr />
                </div>
              </div>
            </Link>
          ) : (
            <Link to="/setAddress">
              <div className="address-page-add-home">
                <BiHomeAlt />
                <div className="address-page-home">
                  <p>집 추가</p>
                  <hr />
                </div>
              </div>
            </Link>
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          {hasWorkAddress ? (
            <Link to="/">
              <div className="address-page-add-work">
                <IoBagHandleOutline />
                <div className="address-page-work">
                  <p>회사</p>
                  <div
                    onClick={() => setDefaultAddress(hasWorkAddress.address)}
                  >
                    {hasWorkAddress.address}
                    <br />
                    <p className="address-page-sub">
                      {hasWorkAddress.subAddress}
                    </p>
                  </div>
                  <hr />
                </div>
              </div>
            </Link>
          ) : (
            <Link to="/setAddress">
              <div className="address-page-add-work">
                <IoBagHandleOutline />
                <div className="address-page-work">
                  <p>회사 추가</p>
                  <hr />
                </div>
              </div>
            </Link>
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          {user.addrList.length > 0 &&
            user.addrList.map((addr, idx) =>
              addr.addrCat === '기타' ? (
                <Link to="/" key={idx}>
                  <div className="address-page-add-etc">
                    <FiMapPin />
                    <div className="address-page-etc">
                      <div
                        key={addr.address}
                        onClick={() => setDefaultAddress(addr.address)}
                      >
                        {addr.address}
                        <br />
                        <p className="address-page-sub">{addr.subAddress}</p>
                      </div>
                      <hr />
                    </div>
                  </div>
                </Link>
              ) : null,
            )}
        </Col>
      </Row>
    </Container>
  );
};

export default AddressPage;
