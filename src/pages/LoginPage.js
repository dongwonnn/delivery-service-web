import React, { useState } from 'react';

const LoginPage = ({ authenticated, login, location }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = () => {
    try {
      login({ email, password });
    } catch (e) {
      alert('다시 입력해주세요.');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        value={email}
        onChange={onChangeEmail}
        type="text"
        placeholder="email"
      />
      <input
        value={password}
        onChange={onChangePassword}
        type="password"
        placeholder="password"
      />
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default LoginPage;
