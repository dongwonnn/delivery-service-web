import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Favorite from './Pages/Favorite';
import Home from './Pages/Home';
import MyPage from './Pages/MyPage';
import OrderHistory from './Pages/OrderHistory';
import Search from './Pages/Search';

const App = () => {
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
          <Link to="/favor">즐겨찾기</Link>
        </li>
        <li>
          <Link to="/order">주문내역</Link>
        </li>
        <li>
          <Link to="/myPage">My 이츠</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/favor" component={Favorite} />
        <Route path="/order" component={OrderHistory} />
        <Route path="/myPage" component={MyPage} />
        <Route
          render={({ location }) => (
            <div>
              <h2>존재하지 않는 페이지.</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
