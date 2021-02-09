import React, { useState } from 'react';
import AddressModal from '../compoentns/AddressModel';

const SetAddressPage = () => {
  const [focus, setFocus] = useState(false);
  const [text, setText] = useState('');

  const onFocus = () => {
    setFocus(!focus);
  };

  const onInputText = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>배달지 주소 설정</h1>
      <AddressModal />
    </div>
  );
};

export default SetAddressPage;
