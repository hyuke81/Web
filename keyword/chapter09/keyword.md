- State
    - State란 무엇인가요?
        - 컴포넌트의 상태를 의미함
    - State를 정의할 때 중요한 점은 무엇이고, 그 이유는 무엇인가요?
        - 랜더링이나 데이터 흐름에 사용되는 것만 state에 사용해야 함.
            - state가 변경될 경우 컴포넌트가 재랜더링되기 때문에 데이터 흐름에 관련 없는 값을 포함하면 불필요한 경우에 컴포넌트가 다시 랜더링 되어 성능을 저하시킬 수 있기 때문에 중요함!
    - React Component 생명주기에 대해 설명해주세요.
        
        컴포넌트가 계속 존재하는 것이 아닌 시간의 흐름에 따라 생성되고 업데이트되다가 사라짐
        
        ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/1a1f365a-1c64-4642-b391-3302b0352264/image.png)
        
- Hooks
    - Hooks가 개발된 이유는 무엇인가요?
        1. 기존 컴포넌트 사이 상태 로직 재사용이 어려움
        2. 복잡한 컴포넌트 이해하기 어려움
        3. class로 인해 혼동이 생김 
    - useState에 대한 간단한 설명과 사용법을 설명해 주세요.
        
        ```jsx
        const [count, setCount] = useState(0);
        ```
        
        - 인자로 초기 state를 받음
        - state는 컴포넌트가 다시 렌더링되어도 그대로 유지됨
        - 현재의 state 값과 이 값을 업데이트 하는 함수를 쌍으로 제공함
    - SideEffect의 사전적 의미와, React에서 사용되는 의미와 함께 React에서는 왜 해당 의미를 갖는지, 그 이유를 함께 설명해 주세요.
        - 컴포넌트가 화면에 렌더링된 이후 비동기로 처리되어야 하는 부수적인 효과들
        - 요청 즉시 1차 렌더링을 함으로 연동하는 api가 응답이 늦어지거나 응답이 없을 겨우 영향을 최소화시킬 수 있어 사용자 경험 측면에서 유리함
    - effect 함수가 mount, unmount가 각각 한 번만 실행되게 하려면 어떻게 해야 하나요?
        
        의존성배열에 빈 배열을 넣는다
        
    - Hooks의 규칙들에 대해 설명해 주세요.
        1. 최상위에서만 hook 호출
            1. 반복문, 조건문, 중첩함수 내에서 hook 사용 x
        2. 오직 react 함수 내에서 hook 호출
            1. js 함수 내 hook 호출 x
- Props-Drilling
    - Props-Drilling은 무엇인가요?
        - 원하는 상태인 state 값을 하위 컴포넌트에게 넘겨주는 작업이 발생하는 상황에서 나옴
        - 하위 컴포넌트가 매우 깊게 중첩되는 경우에 prop 값으
    - 이를 어떻게 해결할 수 있을까요?
        - 전역 상태관리 라이브러리 mobx, recoil, redux 등 사용
        - 간단하게는 Context API 를 사용
- Context-Api
    - 앱에서 컴포넌트에게 props를 사용하지 않고 필요한 state를 쉽게 공유할 수 있음
    - 어디에 사용?
        - 자주 업데이트할 필요가 없는 데이터에 사용
- Redux
    - 상태관리는 왜 필요한가요?
        
        각 컴포넌트 간의 직접적인 데이터 전달이 어려워서 데이터를 부모 컴포넌트에 보내고 다시 해당 상태 데이터를 필요한 컴포넌트로 전달해야 함
        
    - 상태 관리 툴은 어떤 문제를 해결해 주나요?
        - 애플리케이션의 상태가 언제, 어디서, 왜, 어떻게 업데이트되는지, 이러한 변경이 발생할 때 애플리케이션 로직이 어떻게 작동하는지 더 쉽게 이해 가능
        - 예측 가능하고 테스트 가능한 코드를 작성하도록 유도
    - Redux의 기본 개념 세 가지에 대해 설명해 주세요.
        - 단일 스토어
            - 전체 상태값이 하나의 객체로 표현
        - 읽기 전용 상태
            - state는 읽기 전용
        - 리듀서는 순수한 함수
            - 상태의 변경은 순수 함수로 이루어져야 함
    - Store, Action, Reducer의 의미와 특징에 대해 설명해 주세요.
        - Store는 state의 관리를 하는 전용 장소
            - 객체 형식 저장
            - createStore(reducer) → store 생성
            - getState() → 현재 state 가져옴
            - dispatch(action) → store의 reducer에 action을 전달
        - Action은 상태 변경을 일으키는 이벤트에 대한 정적인 정보
            
            ```jsx
            {
                type: [액션의 종류를 식별할 수 있는 문자열 혹은 심볼],
                [액션의 실행에 필요한 임의의 데이터],
            }
            ```
            
        - Reducer는 Action이 Store를 어떻게 업데이트할지를 기술
            - 항상 state와 action을 받아서 state를 return 해줘야 함
    - Redux의 장점을 설명해 주세요.
        - 크고 복잡한 앱에서 확장성이 높음
        - 액션에 따른 모든 변경을 추적 가능
        - "특정 상태 조각이 언제 변경되었으며 데이터는 어디에서 왔는지" 동작을 예측 가능
