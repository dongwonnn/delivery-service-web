import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './OrderListPage.scss';

const OrderListPage = ({ match, detail, orderList, setOrderList }) => {
  const { food } = match.params;
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(undefined);
  const foodMenu = detail?.menu.find((m) => m.name === food);

  useEffect(() => {
    setTotalPrice(foodMenu.price);
  }, [foodMenu]);

  if (foodMenu === undefined || totalPrice === undefined) {
    return <></>;
  }

  const defaultPrice = foodMenu.price;

  const onMinusBtn = () => {
    if (count > 1) setCount(() => count - 1);
    const nextTotalPrice = defaultPrice * (count - 1);
    setTotalPrice(nextTotalPrice);
  };

  const onPlusBtn = () => {
    if (count < 20) setCount(() => count + 1);
    const nextTotalPrice = defaultPrice * (count + 1);
    setTotalPrice(nextTotalPrice);
  };

  const onToggleReqBtn = (e) => {
    const addCost = foodMenu.reqMenu[e.target.id].addCost;

    if (e.target.checked) {
      setTotalPrice(totalPrice + addCost);
      foodMenu.reqMenu[e.target.id].check = true;
    } else {
      setTotalPrice(totalPrice - addCost);
      foodMenu.reqMenu[e.target.id].check = false;
    }
  };

  const onToggleSelBtn = (e) => {
    const addCost = foodMenu.selectMenu[e.target.id].addCost;

    console.log(foodMenu.selectMenu);

    if (e.target.checked) {
      setTotalPrice(totalPrice + addCost);
      foodMenu.selectMenu[e.target.id].check = true;
    } else {
      setTotalPrice(totalPrice - addCost);
      foodMenu.selectMenu[e.target.id].check = false;
    }
  };

  const onSubmitBtn = () => {
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
    };

    setOrderList([...orderList, nextOrderList]);
  };

  return (
    <div className="orderList">
      <div className="orderList-header">
        <div className="food-img">이미지</div>
        <div className="food-name">{food}</div>
        <div className="food-price">
          <div>가격 </div>
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

      <div className="orderList-add">
        <div className="add-order1">
          <div className="add-text">맛 선택</div>
          {foodMenu.reqMenu.map((add) => (
            <div className="add-card" key={add.id}>
              <div>
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

        <div className="add-order2">
          <div className="add-text">추가 구성 선택</div>
          {foodMenu.selectMenu.map((add) => (
            <div className="add-card" key={add.id}>
              <div>
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
      </div>

      <Link to={`/detail/${detail.name}`}>
        <div className="orderList-cart" onClick={onSubmitBtn}>
          <button>카트에 담기</button>
        </div>
      </Link>
    </div>
  );
};

export default OrderListPage;
