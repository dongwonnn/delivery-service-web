<!-- ## Deliver Service Web Version

### props와 state 만으로 구현한 react 웹 서비스 입니다.

### json 서버 : json-server ./data.json --port 4000.

### react 서버 : yarn start

### test용 아이디/비밀번호 : kkum9408@gmail.com / 123 -->

- Test git stash

- 구현 안된 기능

  - [ ] 재주문 기능
  - [ ] 리뷰 남기기
  - [ ] 지도로 받는 곳 설정하기
  - [ ] (버그) 하나 이상 주문 받기

### 개발 일지

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
    - [ ] eslint 경고 무시 스크립트 구현

- [21.02.20]

  - [x] build 폴더 docs로 변경하는 코드
  - [x] github page 기본 path 설정
    - package.json의 homepage 속성 이용

- [21.02.21]
  - [ ] release branch로 push하는 방법
  - [x] Search, Category, Profile page CSS 작업
