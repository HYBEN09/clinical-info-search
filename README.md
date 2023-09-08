# ⭐️ 원티드 프리온보딩 프론트엔드 인턴십 - 3주차 과제

## 📌 과제 소개

- **목표** : [한국임상정보](https://clinicaltrialskorea.com/) 검색창 구현 + 검색어 추천 기능 구현 + 캐싱 기능 구현

- **개발 기간** : 2023.09.05 ~ 2023.09.08

- **팀 REFO** : [pre-onboarding-12th-3-17](https://github.com/WantedTeam17/pre-onboarding-12th-3-17/tree/develop)

## 🔗 배포 
- 배포 링크: http://clinical-information-search-bar.s3-website.ap-northeast-2.amazonaws.com/
- GitHub Actions를 설정하여 AWS로 자동배포

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

### **📍[Assignment 1] 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현**
| 검색어 추천 기능                   |
| -------------------------------- |
| <img width="500" alt="image" src="https://github.com/HYBEN09/clinical-information-search-bar/assets/104710243/a23484dc-7d9a-4553-8a64-4eb9936cbda5">| 



1-1) **API 호출** <br/>
API 호출시에는 Axios 라이브러리를 사용하였습니다.
Axios는 HTTP 클라이언트 라이브러리로, API 호출을 간편하게 수행할 수 있도록 도와줍니다.<br/> Axios를 사용하여 API_URL로 정의된 엔드포인트로 검색어를 보내고, API에서 반환된 데이터를 처리했습니다.

1-2) **추천 검색어 표시** <br/>
사용자가 검색어를 입력할 때, 관련 검색어를 추천해주는 기능을 구현했습니다. <br/> 이를 위해 사용자의 입력에 따라 API를 호출하고, 반환된 추천 검색어를 화면에 표시했습니다.
추천 검색은 7개만 나오게 적용했습니다.

1-3) **검색어가 없을 경우** <br/>
아무런 검색어가 없을 경우에는 모달창에 '검색어가 없습니다' 문구를 출력하였습니다.


### **📍[Assignment 2] API 호출별로 로컬 캐싱 구현**
| API 호출별로 로컬 캐싱  기능           |
| -------------------------------- |
| <img width="500" alt="image" src="https://github.com/HYBEN09/clinical-information-search-bar/assets/104710243/cdcb0130-40f9-4427-a2d6-00cfc28a33df">| 

2-1) **캐싱 유효기간 설정** ( expire time )<br/>
  API 호출 결과를 로컬 캐시에 저장할 때, 각 API 호출별로 캐시의 유효기간을 설정했습니다. 유효기간은 캐시된 데이터가 얼마나 오래 유지될지 결정하는 중요한 요소입니다. <br/>
  5분(300초) 동안 데이터가 캐시에 저장되고, 그 이후에는 자동으로 만료되도록 구현하였습니다.

2-2) **캐싱 구현** <br/>
  캐싱 기술은 로컬 스토리지(Local Storage)를 활용하여 구현했습니다. 로컬 스토리지는 브라우저에서 제공하는 영구적인 데이터 저장 공간으로, 캐싱된 데이터를 안전하게 저장할 수 있는 이점을 활용했습니다. <br/>

  👉  **setCache** <br/>
     API 호출 결과를 로컬 캐시에 저장하는 함수입니다. 데이터와 함께 유효기간 정보도 저장합니다.
  
   ```
     export const setCache = <T>(key: string, data: T): void => {
     const CACHE_EXPIRATION = 5 * 60 * 1000;   
   
     const cacheData: CacheData<T> = {
       data,
       expiry: Date.now() + CACHE_EXPIRATION,
     };
   
     localStorage.setItem(key, JSON.stringify(cacheData));
   };
   
   ```
   👉  **getCache** <br/>
      로컬 캐시에서 데이터를 검색하는 함수입니다. 캐시된 데이터가 유효한지 검사하고, 만료된 데이터는 자동으로 삭제합니다.

     ```
      export const getCache = <T>(key: string): T | null => {
        const cacheString = localStorage.getItem(key);
      
        if (!cacheString) return null;
      
        const { data, expiry }: CacheData<T> = JSON.parse(cacheString);
      
        if (Date.now() > expiry) {
          localStorage.removeItem(key);
          return null;
        }
      
        return data;
      };
      
    ```

- 로컬 캐싱의 이점 <br/>
   로컬 캐싱을 활용함으로써 <br/>
   1) 네트워크 대역폭 절약: 캐싱된 데이터를 사용하여 중복 API 호출을 줄여서 네트워크 대역폭을 절약합니다. <br/>
   2) 응답 시간 단축: 캐시된 데이터를 사용하면 API 호출을 생략하여 응답 시간을 단축시킵니다. <br/>
   3) 안정성 향상: 네트워크 장애 또는 서버 다운 시에도 이전 결과를 표시하여 사용자 경험을 향상시킵니다.
   

### **📍[Assignment 3] 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행**
  | api최적화 전                      | api 최적화 후                           |
