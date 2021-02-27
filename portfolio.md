# 부스토랑

> 수식 셰프는 **크롬 확장프로그램**을 통해 **어느 웹 사이트**에서나 수식을 **편집**하고, **적용**할 수 있는 서비스를 제공합니다. **일회성**이 강한 기존 수식 편집기의 단점을 보완하여 **지속가능한 수식 편집 서비스**를 제공하는 것을 목표로 프로젝트를 진행하였습니다.

### 1. 메인 페이지

- 카테고리 검색
  <img src="https://user-images.githubusercontent.com/59330828/109375857-60278e80-7903-11eb-8f1e-a62acc758ec4.gif"/>
- 프랜차이즈 검색
  <img src="https://user-images.githubusercontent.com/59330828/109375859-69b0f680-7903-11eb-872b-7041c701062b.gif"/>
- 추천순, 배달비 순 정렬 기능
  <img src="https://user-images.githubusercontent.com/59330828/109375863-73d2f500-7903-11eb-8d56-c0694570ea0d.gif"/>

---

### 2. 가게 선택 ~ 장바구니, 주문 내역 조회 기능

- 음식점 메뉴, 세부 메뉴 선택
- 장바구니 기능
- 주문 내역 조회 기능

  <img src="https://user-images.githubusercontent.com/60457112/102458366-79040000-4087-11eb-9048-de2841928847.gif"/>

---

### 3. 수식 사전 제공

- 사용 빈도가 높은 수식들로 구성된 **수식 템플릿** 지원
- **주제별 필터 기능** 및 **검색 기능** 지원
  <img src="https://user-images.githubusercontent.com/60457112/102458354-76a1a600-4087-11eb-9df0-ba58dda5a939.gif"/>

---

### 4. 네이버 소셜 로그인 및 즐겨찾기 기능 지원

- **네이버 소셜 로그인** 지원
- 자주 사용하는 수식을 등록 후 **재사용**할 수 있는 **즐겨찾기** 기능 지원
  <img src="https://user-images.githubusercontent.com/60457112/102458359-77d2d300-4087-11eb-8493-d812ffc89435.gif"/>

---

### 5. 공학용 계산기 지원

- 기본 사칙연산을 포함한 공학용 계산 지원
  <img src="https://user-images.githubusercontent.com/60457112/102458350-75707900-4087-11eb-87b6-f5db9f40195a.gif"/>

---

### 6. 최소화 모드 지원

- 사용자 편리성 증진을 위해 **최소화 모드** 지원
- 최소화 모드에서는 Latex 입력 및 이미지 저장, 텍스트 저장,
  <img src="https://user-images.githubusercontent.com/60457112/102458364-786b6980-4087-11eb-8528-6a801c2300fc.gif"/>

---

### 7. 웹 에디터에 수식을 적용할 수 있는 클립보드 복사 기능 지원

- 클립보드 복사 버튼 클릭 시, 웹 에디터 사이트에 Ctrl + v로 복사 가능
- Notion, Naver Blog, Google Docs 등 다양한 사이트에 적용 가능
  <img src="https://user-images.githubusercontent.com/60457112/102458367-799c9680-4087-11eb-895d-514c7ed5aafa.gif"/>

---

#### 📘 Front-End : React, Typescript, Redux, Emotion, Webpack & Babel, Mathquill Library

## 🗂 Directory

<details>
<details>
<summary>client</summary>
  <div markdown="1">

```
📁client
├── 📁public
│   ├── 📁image
│   ├── background.js
│   ├── content.css
│   ├── icon.png
│   ├── manifest.json
│   └── index.html
└── 📁src
    ├── App
    ├── 📁components
    │   ├── index.tsx
    │   ├── style.ts
    │   └── use(폴더명).ts
    ├── 📁contexts
    │   ├── index.ts
    │   ├── 📁latex
    │   └── 📁user
    ├── 📁hooks
    ├── 📁lib
    │   ├── 📁apis
    │   ├── 📁constants
    │   └── 📁utils
    ├── 📁pages
    └── 📁__tests__
```

  </div>
</details>
