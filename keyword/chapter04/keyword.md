- `useEffect`  🍠
    - `useEffect`는 외부 시스템과 컴포넌트를 동기화하는 React Hook
        
        ```jsx
        useEffect(setup, dependencies?)
        ```
        
        - `useEffect Hook`을 이용하여 우리가 React에게 컴포넌트가 렌더린 된 이후에 어떤 일을 수행할지 정해줄 수 있음
        - `useEffect Hook`을 사용하면 함수 컴포넌트에서도 `side effect`를 사용할 수 있음
            - `side effect`는 외부세계와의 상호작용이나 가변 데이터의 변경 등을 포함하는 코드
                - 데이터베이스 변경
                - 전역 변수나 클래스의 멤버 변수 변경
                - API 호출
                - 콘솔 로깅
        - 과거엔 클래스형 컴포넌트에서만 생명주기 메소드를 사용할 수 있었지만, 오늘날에는 함수형 컴포넌트에서도 사용 가능
            - `componentDidMount`, `componentDidUpdate`, `componentWillUnmount` → 라이프사이클 훅 대체 가능
        - `useEffect` 작동 조건
            - 페이지가 처음 렌더링되고 `useEffect` 무조건 한 번 실행
            - `useEffect`에 배열로 지정한 `useState`값이 변결될 때 시행
        - 렌더링될때마다 실행되는 문법
            
            ```jsx
            useEffect(()=>{
            	// 작업
            });
            ```
            
        - 화면에 첫 렌더링 될 때 실행, value값이 바뀔때 실행되는 문법
            
            ```jsx
            useEffect(()=>{
            	// 작업
            },[value]);
            ```
            
- `try, catch, finally` 구문  🍠
    - **`try...catch`** 문은 `try` 블록과 `catch` 블록, `finally` 블록 중 하나 혹은 두 블록으로 구성
        - `try` 블록 내 코드가 먼저 실행되고, 만약 그 안에서 예외가 발생한다면 `catch` 블록 내 코드가 실행
        - `finally` 블록 내 코드는 항상 실행되며, 제어 흐름이 전체 구문을 종료하기 전에 실행
        
        ```jsx
        try {
          tryStatements //try 블록에서 실행될 구문
        } catch (exceptionVar) { //catch 블록에서 잡힌 예외를 담는 선택적 식별자 혹은 패턴(옵션)
          catchStatements //try 블록에서 예외가 발생했을 때 실행될 구문
        } finally {
          finallyStatements //try...catch...finally 구문에서 제어 흐름이 빠져나가기 전에 실행되는 구문, 예외가 발생했는지 여부와 관계없이 항상 실행
        }
        ```
        
        - `try` 문은 항상 `try` 블록으로 시작
        - `catch` 블록 또는 `finally` 블록 중 하나가 반드시 존재해야 함
        - `catch` 블록과 `finally` 블록을 모두 가질 수도 있음
            - `try...catch`
            - `try...finally`
            - `try...catch...finally`
        - `catch`
            - `try` 블록에서 예외가 발생하면, `exceptionVar`( `catch (e)` 에서의 `e`)에 예외 값이 저장됨
                - `catch` 블록 스코프 내에서만 사용 가능
        - `finally`
            - `try` 블록이 정상적으로 실행을 마치고 (예외가 발생하지 않은 경우)
            - `catch` 블록이 정상적으로 실행을 마치고
            - `try` 블록이나 `catch` 블록에서 제어 흐름 구문(`return`, `throw`, `break`, `continue`)이 실행되어 해당 블록을 벗어나기 직전
- `axios`  🍠
    - 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리
    
    ```jsx
    npm i axios
    ```
    
    - 장점
        - 간단하여 HTTP 요청을 보내고 응답하는 것이 쉬움
        - 서버에서 받은 응답을 자동으로 JSON으로 피싱함
        - 요청이나 응답을 가로채 중간에서 로직을 추가하거나 헤더를 수정하는 작업이 가능함
        - 취소요청 기능을 제공하여 불필요한 네트워크 요청 방지
    - REST API (REST 기반의 API를 웹으로 구현한 것)
        1. GET: 데이터 조회
        2. POST: 데이터 등록 및 전송
        3. PUT: 데이터 수정
        4. DELETE: 데이터 삭제 
    - POST, PUT, PATCH 차이점
    
    | POST | PUT | PATCH |
    | --- | --- | --- |
    | Create | Update | Partial Update |
    | 생성 | 갱신, 생성 | 일부 갱신 |
    | 여러번 호출시 
    매번 다른 결과 생성  | 여러번 호출 시 동일한 결과  | 지정한 변경사항 일부만 변경 |
