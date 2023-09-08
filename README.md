# ⭐️ 원티드 프리온보딩 프론트엔드 인턴십 - 3주차 과제

## 📌 과제 소개

- **목표** : [한국임상정보](https://clinicaltrialskorea.com/) 검색창 구현 + 검색어 추천 기능 구현 + 캐싱 기능 구현

- **개발 기간** : 2023.09.05 ~ 2023.09.08

## 🔗 배포 
- 배포 링크: http://clinical-information-search-bar.s3-website.ap-northeast-2.amazonaws.com/
<details>
<summary> GitHub Actions를 설정하여 AWS로 자동배포</summary>
  ```
    name: clinical-information-search-bar

# main에 push 이벤트가 발생하면 트리거가 되어서 workflow 실행 됨
on:
  push:
    branches:
      - main
  workflow_dispatch:

jobs:
  cicd:
    runs-on: ubuntu-latest
    steps:
      - name: Git checkout😉
        uses: actions/checkout@v3
      - name: Run "✏️ Remove node_modules and Install node packages"
        run: npm ci
      - name: Run "⚒️ Project build"
        run: npm run build
      - name: Run "🚀 Deploy to S3"
        uses: jakejarvis/s3-sync-action@master
        with:
          args: --acl public-read --follow-symlinks --delete
        env:
          SOURCE_DIR: 'build'
          AWS_REGION: 'ap-northeast-2'
          REACT_APP_API_URL: ${{ secrets.REACT_APP_API_URL }}
          AWS_S3_BUCKET: ${{ secrets.AWS_S3_BUCKET }}
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}

  ```
</details>

## 🛠️ 사용한 기술 스택

#### Development
`Webpack` `React` `HTML5` `styled-component` `Typescript` `React Router` `Axios`


## 🛫 시작 가이드

- 실행을 위해 다음 Node version이 필요합니다. Node.js v19.0.0

1. 다음 명령어를 사용하여 프로젝트를 clone 하거나,<br/>
   우측 상단의 Code 버튼 -> Download ZIP 를 눌러 프로젝트를 다운로드 하실 수 있습니다.
   ```
   git clone https://github.com/HYBEN09/clinical-information-search-bar.git
   ```
2. 프로젝트 실행에 필요한 패키지를 설치합니다.
   ```
   npm install
   ```

3. 패키지 설치가 끝났다면, 다음 명령어를 사용하여 프로젝트를 실행합니다.
    ```
    npm start
    ```

## 📃 과제 요구사항

- 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현
- API 호출별로 로컬 캐싱 구현
- 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행
- API를 호출할 때 마다 console.info("calling api") 출력을 통해 콘솔창에서 API 호출 횟수 확인이 가능하도록 설정
- 키보드만으로 추천 검색어들로 이동 가능하도록 구현

## ✨ Assignments별 구현 방식

**[Assignment 1] 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현**

**[Assignment 2] API 호출별로 로컬 캐싱 구현**

**[Assignment 3] 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행**

**[Assignment 4] 키보드만으로 추천 검색어들로 이동 가능하도록 구현**


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
