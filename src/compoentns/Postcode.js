import React from 'react';
import DaumPostcode from 'react-daum-postcode';

const Postcode = ({ onAddressChange, onClose, vh }) => {
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

    onAddressChange(fullAddress);
    onClose();
  };

  return (
    <div>
      <DaumPostcode onComplete={handleComplete} height={vh - 30} />;
    </div>
  );
};

export default Postcode;
