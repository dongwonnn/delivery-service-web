const users = [
  {
    email: 'kkum9408@gmail.com',
    password: '123',
    name: 'dongwon',
    phoneNum: '01063666585',
    like: null,
    orderHistory: [],
  },
  {
    email: 'letuin@gmail.com',
    password: '234',
    name: 'letuin',
    phoneNum: '01012345678',
    like: null,
    orderHistory: [],
  },
];

export const register = (email, password, name, phoneNum) => {
  users.push({
    email: email,
    password: password,
    name: name,
    phoneNum: phoneNum,
  });
};

export const singIn = ({ email, password }) => {
  const user = users.find(
    (user) => user.email === email && user.password === password,
  );

  if (user === undefined) throw new Error();
  return user;
};
