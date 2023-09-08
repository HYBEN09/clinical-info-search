# ⭐️ 원티드 프리온보딩 프론트엔드 인턴십 - 3주차 과제

## 📌 과제 소개

- **목표** : [한국임상정보](https://clinicaltrialskorea.com/) 검색창 구현 + 검색어 추천 기능 구현 + 캐싱 기능 구현

- **개발 기간** : 2023.09.05 ~ 2023.09.08

## 과제 요구사항

- 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현
- API 호출별로 로컬 캐싱 구현
- 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행
- API를 호출할 때 마다 console.info("calling api") 출력을 통해 콘솔창에서 API 호출 횟수 확인이 가능하도록 설정
- 키보드만으로 추천 검색어들로 이동 가능하도록 구현

## 🛫 시작 가이드

- 실행을 위해 다음 Node version이 필요합니다. Node.js v19.0.0

```
git clone https://github.com/HYBEN09/clinical-information-search-bar.git

npm install

npm start
```

## 🛠️ 사용한 기술 스택

#### Development

![HTML5](https://img.shields.io/badge/HTML-%23F5AF64?style=for-the-badge&logo=html5)
![CSS3](https://img.shields.io/badge/CSS-%230A82FF?style=for-the-badge&logo=css3)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=Typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

## ✨ Assignments별 구현 방식

**[Assignment 1] 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현**

**[Assignment 2] API 호출별로 로컬 캐싱 구현**
**[Assignment 3] 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행**

**[Assignment 4] 키보드만으로 추천 검색어들로 이동 가능하도록 구현**

## 🔥 과제 진행 방법

## 🐿️ 프로젝트 성능 진단
![ally](https://github.com/HYBEN09/clinical-information-search-bar/assets/104710243/9b5b8d91-fa24-4b55-80b4-b48b5a22eeb1)

## 🌲 프로젝트 구조

```
.
├── README.md
├── db.json
├── package-lock.json
├── package.json
├── public
│   ├── assets
│   │   ├── favicon.ico
│   │   ├── logo.svg
│   │   ├── mainImg-1.svg
│   │   ├── mainImg-2.svg
│   │   └── mainImg-3.svg
│   └── index.html
├── src
│   ├── @type
│   ├── App.tsx
│   ├── GlobalStyle.ts
│   ├── api
│   │   ├── axios.ts
│   │   └── axiosBase.ts
│   ├── components
│   │   ├── Layout.tsx
│   │   ├── Search
│   │   │   ├── Search.tsx
│   │   │   ├── SearchHistory.tsx
│   │   │   ├── SearchItem.tsx
│   │   │   └── SearchResult.tsx
│   │   └── UI
│   │       ├── Header.tsx
│   │       ├── SearchButton.tsx
│   │       └── SearchInput.tsx
│   ├── constants
│   │   ├── ApiResponse.d.ts
│   │   └── styled.ts
│   ├── context
│   │   └── context.tsx
│   ├── hooks
│   │   ├── useDebounce.ts
│   │   ├── useKeyControl.ts
│   │   ├── useNavigation.ts
│   │   ├── useRecentSearches.ts
│   │   └── useSearchRecommendations.ts
│   ├── index.tsx
│   ├── layout
│   │   └── PageLayout.tsx
│   ├── pages
│   │   ├── Home.tsx
│   │   └── NotFound.tsx
│   ├── routes.tsx
│   └── utils
│       └── cache.ts
├── tsconfig.json
└── webpack
    ├── common.js
    ├── config.js
    ├── dev.js
    ├── plugin
    │   ├── copy.js
    │   ├── dotEnv.js
    │   ├── html.js
    │   └── imageMin.js
    └── prod.js
```
