# 배달 서비스 클론코딩

배포 : https://dongwonnn.github.io/delivery-service-web/</br>

Test ID/PW : kkum9408@gmail.com / 123</br>

json 서버 : json-server ./data.json --port 4000.</br>

## 👨‍💻 기술 스택

<h3 align="center">  
  FrontEnd
</h3>
<p align="center">  
  <img src="https://img.shields.io/badge/HTML-white?logo=html5"/>
  <img src= "https://img.shields.io/badge/CSS-blue?logo=css3"/>
  <img src= "https://img.shields.io/badge/SCSS-pink?logo=sass"/>
  <img src= "https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript"/>
  <img src= "https://img.shields.io/badge/React-blue?logo=react"/>
</p>

## 📜 주요 페이지

#### 1. 메인 페이지

<details>

|                                                         ✔ 카테고리 검색                                                          |                                                        ✔ 프랜차이즈 검색                                                         |                                                          ✔ 기능별 정렬                                                           |
| :------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/59330828/109375857-60278e80-7903-11eb-8f1e-a62acc758ec4.gif" width="150px"/> | <img src="https://user-images.githubusercontent.com/59330828/109375859-69b0f680-7903-11eb-872b-7041c701062b.gif" width="150px"/> | <img src="https://user-images.githubusercontent.com/59330828/109375863-73d2f500-7903-11eb-8d56-c0694570ea0d.gif" width="150px"/> |

---

</details>

#### 2. 음식 주문, 주문 내역 조회 페이지

<details>

|                                                         ✔ 메뉴 메뉴 선택                                                         |                                                      ✔ 장바구니 - 주문내역                                                       |
| :------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/59330828/109376493-2d33c980-7908-11eb-8688-b5d779e6677f.gif" width="150px"/> | <img src="https://user-images.githubusercontent.com/59330828/109376856-a6342080-790a-11eb-9816-91bd11c65b4e.gif" width="150px"/> |

---

</details>

#### 3. 즐겨찾기 추가 , 즐겨찾기 조회 페이지

<details>

|                                                      ✔ 즐겨찾기 추가 · 조회                                                      |
| :------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/59330828/109377041-feb7ed80-790b-11eb-93aa-e30510e771bc.gif" width="150px"/> |

---

</details>

#### 4. 검색 기능 페이지

<details>

|                                                           ✔ 검색 기능                                                            |
| :------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/59330828/110119867-b020bc80-7dff-11eb-913a-bd786fcae061.gif" width="150px"/> |

---

</details>

#### 5. 마이페이지

<details>

|                                             ✔ 마이페이지 - 주소, 즐겨찾기, 로그아웃                                              |
| :------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/59330828/110119967-caf33100-7dff-11eb-9c11-6ddc1255be2a.gif" width="150px"/> |

---

</details>

## ⚙️ 주요 기능 코드

#### 1. 로그인, 로그아웃, 회원가입, 페이지 인증 기능

<details>

⚙️로그인

- singIn 함수를 통해 user 정보 반환. 실패 시 에러 발생
- authenticated을 통해 user의 상태 표현

  ```javascript
  const authenticated = user !== null;

  const login = ({ email, password }) => setUser(singIn({ email, password }));

  export const singIn = ({ email, password }) => {
    const user = users.find(
      (user) => user.email === email && user.password === password,
    );

    if (user === undefined) throw new Error();
    return user;
  };
  ```

- 인증
  ```javascript
  const handleClick = () => {
    try {
      login({ email, password });
      history.go(-1);
    } catch (e) {
      alert('다시 입력해주세요.');
      setEmail('');
      setPassword('');
    }
  };
  ```

⚙️로그아웃

- authenticated을 이용해 로그아웃 기능 구현

  ```javascript
  const logout = () => setUser(null);
  ```

⚙️ 회원가입

- 임시 배열 데이터에 push 하여 구현

  ```javascript
  export const register = (email, password, name, phoneNum) => {
    users.push({
      email: email,
      password: password,
      name: name,
      phoneNum: phoneNum,
    });
  };
  ```

⚙️페이지별 인증 기능

- authenticated 체크를 통해 redirect 기능 구현

  ```javascript
    <Route
      {...rest}
      render={(props) =>
          authenticated ? (
          render ? (
              render(props)
          ) : (
              <Component {...props} />
          )
          ) : (
          <Redirect
              to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
    }
  ```

  </details>

#### 2. 홈 페이지

  <details>

⚙️ 음식 카테고리별 분류

- axios 이용해 api get, useEffect를 이용해 렌더링 성능 최적화

  ```javascript
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http:localhost:4000/categories');
        setCategories(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
  ```

⚙️ 프랜차이즈별 분류

- api get, category 값 이용해 분류

  ```javascript
  {franchise.map(
          (store) =>
              store.franchise && (
                  ...
  ```

⚙️ 정렬 기준에 따른 분류

