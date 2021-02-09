const users = [
  {
    email: 'kkum9408@gmail.com',
    password: '123',
    name: 'dongwon',
    phoneNum: '01063666585',
    likesList: [],
    orderHistory: [],
    addrssList: [
      {
        building: '둔촌신동아아파트',
        address: '서울 강동구 양재대로 96길 79',
        subAddress: '103동 1201호',
        addCat: '집',
      },
      {
        building: '대승 빌딩',
        address: '서울 강남구 강남대로92길 15',
        subAddress: '9층 L3',
        addCat: '회사',
      },
      {
        building: '양평 집',
        address: '경기도 양평시 옥천면 96길',
        subAddress: '102번지',
        addCat: '기타',
      },
    ],
  },
  {
    email: 'letuin@gmail.com',
    password: '234',
    name: 'letuin',
    phoneNum: '01012345678',
    likesList: [],
    orderHistory: [],
    addrssList: [],
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