- Redux Toolkit
    
    <aside>
    💡 전역 상태 관리를 바로 이해하는 것은 쉽지 않으나, 차근차근, 공식문서와 블로그 등을 참고해서 꼼꼼하게 정리해 보세요! (매튜/김용민)
    
    </aside>
    
    [Getting Started | Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)
    
    - redux-toolkit과 redux의 차이
        
        리덕스 → state 관리하기는 편하지만 수많은 boilerplate 코드를 작성해야 한다는 점에서 불편함
        
        리덕스 툴킷 → boilerplate 코드가 많은 문제나 리덕스 store를 구성하는 것이 복잡한 문제 등 기존의 리덕스의 문제를 해결하고 유용한 패키지를 디폴트로 포함함
        
    - redux-toolkit 사용법 (자세하게)
        - Provider
            
            Redux 저장소에 액세스해야 하는 모든 중첩된 구성 요소에서 `<Provider>` Redux를 사용할 수 있도록 해줌
            
            `<Provider>`전체 앱의 구성 요소 트리를 그 내부에 포함하여 최상위 수준에서 렌더링
            
            ⇒ Hooks 와 API 는`connect` React의 Context 메커니즘을 통해 제공된 저장소 인스턴스에 액세스할 수 있음
            
        - configureStore
            
            `reducer(필수), middleware, devTools, preloadedState` 등을 설정 할 수 있음
            
            ```jsx
            import { configureStore } from "@reduxjs/toolkit";
            
            export default configureStore({
              reducer: {},
            });
            ```
            
        - createSlice
            
            함수의 객체, 슬라이스 이름, 초기 상태 값을 받아들이고 해당 액션 생성자와 액션 유형으로 슬라이스 리듀서를 자동으로 생성
            
            action과 reducer를 하나의 파일에서 관리할 수 있음
            
            `createSlice`를 사용하여 리듀서와 액션을 모두 한번에 정의해줌 → 이걸 나누어서 `configureStore`에 직접 reducer를 넣어주고 사용하는 컴포넌트에서는 action을 가져와 사용
            
        - useSelector
            
            등록한 데이터를 가져와서 쓸 수 있음
            
            초기 상태값 등록
            
        - useDispatch
            
            hook는 redux 저장소에서 함수에 대한 참조를 반환
            
            필요에 따라 작업을 전달하는 데 사용할 수 있음 
            
            ⇒ redux의 액션 함수를 실행해서 redux store에 변경된 state값을 저장하기 위해 useDispatch라는 리액트 훅을 사용하여 액션을 실행함 
            
            ⇒ dispatch이용 → 액션함수 실행 → state저장 & 변경 
            
        - 기타 사용 방법을 상세하게 정리해 보세요
- Zustand
    
    작고 빠르며 확장 가능한 React 프로젝트에서 사용하는 상태 관리(Store) 라이브러리
    
    ```jsx
    npm i zustand
    ```
    
    create → 스토어 생성 / get, set 매개변수를 가짐 (상태 변경, 조회 가능)
    
    ```jsx
    import { use이름Store } from '~/store/스토어'
    
    const 상태 = use이름Store(state => state.상태)
    const 액션 = use이름Store(state => state.액션)
    ```
    
    상태 초기화 
    
    - `resetState` 함수를 추가해 사용