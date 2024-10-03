1. SPA (Single Page Application)
- 정리
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/07c834e4-cadd-4d43-896b-8e1c2f63da8a/image.png)
    
    - 단일 페이지로 구성된 웹 어플리케이션
    - 렌더링의 역할을 서버에게 넘기지 않고 브라우저에서 처리하는 방식
    - 웹 어플리케이션에 필요한 모든 정적 리소스를 최초에 한 번 다운로드 하고, 새로운 페이지 요청이 있을 때마다 필요한 데이터만을 전달받아 페이지를 갱신
    - 장점
        - 새로운 페이지 요청 시 전체를 렌더링하지 않기 때문에 전체적인 트래픽 감소와 렌더링에서 좋은 효율을 가짐
        - 빠른 화면 이동이 가능하고 앱처럼 자연스러운 사용자 경험을 제공하여 모바일 환경에서 큰 도움이 됨
    - 단점
        - 모든 필요한 정적 리소스를 한번에 다운로드하기 때문에 초기 구동 속도가 느린편이며, SPA 구조 상 데이터 처리를 클라이언트에서 하는 경우가 많은데, 해당 로직들은 JS를 통해 구현되어 코드가 외부에 노출되는 보안적인 문제가 발생할 수 있음
1. User Interface Library 
- 정리
    - 컴포넌트를 직접 만들 리소스가 없다면, 동일한 디자인, 기능 및 접근성 규칙을 공유하는 사전에 구축된 많은 컴포넌트에 접근할 수 있는 UI 라이브러리 사용
        - [Material UI](https://mui.com/material-ui/)
        - [Mantine UI](https://mantine.dev/)
        - [Chakra UI](https://chakra-ui.com/)
1. Functional Component (함수형 컴포넌트)
- 정리
    - function으로 정의하고 return문에 jsx 코드 반환
    1. 코드의 가독성, this 바인딩 신경 x
    2. 로직 재활용성
    3. 값 고정
    4. 성능과 최적화 문제 
    
    함수형 컴포넌트와 클래스 컴포넌트의 차이 
    
    ```jsx
    // 함수형
    export default function FunctionHello() {
    
        // state 등등 hooks
      const [index, setIndex] = useState(0);
    
        // state 관리할 함수
      function handleClick() {
         setIndex(index + 1);
      }
    
      return (<tag prop1={index}>컴포넌트들</tag>);
    }
    ```
    
    ```jsx
    // 클래스형
    import React, { Component } from 'react';
    
    class ClassHello extends Component {
      constructor(props) {
        super(props);
                // state 지정
                this.state = { counter: 0 } 
        };
        this.clickHandler = () => {
                // state 변경
          this.setState({
                    counter: this.state.counter - 1                
          });
      };
    
      render() {
        const { props들 } = this.props;
        return (<tag  prop1={props들에서 꺼냄}>컴포넌트들</tag>);
      };
    };
    export default ClassHello;
    ```
    
1. Virtual DOM (가상 DOM)
- 정리
    - 실제 DOM을 조작하는 방식이 아닌, 실제 DOM을 모방한 가상의 DOM을 구성하여 원래의 DOM과 비교하여 달라진 부분을 리렌더링 하는 방식으로 작동
    - 쉽게 말해, 실제 DOM과 같은 내용을 담고 있는 복사본
        - 실제 DOM이 아닌 JS 객체형태로 메모리 안에 저장되어 있음
    - 사용하는 이유
        - 깜빡거림 없이 부드러운 UX를 사용자에게 제공하고자 변경사항만 빠르게 파악하고 리렌더링 하기 위해 DOM을 만들어 비교하는 방식
        
        ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/54d0cf2f-49d4-4bb5-aa37-ce2004541142/image.png)
        
        ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/c272297e-642e-4768-9c1a-6dbbc854cc70/image.png)
        
1. 동시성 렌더링
- 정리
    - 비동지 작업을 효율적으로 처리하기 위한 방법
        - 여러 작업 동시에 처리할 수 있게 하여 성능을 향상 시킴
    - 어플리케이션의 반응성과 성능을 대폭 향상시키는 기능
    - 어플리케이션의 UI 렌더링을 중단하거나 우선순위를 변경할 수 있게 해주어 사용자 인터랙션과 애니메이션을 더욱 부드럽게 만듦
    
    ```jsx
    import { createRoot } from 'react-dom/client';
     
    const container = document.getElementById('app');
    const root = createRoot(container); // 동시성 모드 활성화
     
    root.render(<App />);
    ```


### 1. React에서 JSX를 반환할 때 꼭 하나의 태그만 반환해야한다.

**`⭕️ 가능한 경우`**

```jsx
function App() {
  return (
     <strong>상명대학교</strong>
  )
}

export default App
```

**`❌ 불가능한 경우`**

```jsx
import './App.css'

function App() {
  return (
     <strong>상명대학교</strong>
     <p>매튜/김용민</p>
  )
}

export default App

```

<aside>
💡

여러개를 반환하고 싶은 경우는 어떻게 해야 할까요?
코드와, 이유를 간략하게 작성해주세요.

</aside>

- 답변 🍠
    
    ```jsx
    import './App.css'
    
    function App() {
      return (
    	  <>
    	     <strong>상명대학교</strong>
    	     <p>매튜/김용민</p>
    	  </>
      )
    }
    
    export default App
    
    ```
    
    <aside>
    💡
    
    이유:  여러개를 반환하고 싶은 경우, 하나의 태그로 감싸 그룹화 해야 한다. 
    
    </aside>

- 구조분해 할당 활용 **`List.jsx`**
    
    ```jsx
    // props를 호출했을 때 
    const List = ({tech}) => {
       return (
         <li>
           {tech}
         </li>
       );
     }
     
     export default List
     
    ```

- 얕은 복사 🍠
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/8c4ce569-3490-4134-97d8-016a52a7f8e2/image.png)
    
    - 객체 or 배열 내부에 있는 참조형 데이터는 그대로 복사 x
    - 원본과 동일한 참조 유지  → 데이터 변경시 원본 데이터에도 영향 미칠 수 있음
    - 즉, 데이터 자체를 복사한 것이 아닌 해당 데이터의 참조 값을 전달하여 하나의 데이터를 공유하는 것
    - ****배열의 복사 : Array.slice(), Array.concat(), Array.from()
        - 기존의 배열에서 추출하여 새로운 배열을 리턴
        - 2차원 이상부터는 얕은 복사만 가능
    - Object.assign()
        - Object.assign(생성할 객체, 복사할 객체)
        - 객체 자체는 다른 객체지만, 객체 안의 값은 복사한 객체의 안의 참조값을 복사
- 깊은 복사 🍠
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/b8661aee-b268-4ac3-bb45-1be8762c1e32/image.png)
    
    - 원본이나 복사본 변경시 다른 객체가 변경되지 않음을 보장
    - 원본과의 참조가 완전 끊어진 객체
    - 1차원 배열 + 객체 → 깊은 복사 허용