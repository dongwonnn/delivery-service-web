## 쿠팡이츠 클론코딩

### 프로젝트 개발 범위

#### 1. 로그인, 로그아웃, 회원가입, 페이지별 인증 기능

⚙️로그인

- singIn 함수를 통해 user 정보 반환. 실패 시 에러 발생
- authenticated을 통해 user의 상태 표현

  ```
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
  ```
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

  ```
  const logout = () => setUser(null);
  ```

⚙️ 회원가입

- 임시 배열 데이터에 push 하여 구현

  ```
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

  ```
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

#### 2. 홈 페이지

⚙️ 음식 카테고리별 분류

- axios 이용해 api get, useEffect를 이용해 렌더링 성능 최적화

  ```
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

  ```
  {franchise.map(
          (store) =>
              store.franchise && (
                  ...
  ```

⚙️ 정렬 기준에 따른 분류

- 등급, 배달비 정렬
  useCallback 사용해 함수 재사용 방지

  ```
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

#### 3. 검색 페이지

⚙️ 초기 화면은 음식 카테고리 분류

- 검색결과가 없을 때 카테고리 출력

  ```
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

```
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

#### 4. 음식점 상세 정보 페이지

⚙️ 음식점 클릭 시 상세 정보 페이지

- match를 이용해 선택한 음식점 이름 저장
  ```
  const { store } = match.params;
  ```
- 음식점 이름 이용한 filter
  ```
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

  ```
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

  ```
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

#### 5. 장바구니 페이지

⚙️ 장바구니 기능

- 메뉴 취소

  ```
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

  ```
  const onAddMenu = () => {
      setOrderList(lists);
      history.go(-1);
  };

  const payment = lists.reduce((acc, cur) => {
      return acc + cur.totalPrice;
  }, 0);
  ```

- 결제 확인 버튼. 주문정보 저장

  ```
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

#### 6 주문 기록 페이지

⚙️ 주문 기록 기능

- 주문 기록 담겨있는 orderHistory 조회

  ```
  user.orderHistory.map((order, index) => ())
  ```

#### 7. 즐겨찾기 페이지

⚙️ 즐겨찾기 기능

- 즐겨찾기 클릭 시 목록 추가

  ```
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

  ```
  useEffect(() => {
      const hasUserLikedStore = !!user.likesList.find(
      (list) => list.name === store,
      );

      setLike(hasUserLikedStore);
  }, [store, user.likesList]);
  ```

#### 8. 주소 페이지

⚙️ 주소 설정, 추가, 삭제 기능

- 주소 분류( 집, 회사, 기타 )

  ```
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

  ```
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
