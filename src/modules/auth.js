const users = [
  {
    email: 'kkum9408@gmail.com',
    password: '123',
    name: '김동원',
    phoneNum: '010-****-****',
    likesList: [],
    orderHistory: [],
    addrList: [
      {
        building: '둔촌신동아아파트',
        address: '서울 강동구 양재대로 96길 79',
        subAddress: '101동 1001호',
        addrCat: '집',
      },
      {
        building: '대승 빌딩',
        address: '서울 강남구 강남대로92길 15',
        subAddress: '9층 L3',
        addrCat: '회사',
      },
      {
        building: '양평 집',
        address: '경기도 양평시 옥천면 96길',
        subAddress: '102번지',
        addrCat: '기타',
      },
    ],
  },
  {
    email: 'letuin@gmail.com',
    password: '234',
    name: '렛유인',
    phoneNum: '010-1234-5678',
    likesList: [],
    orderHistory: [],
    addrList: [],
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
