import React, { Component } from 'react';
import DaumPostCode from 'react-daum-postcode';
class AddressModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoneCode: '',
      fullAddress: '',
      isDaumPost: false,
      register: [],
    };
  }

  handleOpenPost = () => {
    this.setState({
      isDaumPost: true,
    });
  };

  // postcode
  handleAddress = (data) => {
    let AllAddress = data.address;
    let extraAddress = '';
    let zoneCodes = data.zonecode;

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      AllAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    this.setState({
      fullAddress: AllAddress,
      zoneCode: zoneCodes,
    });
  };

  onAddBtn = () => {};

  render() {
    const { isDaumPost, fullAddress, zoneCode } = this.state;

    return (
      <div className="modalRow">
        <div className="modalCell cellTit">
          <div>
            <span>
              <b>*</b>주소
            </span>
          </div>
        </div>
        <div className="modalCell">
          <div className="cellFirst">
            <div className="zipCode">{zoneCode}</div>
            <button type="button" onClick={this.handleOpenPost}>
              <span>우편번호 찾기</span>
            </button>
          </div>
          {isDaumPost ? (
            <DaumPostCode onComplete={this.handleAddress} autoClose />
          ) : null}
          <div className="address">{fullAddress}</div>
        </div>
      </div>
    );
  }
}

export default AddressModal;