- 등급, 배달비 정렬
  useCallback 사용해 함수 재사용 방지

  ```javascript
  const onRecommand = useCallback(() => {
    recommand
      ? setStores([...stores.sort((a, b) => b.grade - a.grade)])
      : setStores([...stores.sort((a, b) => a.grade - b.grade)]);

    setRecommand((recommand) => !recommand);
  }, [stores, recommand, setStores]);

  const onDeliveryCost = useCallback(() => {
    cost
      ? setStores([...stores.sort((a, b) => b.deliveryCost - a.deliveryCost)])
      : setStores([...stores.sort((a, b) => a.deliveryCost - b.deliveryCost)]);

    setCost((cost) => !cost);
  }, [stores, cost, setStores]);
  ```

  </details>

#### 3. 검색 페이지

  <details>
  ⚙️ 초기 화면은 음식 카테고리 분류

- 검색결과가 없을 때 카테고리 출력

  ```javascript
  {inputValue === '' ? (
      <div className="sp-categories">
      {categories.map((cat) => (
          <div className="category-card" key={cat.name}>
          <Link to={`/category/${cat.text}`}>
              <div className="category-img">
              <img src={cat.imgSrc} alt="category"></img>
              </div>
              <p className="category-text">{cat.text}</p>
          </Link>
        </div>
    ))}
  ```

⚙️ 검색 결과에 맞는 음식점 검색

- useEffect를 이용해 입력값의 변할 때 마다 컴포넌트 리렌더링
  검색 길이에 맞춰 검색 결과 filter

```javascript
useEffect(() => {
  if (inputValue !== '') {
    const valueLen = inputValue.length;

    const nextStores = stores.filter(
      (store) => store.name.substring(0, valueLen) === inputValue,
    );

    setSortStores(nextStores);
  }
}, [inputValue, stores]);

const onChangeInput = (e) => {
  setInputValue(e.target.value);
};
```

  </details>

#### 4. 음식점 상세 정보 페이지

  <details>
  ⚙️ 음식점 클릭 시 상세 정보 페이지

- match를 이용해 선택한 음식점 이름 저장
  ```javascript
  const { store } = match.params;
  ```
- 음식점 이름 이용한 filter
  ```javascript
  useEffect(() => {
    const detail = stores.find((value) => value.name === store);
    if (detail !== undefined) {
      setDetailItem(detail);
      setDetail(detail);
    }
  }, [store, setDetail, stores]);
  ```

⚙️ 음식 담기 기능

- 개수 선택

  ```javascript
  const onMinusBtn = () => {
    if (count > 1) {
      setCount(count - 1);

      const nextTotalPrice = defaultPrice * (count - 1);
      setTotalPrice(nextTotalPrice);
    }
  };

  const onPlusBtn = () => {
    if (count < 20) setCount(count + 1);
    const nextTotalPrice = defaultPrice * (count + 1);
    setTotalPrice(nextTotalPrice);
  };
  ```

- 최종 메뉴 선택 저장

  ```javascript
  const onChangeOrderList = () => {
    orderList.splice(0, orderList.length);

    const reqMenu = foodMenu.reqMenu
      .filter((v) => v.check === true)
      .map((el) => el.text);

    const selMenu = foodMenu.selectMenu
      .filter((v) => v.check === true)
      .map((el) => el.text);

    const nextOrderList = {
      mainMenu: food,
      count: count,
      totalPrice: totalPrice,
      reqMenu: reqMenu,
      selMenu: selMenu,
      store: detail.name,
    };

    setOrderList([...orderList, nextOrderList]);

    history.go(-1);
  };
  ```

  </details>

#### 5. 장바구니 페이지

  <details>
⚙️ 장바구니 기능

- 메뉴 취소

  ```javascript
  const onCloseBtn = (idx) => {
    if (lists.length > 1) {
      const newLists = lists.filter((_, index) => index !== idx);
      setLists(newLists);
      setOrderList(lists);
    } else {
      alert('최소 한가지 선택');
    }
  };
  ```

- 메뉴 추가, 총합 계산

  ```javascript
  const onAddMenu = () => {
    setOrderList(lists);
    history.go(-1);
  };

  const payment = lists.reduce((acc, cur) => {
    return acc + cur.totalPrice;
  }, 0);
  ```

- 결제 확인 버튼. 주문정보 저장

  ```javascript
  const onPayBtn = () => {
    const orderInfo = {
      orderMenu: lists,
      orderDate: getFormatDate(),
      delivCheck: true,
    };

    user.orderHistory.push(orderInfo);
    setOrderList([]);
    history.push('/');
  };
  ```

  </details>

#### 6 주문 기록 페이지

  <details>
⚙️ 주문 기록 기능

- 주문 기록 담겨있는 orderHistory 조회

  ```javascript
  user.orderHistory.map((order, index) => ())
  ```

  </details>

#### 7. 즐겨찾기 페이지

  <details>
⚙️ 즐겨찾기 기능

- 즐겨찾기 클릭 시 목록 추가

  ```javascript
  const onLikeBtn = () => {
    setLike(!like);
    const nextLike = !like;

    if (nextLike) {
      user.likesList.push(detailItem);
    } else {
      user.likesList = user.likesList.filter((list) => list.name !== store);
    }
  };
  ```