- `fetch`  🍠
    - HTTP 파이프라인을 구성하는 요청과 응답 등의 요소를 JavaScript에서 접근하고 조작할 수 있는 인터페이스를 제공
    - fetch 함수는 네트워크 요청을 보내고, 서버로부터 응답을 받음
    - 응답은 promise 객체로 반환되며, 이를 통해 비동기적으로 데이터를 처리할 수 있음
    
    ```jsx
    const promise = fetch(url, [options])
    ```
    
    - url: 접근하고자 하는 URL
    - options: 선택 매개변수, method나 header 등을 지정
    
- `axios` vs `fetch` (차이점)  🍠
    
    
    | X | **Axios** | **Fetch** |
    | --- | --- | --- |
    | **1** | 요청 객체에 **url**을 가지고 있다 | 요청 객체에 **url**이 없다 |
    | **2** | **설치과정**이 필요하다 | 대부분의 최신 브라우저에 내장되어 있어 **설치**가 필요없다 |
    | **3** | 내장된 **XSRF** 보호기능이 있다 | 기능 없음 |
    | **4** | **data** 속성을 사용한다. | **body** 속성을 사용한다. |
    | **5** | data에는 **객체**가 포함되어 있다 | body는 **문자열화** 되어야 한다. |
    | **6** | status가 200 이고 statusText**가 'OK'** 일 때 요청은 정상이다 | 응답 객체에 **OK** 속성이 포함되어 있으면 요청은 정상이다 |
    | **7** | JSON 데이터의 **자동 변환**을 수행한다. | **json()**메서드를 사용해야 한다. |
    | **8** | 요청 취소 및 타임아웃 기능이 존재 | 기능 없음 |
    | **9** | HTTP 요청을 **가로챌** 수 있는 기능이 있다 | 기능 없음 |
    | **10** | 다운로드 진행률에 대한 지원이 내장되어 있다. | 기능 없음 |
    | **11** | 더 많은 브라우저를 지원한다. | Chrome 42 이상, Firefox 39 이상, Edge 14 이상, Safari 10.1 이상만 ㅇ지원한다. |
- `.env` 파일에는 어떤 내용들을 관리할까요?  🍠
    - 외부 API 호출할 때 API키와 같은 민감한 정보는 직접 코드에 작성하지 않고 .env 파일에 넣어 관리함.
    - 환경에 따라 설정을 다르게 적용하기 위해 환경 구분 변수를 설정할 수 있음
        - 개발 환경과 배포 환경에서 각각 필요한 설정을 분리할 수 있음
    - https://velog.io/@sj_yun/React-Vite-%ED%99%98%EA%B2%BD%EC%97%90%EC%84%9C-.env-%ED%99%98%EA%B2%BD%EB%B3%80%EC%88%98-%EC%84%A4%EC%A0%95%EB%B2%95
    - .env 파일을 .gitignore에 등록해줘야 함
        
        ```jsx
        깃에 .env 파일이 올라가면 안 되기 때문에 꼭! gitIgnore에 .env를 꼭 추가시켜줍니다!!
        
        gitIgnore
        > .env
        ```
        
    - Vite에서 환경변수 사용법
        1. 디렉토리에 .env파일 생성
        2. 변수명 `VITE_` 로 시작하는 변수생성
        3. 따옴표를 감싸도 괜찮음
        
        ```jsx
          VITE_APPLICATION_KEY = "설정하고자 하는 값"
        ```
        
        1. 필요한 곳에서 사용시 `import.meta.env.`변수명으로 호출
        
        ```jsx
        const APPLICATION_KEY = import.meta.env.VITE_APPLICATION_KEY
        ```
        
- **`custom hook ?`**
    - 리액트는 제공해주지 않지만, 개발을 진행할 때 개인적으로 'hook'으로 만들면 더 편하겠다고 느낄 때, 자신만의 hook으로 만드는 것을 의미
    - 같은 로직이 반복될 때 두 로직을 나누어서 작성하는 게 가능할지라도, 굉장히 비효율적
        - 로직을 하나의 **`custom hook`** 으로 따로 정의하여 비효율성을 낮출 수 있음
    - 컴포넌트 로직 자체를 분할 + 재사용
    - 규칙
        1. `use`로 시작할 것
            1. 리액트에서 `hook`들은 모두 `use`로 시작하는 것이 원칙
        2. state 자체가 아닌 state 저장 논리를 공유하는 것
            1. 같은 hook이 연이어 호출되었다고 해도 서로의 기능에는 영향을 미치지 않는다
        3. `custom hook`은 순수 함수로 기대됨 
        4. 최상위에서만, react 함수 내에서만 호출해야 함
        5. `customHook`에 함수 넘겨주기
    - 장점
        - 코드의 **중복을 줄이고** 컴포넌트의 재사용성과 유지보수성을 높일 수 있음
        - Effect와 데이터 흐름을 명확하게 만듦
        - 컴포넌트가 자신의 역할에 집중할 수 있음
        - 리액트가 새로운 기능을 추가했을 때, 컴포넌트 요소를 바꾸지 않고도 해당 effect를 제거할 수 있음