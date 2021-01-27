import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const AuthRoute = ({
  authenticated,
  component: Component,
  render,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? (
          // authenticated === true
          render ? (
            // render가 있는 지, 상위 컴포넌트에서 render로 props를 전달했는 지 ?
            render(props)
          ) : (
            // 상위 컴포넌트에서 render로 props를 전달 안했다면 ProfilePage를 렌더링
            <Component {...props} />
          )
        ) : (
          // authenticated === false
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default AuthRoute;