| -------------------------------- | ------------------------------------ |
| <img width="500" alt="image" src="https://github.com/HYBEN09/clinical-information-search-bar/assets/104710243/878c2e1a-ca80-47f2-9693-4bf0f0139a98">|  <img width="500" alt="image" src="https://github.com/HYBEN09/clinical-information-search-bar/assets/104710243/700ff056-ecc8-4673-a737-b94df3438d36">| 


   3-1) 디바운스(debounce) 사용 <br/>
   API 호출 횟수를 줄이기 위해 사용한 전략은 Debouncing입니다. Debouncing 기법은 연속된 이벤트를 그룹화하여 단일 이벤트로 처리하는 방식으로, 주로 사용자 입력과 같은 빈번하게 발생하는 이벤트에 대해 과도한 연산을 방지하기 위해 사용됩니다. <br/>
   이 프로젝트에서는 useDebounce라는 커스텀 훅을 생성하여 검색어 입력에 따른 API 호출을 제어하였습니다.  <br/>
   useDebounce 훅은 입력값과 지연시간(delay)를 인자로 받아, 지정된 지연시간 동안 추가적인 입력이 없을 때 최신의 입력값을 반환합니다.

   ```
    const useDebounce = (value: string, delay: number): UseDebounceReturnType => {
     const [debouncedValue, setDebouncedValue] = useState(value);
   
     useEffect(() => {
       const handler = setTimeout(() => {
         setDebouncedValue(value);
       }, delay);
   
       return () => {
         clearTimeout(handler);
       };
     }, [value, delay]);
   
     return { debouncedValue, setDebouncedValue };
   };
   
   ```
   검색 컴포넌트에서는 검색어(searchTerm)가 변경될 때마다 useDebounce 훅을 사용하여 변동이 없는 경우에만 API 호출을 수행합니다.
   ```
   const { debouncedValue: debouncedSearchTerm } = useDebounce(searchTerm, 400);
   
   // ...
   
   useEffect(() => {
     if (debouncedSearchTerm) {
       searchSickness(debouncedSearchTerm)
         .then(response => {
           console.log('API response:', response);
         })
         .catch(error => {
           console.error('Error calling API:', error);
         });
     }
   }, [debouncedSearchTerm]);
   
   ```
   여기서 지연시간으로 설정한 400ms는 임의의 값으로, 실제 상황에서는 네트워크 상태나 서버 응답 시간 등 여러 요인을 고려하여 적절한 값을 설정해야 합니다. <br/>

   이와 같이 Debouncing 기법을 활용하면 사용자가 타이핑하는 동안에는 API 호출 없이 마지막 타입 후 일정 시간(여기서는 400ms)가 경과한 후<br/> 한 번만 API 요청을 보내므로 서버 부하를 크게 줄일 수 있습니다.


### **📍[Assignment 4] 키보드만으로 추천 검색어들로 이동 가능하도록 구현**
| 키보드만으로 추천 검색어들로 이동        |
| -------------------------------- |
| <img width="500" alt="image" src="https://github.com/HYBEN09/clinical-information-search-bar/assets/104710243/0eaf568c-eb9f-4592-9677-2a78e7c0e141">| 


키보드로 추천 검색어를 이동할 수 있도록 useKeyboardNavigation라는 커스텀 훅을 사용하였습니다.
 ```
export const useKeyboardNavigation = ({
  focusedIndex,
  setFocusedIndex,
  setSelectedItem: setSelectedSickNm,
  recommendedSearches,
}: UseKeyboardNavigationProps) => {
  // ...

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          handleArrowDown();
          break;
        case 'ArrowUp':
          e.preventDefault();
          handleArrowUp();
          break;
        case 'Enter':
          handleEnter();
          break;
        case 'Escape':
          handleEscape();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [focusedIndex]);
};

 ```
이 훅은 focusedIndex, setFocusedIndex, setSelectedItem 그리고 recommendedSearches라는 파라미터를 받아서, 각각의 키보드 이벤트에 대응하는 핸들러 함수를 정의하고, 해당 함수들을 실제 키보드 이벤트에 바인딩합니다.
- ArrowDown: 현재 포커스된 아이템 인덱스(focusedIndex)를 증가시킵니다. 이미 마지막 아이템에 포커스되어 있다면 아무런 동작도 하지 않습니다.
- ArrowUp: 현재 포커스된 아이템 인덱스(focusedIndex)를 감소시킵니다. 이미 첫 번째 아이템에 포커스되어 있다면 아무런 동작도 하지 않습니다.
- Enter: 현재 포커스된 아이템을 선택합니다. 선택된 아이템은 selectedItem 상태 변수에 저장됩니다.
- Escape: 현재 포커스된 아이템과 선택된 아이템을 모두 초기화합니다.

따라서 사용자는 ArrowUp/ArrowDown 키로 추천 검색어 목록 내에서 움직일 수 있으며, Enter 키로 원하는 검색어를 선택하거나 Escape 키로 선택을 취소할 수 있습니다.



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
