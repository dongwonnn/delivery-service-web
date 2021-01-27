const users = [
  { email: 'kkum9408@gmail.com', password: '123', name: 'dongwon' },
  { email: 'letuin@gmail.com', password: '234', name: 'letuin' },
];

export const singIn = ({ email, password }) => {
  const user = users.find(
    (user) => user.email === email && user.password === password,
  );

  if (user === undefined) throw new Error();
  return user;
};
