import React, { useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import FavoritePage from './pages/FavoritePage';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import ProfilePage from './pages/ProfilePage';
import SearchPage from './pages/SearchPage';
import { singIn } from './modules/auth';
import AuthRoute from './compoentns/AuthRoute';
import LogoutButton from './compoentns/LogoutButton';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const App = () => {
  const [user, setUser] = useState(null);
  const authenticated = user != null; // user가 존재하지 않으면 false, 존재하면 true

  const login = ({ email, password }) => setUser(singIn({ email, password }));
  const logout = () => setUser(null);

  return (
    <div>
      <ul>
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
        <li>
          {authenticated ? (
            <LogoutButton logout={logout} />
          ) : (
            <Link to="/login">로그인</Link>
          )}
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/order" component={OrderPage} />
        <Route path="/favorite" component={FavoritePage} />
        <Route path="/register" component={RegisterPage} />
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
