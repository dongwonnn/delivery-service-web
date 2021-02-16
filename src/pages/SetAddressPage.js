import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Postcode from '../compoentns/Postcode';

const SetAddressPage = ({ user, setDefaultAddress }) => {
  const [addr, setAddr] = useState('');
  const [text, setText] = useState('');
  const [addressCat, setAddressCat] = useState('');
  const [apiToggle, setApiToggle] = useState(true);

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

  return (
    <div>
      <h1>배달지 상세 정보</h1>
      {apiToggle ? (
        <Postcode
          onAddressChange={setAddr}
          onClose={() => setApiToggle(false)}
        />
      ) : (
        <div>
          <div>{addr}</div>
          <div>메인 주소</div>
          <input
            type="text"
            placeholder="상세주소(아파트/동/호)"
            value={text}
            onChange={onInputText}
          />
          <div>상세 주소</div>
          <ul onClick={onAddrCat}>
            <li>집</li>
            <li>회사</li>
            <li>기타</li>
          </ul>
          <div>지도에서 확인하기</div>

          <Link to="/">
            <button onClick={onAddAddress}>완료</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SetAddressPage;