- 상세정보 즐겨찾기 여부 조회

  ```javascript
  useEffect(() => {
    const hasUserLikedStore = !!user.likesList.find(
      (list) => list.name === store,
    );

    setLike(hasUserLikedStore);
  }, [store, user.likesList]);
  ```

  </details>

#### 8. 주소 페이지

  <details>
⚙️ 주소 설정, 추가, 삭제 기능

- 주소 분류( 집, 회사, 기타 )

  ```javascript
  useEffect(() => {
    if (user.addrList.length > 0) {
      const nextHasHomeAddress = user.addrList.find(
        (addr) => addr.addrCat === '집',
      );
      const nextHasWorkAddress = user.addrList.find(
        (addr) => addr.addrCat === '회사',
      );
      setHasHomeAddress(nextHasHomeAddress);
      setHasWorkAddress(nextHasWorkAddress);
    }
  }, [user.addrList]);
  ```

- 다음 주소 api 적용

  ```javascript
  const Postcode = ({ onAddressChange, onClose, vh }) => {
    const handleComplete = (data) => {
      let fullAddress = data.address;
      let extraAddress = '';

      if (data.addressType === 'R') {
        if (data.bname !== '') {
          extraAddress += data.bname;
        }
        if (data.buildingName !== '') {
          extraAddress +=
            extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
        }
        fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
      }

      onAddressChange(fullAddress);
      onClose();
    };

    return (
      <div>
        <DaumPostcode onComplete={handleComplete} height={vh - 30} />;
      </div>
    );
  };
  ```

  </details>

## 📄 개발 일지

<details>
- [21.01.28]

- [x] 사용할 페이지 생성, 라우팅 설정

  - react router dom 학습

- [21.01.29]

  - [x] 로그인 / 회원가입 / 로그아웃 로직 생성
  - [x] 로그인 인증이 필요한 페이지 설정
    - react router dom Redirect 기능

- [21.01.31]

  - [x] 프론트에서 사용할 임시 json server 설치, 구현
    - 서버 켜기 : json-server ./data.json --port 4000
  - [x] useEffect 이용한 data.json api fetch
    - axios, async, await 이용하여 비동기 통신
  - [x] 메인 페이지 category, franchise, sort, stores Component 구현, display

- [21.02.01]

  - [x] 음식 상세보기, 카테고리 페이지 구현

    - react router dom의 Link 이용해 파라미터로 페이지간 이동
    - history 이용해 페이지간 state 공유

  - [x] useEffect, useState 버그 원인 찾기.
    - react 리렌더링 과정 공부

- [21.02.02]

  - [x] 추천순, 배달비 기준 정렬 기능

- [21.02.03]

  - [x] 주문 기록 페이지 구현
  - 장바구니 페이지에서 결제하기를 누르는 순간 주문기록에 남도록 구현
  - [x] 영수증 모달 구현
  - [ ] 재주문 기능 구현

- [21.02.04]

  - [x] 즐겨찾기 페이지 구현
  - [x] 음식점 하트 누르면 즐겨찾기 List에 추가되는 방식
    - 선택했던 음식점 state을 이용해 기록 남기기

- [21.02.05]

  - [x] 개인 페이지 구현
    - 로그아웃 기능, 주소 관리, 즐겨찾기 기능만 구현

- [21.02.06]

  - [x] 검색 페이지 구현
    - 아무런 검색을 하지 않았을 때 카테고리 Component

- [21.02.08]
  - [x] 검색 페이지 구현(2)
    - 실시간 검색어에 맞춰 해당 음식점 display
    - UTF-8, 기능적 구현 문제로 인해 완성된 한 글자 기준으로 검색 기능 구현
- [21.02.09]

  - [x] 리뷰 페이지 구현
    - 이전에 작성 되었던 리뷰들 display

- [21.02.10]

  - [x] 다음 주소 API 사용해 주소 Component 설정.
  - [x] Component autuclose 로 인한 버그 수정.

- [21.02.11]

  - [x] 주소 추가, 삭제와 기본 주소 설정 구현

- [21.02.15]
  - [x] 하위 컴포넌트에서 중복 선언한 state 최상위 컴포넌트 App.js로 수정
  - [x] 주소 api 팝업 설정
  - [x] 기능별 로그인 인증.
  - [ ] infinity scroll 설정
- [21.02.16]

  - [x] default 주소 설정
  - [x] 다른 음식점에서 동시에 장바구니에 넣는 것 막기.

- [21.02.17 ~ ]

  - [x] react bootstrap grid system 적용
  - [x] homepage, detail, orderHistory, cary page 반응형 구현

- [21.02.19 ~]

  - 배포 과정
    - [x] CI/CD 공부
      - yml 파일, github action 용어 공부
      - workflow, jop, step, event
    - [x] github 이용해 CI 설정. github/workflows/build.yml
      - master branch에서 push 했을 때 realase branch에 build 자동화 시키기
    - [x] eslint 경고 무시 스크립트 구현

- [21.02.20]

  - [x] build 폴더 docs로 변경하는 코드
  - [x] github page 기본 path 설정
    - package.json의 homepage 속성 이용

- [21.02.21]
  - [x] release branch로 push하는 방법
  - [x] Search, Category, Profile page CSS 작업

</details>
