import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import FavoritePage from './pages/FavoritePage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import SearchPage from './pages/SearchPage';
import { singIn, register } from './modules/auth';
import AuthRoute from './compoentns/AuthRoute';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DetailPage from './pages/DetailPage';
import CategoryPage from './pages/CategoryPage';
import AddressPage from './pages/AddressPage';
import axios from 'axios';
import ReviewPage from './pages/ReviewPage';
import OrderListPage from './pages/OrderListPage';
import CartPage from './pages/CartPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import SettingPage from './pages/SettingPage';
import SetAddressPage from './pages/SetAddressPage';
//import LogoutButton from './compoentns/LogoutButton';

const App = () => {
  const [user, setUser] = useState(null);
  const [categories, setCategories] = useState([]);
  const [detail, setDetailFromApp] = useState(undefined);
  const [orderList, setOrderList] = useState([]);

  const authenticated = user !== null; // user가 존재하지 않으면 false, 존재하면 true

  const login = ({ email, password }) => setUser(singIn({ email, password }));
  const logout = () => setUser(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/categories');
        setCategories(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {/* <li>
          {authenticated ? (
            <LogoutButton logout={logout} />
          ) : (
            <Link to="/login">로그인</Link>
          )}
        </li> */}
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/search">검색</Link>
        </li>
        <li>
          <Link to="/order">주문</Link>
        </li>
        <li>
          <Link to="/favorite">즐겨찾기</Link>
        </li>
        <li>
          <Link to="/profile">프로필</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route
          path="/"
          exact={true}
          render={(props) => (
            <HomePage
              categories={categories}
              orderList={orderList}
              {...props}
            />
          )}
        />

        {/* 음식점의 디테일 페이지로 가는 Route */}
        <Route
          path="/detail/:store"
          exact={true}
          render={(props) => (
            <DetailPage
              setDetailFromApp={setDetailFromApp}
              orderList={orderList}
              user={user}
              {...props}
            />
          )}
        />

        <Route
          path="/detail/:store/cart"
          exact={true}
          render={(props) => (
            <CartPage
              orderList={orderList}
              detail={detail}
              setOrderList={setOrderList}
              setUser={setUser}
              user={user}
              {...props}
            />
          )}
        />

        <Route
          path="/detail/:store/review"
          exact={true}
          component={ReviewPage}
        />
        <Route
          path="/detail/:store/:food"
          exact={true}
          render={(props) => (
            <OrderListPage
              detail={detail}
              orderList={orderList}
              setOrderList={setOrderList}
              {...props}
            />
          )}
        />

        <Route
          path="/search"
          render={(props) => <SearchPage categories={categories} {...props} />}
        />
        <AuthRoute
          authenticated={authenticated}
          path="/order"
          render={(props) => (
            <OrderHistoryPage user={user} detail={detail} {...props} />
          )}
        />

        <AuthRoute
          authenticated={authenticated}
          path="/favorite"
          render={(props) => <FavoritePage user={user} {...props} />}
        />

        <Route
          path="/category/:category"
          render={(props) => (
            <CategoryPage categories={categories} {...props} />
          )}
        />
        <Route path="/address" component={AddressPage} />
        <Route path="/setAddress" component={SetAddressPage} />
        <Route
          path="/setting"
          render={(props) => <SettingPage logout={logout} {...props} />}
        />

        {/*로그인, 회원 가입*/}
        <Route
          path="/register"
          render={(props) => <RegisterPage register={register} {...props} />}
        />
        <AuthRoute
          authenticated={authenticated}
          path="/profile"
          render={(props) => <ProfilePage user={user} {...props} />}
        />
        <Route
          path="/login"
          render={(props) => (
            <LoginPage authenticated={authenticated} login={login} {...props} />
          )}
        />
        <Route render={({ location }) => <div>존재하지 않는 페이지</div>} />
      </Switch>
    </div>
  );
};

export default App;
