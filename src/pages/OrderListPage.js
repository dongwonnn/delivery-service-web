import React, { useEffect, useState } from 'react';
import './OrderListPage.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const OrderListPage = ({
  match,
  detail,
  orderList,
  setOrderList,
  history,
  user,
}) => {
  const { food } = match.params;
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(undefined);
  const [overlap, setOverlap] = useState(false);
  const foodMenu = detail?.menu.find((m) => m.name === food);
  const defaultPrice = foodMenu.price;
  // detail?.menu : detail == false면 뒤에 실행 안함

  useEffect(() => {
    setTotalPrice(foodMenu.price);
  }, [foodMenu]);

  if (foodMenu === undefined || totalPrice === undefined) {
    return <>로딩중</>;
  }

  const onMinusBtn = () => {
    if (count > 1) {
      setCount(count - 1);
    }
    const nextTotalPrice = defaultPrice * (count - 1);
    setTotalPrice(nextTotalPrice);
  };

  const onPlusBtn = () => {
    if (count < 20) setCount(count + 1);
    const nextTotalPrice = defaultPrice * (count + 1);
    setTotalPrice(nextTotalPrice);
  };

  const onToggleReqBtn = (e) => {
    if (e.target.checked) {
      foodMenu.reqMenu[e.target.id].check = true;
    }
  };

  const onToggleSelBtn = (e) => {
    const addCost = foodMenu.selectMenu[e.target.id].addCost;

    if (e.target.checked) {
      setTotalPrice(totalPrice + addCost);
      foodMenu.selectMenu[e.target.id].check = true;
    } else {
      setTotalPrice(totalPrice - addCost);
      foodMenu.selectMenu[e.target.id].check = false;
    }
  };

  const onCancle = () => {
    setOverlap(false);
  };

  const onChangeOrderList = () => {
    orderList.splice(0, orderList.length);

    const reqMenu = foodMenu.reqMenu
      .filter((v) => v.check === true)
      .map((el) => el.text);

    const selMenu = foodMenu.selectMenu
      .filter((v) => v.check === true)
      .map((el) => el.text);

    const nextOrderList = {
      mainMenu: food,
      count: count,
      totalPrice: totalPrice,
      reqMenu: reqMenu,
      selMenu: selMenu,
      store: detail.name,
    };

    setOrderList([...orderList, nextOrderList]);

    history.go(-1);
  };

  const onSubmitBtn = () => {
    if (orderList.length > 0) {
      if (orderList[0].store !== detail.name) {
        setOverlap(true);
      }
    } else {
      const reqMenu = foodMenu.reqMenu
        .filter((v) => v.check === true)
        .map((el) => el.text);

      const selMenu = foodMenu.selectMenu
        .filter((v) => v.check === true)
        .map((el) => el.text);

      const nextOrderList = {
        mainMenu: food,
        count: count,
        totalPrice: totalPrice,
        reqMenu: reqMenu,
        selMenu: selMenu,
        store: detail.name,
      };

      setOrderList([...orderList, nextOrderList]);

      history.go(-1);
    }
  };

  return (
    <Container className="orderList">
      <Row>
        <div className="orderList-img">이미지</div>
      </Row>

      <Row>
        <Col>
          <div className="orderList-header">
            <div className="food-name">{food}</div>
            <div className="food-detail">{foodMenu.detail}</div>
            <hr />
            <div className="food-price">
              <div className="price-text">가격 </div>
              <div>{totalPrice}원</div>
            </div>
            <div className="food-count">
              <div className="count-text">수량</div>
              <div className="count-btn">
                <button onClick={onMinusBtn}>-</button>
                <div>{count}</div>
                <button onClick={onPlusBtn}>+</button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <div className="add-text">
          <p>맛 선택</p>
        </div>
      </Row>
      <Row>
        <Col>
          <div className="orderList-add">
            {foodMenu.reqMenu.map((add) => (
              <div className="add-list" key={add.id}>
                <div className="list">
                  <input
                    onChange={onToggleReqBtn}
                    type="radio"
                    id={add.id}
                    name="reqMenu"
                  />
                  <label htmlFor={add.text}>{add.text}</label>
                </div>
                <div>+{add.addCost}</div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
      <Row>
        <div className="add-text">
          <p>추가 구성 선택</p>
        </div>
      </Row>
      <Row>
        <Col>
          <div className="orderList-add">
            {foodMenu.selectMenu.map((add) => (
              <div className="add-list" key={add.id}>
                <div className="list">
                  <input
                    onChange={onToggleSelBtn}
                    type="checkbox"
                    id={add.id}
                    name="selectMenu"
                  />
                  <label htmlFor={add.text}>{add.text}</label>
                </div>
                <div>+{add.addCost}</div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
      <Row>
        {user ? (
          <div className="orderList-cart" onClick={onSubmitBtn}>
            <button>카트에 담기</button>
          </div>
        ) : (
          <Link to="/login">
            <div className="orderList-cart">
              <button>카트에 담기</button>
            </div>
          </Link>
        )}
      </Row>
      <Row>
        <Col>
          {overlap && (
            <div>
              <p>같은 가게의 메뉴만을 담을 수 있습니다.</p>
              <p>주문할 가게를 변경하실 경우 이전에 담은 메뉴가 삭제됩니다.</p>
              <button onClick={onCancle}>취소</button>
              <button onClick={onChangeOrderList}>새로담기</button>
            </div>
          )}
        </Col>
      </Row>
    </Container>
    //   <div className="orderList">
    //     <div className="orderList-header">
    //       <div className="food-img">이미지</div>
    //       <div className="food-name">{food}</div>
    //       <div className="food-price">
    //         <div>가격 </div>
    //         <div>{totalPrice}원</div>
    //       </div>
    //       <div className="food-count">
    //         <div className="count-text">수량</div>
    //         <div className="count-btn">
    //           <button onClick={onMinusBtn}>-</button>
    //           <div>{count}</div>
    //           <button onClick={onPlusBtn}>+</button>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="orderList-add">
    //       <div className="add-order1">
    //         <div className="add-text">맛 선택</div>
    //         {foodMenu.reqMenu.map((add) => (
    //           <div className="add-card" key={add.id}>
    //             <div>
    //               <input
    //                 onChange={onToggleReqBtn}
    //                 type="radio"
    //                 id={add.id}
    //                 name="reqMenu"
    //               />
    //               <label htmlFor={add.text}>{add.text}</label>
    //             </div>
    //             <div>+{add.addCost}</div>
    //           </div>
    //         ))}
    //       </div>

    //       <div className="add-order2">
    //         <div className="add-text">추가 구성 선택</div>
    //         {foodMenu.selectMenu.map((add) => (
    //           <div className="add-card" key={add.id}>
    //             <div>
    //               <input
    //                 onChange={onToggleSelBtn}
    //                 type="checkbox"
    //                 id={add.id}
    //                 name="selectMenu"
    //               />
    //               <label htmlFor={add.text}>{add.text}</label>
    //             </div>
    //             <div>+{add.addCost}</div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     <div className="orderList-cart" onClick={onSubmitBtn}>
    //       <button>카트에 담기</button>
    //     </div>

    //     {overlap && (
    //       <div>
    //         <p>같은 가게의 메뉴만을 담을 수 있습니다.</p>
    //         <p>주문할 가게를 변경하실 경우 이전에 담은 메뉴가 삭제됩니다.</p>
    //         <button onClick={onCancle}>취소</button>
    //         <button onClick={onChangeOrderList}>새로담기</button>
    //       </div>
    //     )}
    //   </div>
  );
};

export default OrderListPage;
