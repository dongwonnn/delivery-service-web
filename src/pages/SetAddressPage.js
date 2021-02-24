import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Postcode from '../compoentns/Postcode';
import './SetAddressPage.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './SetAddressPage.scss';
import { BiHomeAlt } from 'react-icons/bi';
import { IoBagHandleOutline } from 'react-icons/io5';
import { FiMapPin } from 'react-icons/fi';
import { BsMap } from 'react-icons/bs';

const SetAddressPage = ({ user, setDefaultAddress }) => {
  const [addr, setAddr] = useState('');
  const [text, setText] = useState('');
  const [addressCat, setAddressCat] = useState('');
  const [apiToggle, setApiToggle] = useState(true);
  const vh = window.innerHeight;

  const onInputText = (e) => {
    setText(e.target.value);
  };

  const onAddrCat = (e) => {
    setAddressCat(e.target.innerText);
  };

  const onAddAddress = () => {
    const nextAddr = addr.split(', ');

    const idx = nextAddr[0].indexOf('(');

    const address = nextAddr[0].slice(0, idx);
    const subAddress = text;
    const building =
      nextAddr[1] !== undefined
        ? nextAddr[1].slice(0, nextAddr[1].length - 1)
        : null;
    const addrCat = addressCat === '' ? '기타' : addressCat;
    user.addrList.push({
      address,
      subAddress,
      building,
      addrCat,
    });

    setDefaultAddress(address);
  };

  if (apiToggle) {
    return (
      <Container className="setAddress-postcode">
        <Row>
          <Col>
            <p className="setAddress-header">배달지 상세 정보</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Postcode
              onAddressChange={setAddr}
              onClose={() => setApiToggle(false)}
              vh={vh}
            />
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="setAddress">
      <Row>
        <Col>
          <p className="setAddress-header">배달지 주소 설정</p>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="setAddress-body">
            <div className="setAddress-main">
              <FiMapPin />
              <p>{addr.split(' (')[0]}</p>
            </div>
            <hr />
            <input
              className="setAddress-detail"
              type="text"
              placeholder="상세주소(아파트/동/호)"
              value={text}
              onChange={onInputText}
            />
            <hr />

            <div className="setAddress-cat">
              <div onClick={onAddrCat}>
                <BiHomeAlt />
                <p>집</p>
              </div>
              <div onClick={onAddrCat}>
                <IoBagHandleOutline />
                <p>회사</p>
              </div>
              <div onClick={onAddrCat}>
                <BiHomeAlt />
                <p>기타</p>
              </div>
            </div>
            <div className="setAddress-map">
              <BsMap />
              <p>지도에서 확인하기</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Link to="/" className="setAddress-set">
          <div onClick={onAddAddress}>
            <p>완료</p>
          </div>
        </Link>
      </Row>
    </Container>
  );
};

export default SetAddressPage;

// <div>
//   <h1>배달지 상세 정보</h1>
//   {apiToggle ? (
//     <Postcode
//       onAddressChange={setAddr}
//       onClose={() => setApiToggle(false)}
//     />
//   ) : (
//     <div>
//       <div>{addr}</div>
//       <div>메인 주소</div>
//       <input
//         type="text"
//         placeholder="상세주소(아파트/동/호)"
//         value={text}
//         onChange={onInputText}
//       />
//       <div>상세 주소</div>
//       <ul onClick={onAddrCat}>
//         <li>집</li>
//         <li>회사</li>
//         <li>기타</li>
//       </ul>
//      <div>지도에서 확인하기</div>

//       <Link to="/">
//         <button onClick={onAddAddress}>완료</button>
//       </Link>
//     </div>
//   )}
// </div>
