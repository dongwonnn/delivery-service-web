import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Favorite from './Favorite';
import MyPage from './MyPage';
import OrderList from './OrderList';
import Search from './Search';

const Home = () => {
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
          <Link to="/favorite">즐겨찾기</Link>
        </li>
        <li>
          <Link to="/orderList">주문 내역</Link>
        </li>
        <li>
          <Link to="/myPage">MyPage</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" exact={true} />
        <Route path="/search" component={Search} />
        <Route path="/favorite" component={Favorite} />
        <Route path="/orderList" component={OrderList} />
        <Route path="/myPage" component={MyPage} />
        <Route
          render={({ location }) => (
            <div>
              <h2>존재하지 않는 페이지</h2>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default Home;
