import React from 'react';
import DaumPostcode from 'react-daum-postcode';

const Postcode = ({ setAddr, setApiToggle }) => {
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    console.log(fullAddress);
    setAddr(fullAddress);
    setApiToggle(false);
  };

  return <DaumPostcode onComplete={handleComplete} autoClose />;
};

export default Postcode;
