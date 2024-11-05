- useRef 🍠
    
    렌더링에 필요하지 않은 값을 참조할 수 있는 React hook
    
    ```jsx
    const ref = useRef(initialValue)
    ```
    
    - 컴포넌트가 특정 정보를 ‘기억’하도록 하고 싶지만 해당 정보가 새 렌더링을 촉발하지 않도록 하려는 경우 ref를 사용할 수 있음
    - **`useRef(initialValue)`**
        - 컴포넌트의 최상위 레벨에서 `useRef`를 호출하여 `ref`를 선언
        
        ```jsx
        import { useRef } from 'react';
        
        function MyComponent() {
          const intervalRef = useRef(0);
          const inputRef = useRef(null);
          // ...
        ```
        
        - returns
            - 단일 프로퍼티를 가진 객체를 반환함
            
            ```jsx
            const intervalRef = useRef(0)
            console.log(intervalRef)
            
            // { current: 0 } 출력
            ```
            
    
    - ref 특징
        - 일반 변수는 리렌더링 될 때마다 재할당 but, ref 객체는 동일한 객체를 반환
            - 리렌더링 사이에 정보를 저장
        - state 변수는 변경될 때마다 리렌더링을 촉발
        - 정보가 공유되는 외부 변수와 달리 각각의 컴포넌트에 로컬로 저장
        
        ⇒ 화면에 표시되는 정보를 저장하는 데는 ref보다는 state를 사용하는 게 좋음

### react-hook-form & yup 🍠

ex. 회원가입

react-hook-form은  회원가입에 필요한 각각의 항목들을 state로 관리해주고 변화를 실시간으로 반영

yup를 통해 회원가입에 필요한 input 값을 관리할 schema를 만들어 줌