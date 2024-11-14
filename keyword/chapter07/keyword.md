- Tanstack-Query 🍠
    - Tanstack-Query 초기 세팅 방법
        
        ```jsx
        $ npm i @tanstack/react-query
        ```
        
        ```jsx
        import {
          useQuery,
          useMutation,
          useQueryClient,
          QueryClient,
          QueryClientProvider,
        } from '@tanstack/react-query'
        
        ```
        
        QueryClientProvider 컴포넌트를 최상단에서 감싸주고 QueryClient 인스턴스를 client 속성에 넣어줌.
        
    - Query-DevTools?
        
        ```jsx
        npm i @tanstack/react-query-devtools
        ```
        
        ```jsx
        // App.tsx
        
        import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
        // ...
        
        const queryClient = new QueryClient();
        
        function App() {
          return (
            // provide React Query client to App
            <QueryClientProvider client={queryClient}>
              <div className="App">
                <h1>Blog Posts</h1>
                <Posts />
              </div>
              <ReactQueryDevtools />
            </QueryClientProvider>
          );
        }
        ```
        
        - 리액트 쿼리에서 기본 제공하며, 다양한 기능을 제공
        - key에 기반하여 쿼리를 보여줌
            - 쿼리 상태
            - 마지막 업데이트 타임스탬프
        - 반환된 데이터 보여줌
        - 쿼리 탐색기 제공
    - useQuery
        
        ```jsx
        import { useQuery } from "react-query";
        // 주로 사용되는 3가지 return 값 외에도 더 많은 return 값들이 있다. 
        const { data, isLoading, error } = useQuery(queryKey, queryFn, options)
        ```
        
        ### QueryKey
        
        - `QueryKey` 를 기반으로 데이터 캐싱을 관리
        - 문자열 또는 배열로 지정
            
            ```tsx
            // 문자열
            useQuery('todos', ...)
            // 배열
            useQuery(['todos'], ...)
            ```
            
        - 쿼리가 변수에 의존하는 경우에는 QueryKey 에도 해당 변수를 추가해야 함
            
            ```tsx
            const { data, isLoading, error } = useQuery(['todos', id], () => axios.get(`http://.../${id}`));
            ```
            
        
        ### Query Functions
        
        - useQuery 의 두번째 인자에는 promise 를 반환하는 함수를 넣음
        - 거의 첫번째나 두번째 방식으로 코드를 작성
            
            ```tsx
             useQuery('todos', fetchTodos);
             useQuery(['todos', todoId], () => fetchTodoById(todoId));
             useQuery(['todos', todoId], async () => {
               const data = await fetchTodoById(todoId);
               return data
             });
             useQuery(['todos', todoId], ({ queryKey }) => fetchTodoById(queryKey[1]));
            ```
            
    - useInfiniteQuery
        
        파라미터 값만 변경하여 동일한 useQuery를 무한정 호출할 때 사용
        
        ```jsx
        const res = useInfiniteQuery(queryKey, queryFn);
        ```
        
        - pageParam
            - useInfiniteQuery가 현재 어떤 페이지에 있는지를 확인할 수 있는 파라미터 값
        - getNextPageParam
            - 다음 api를 요청할 때 사용될 pageParam값
        - fetchNextPage
            - 다음 페이지의 데이터를 호출할 때 사용
        - getPreviousPageParam
            - 이전 api를 요청할 때 사용될 pageParam값
        - fetchPreviousPage
            - 이전 페이지의 데이터를 호출할 때 사용
    - queryKey
        
        useQuery와 useMutation을 사용하면 해당 hooks의 `queryKey`를 지정
        
        - React Query에서는 query keys를 기반으로 해서 쿼리 캐싱을 관리
        - query key는 `문자열`, `문자열의 배열` 혹은 `중첩된 객체(nested object)`로 지정 가능
        - query data에 고유하고 직렬화하여 사용
        
        규칙
        
        - querykeys는 반드시 [배열]이어야 함
            - 추가적인 정보가 필요하다면, [배열]안에 작성
        - 배열로 작성되는 queryKey의 값은 string key를 먼저 작성
        - string key는 여러 개를 지정할 수 있지만 key가 연관되는 data는 고유함
        - query에 필요한 추가 정보는 string key 뒤에 작성
- Pagination 🍠
    - Pagination은 무엇인가요?
        - 많은 데이터를 부분적으로 불러오는 기술
        - 페이지 기반 페이지네이션(Page Based Pagination)
            - 구현이 쉽고 어디를 페이지 네이션하는지 명확한 네비게이션 존재
            - 데이터가 추가되거나 삭제될 경우 데이터가 누락되거나 중복될 가능성
        - 커서 기반 페이지네이션(Cursor Based Pagination)
            - 가장 최근에 가져온 데이터를 기준으로 다음 데이터를 가져오는 방식
            - 요청을 보낼 때, 가장 마지막 데이터의 id와 함께 몇 개의 데이터를 가져올 지 개수를 명시
            - 스크롤 형태의 리스트에서 자주 사용
    - Pagination을 어떠한 방식으로 구현할 수 있을까요?
        1. 클라이언트에서 **전체 데이터 한번에 받아서** 페이지 누를때마다 다른 데이터 보여주기
            1. useEffect로 한번에 모든 데이터 다 받아오기
            2. 페이지를 누를때마다, 저장된 데이터를 10개씩(`postPerPage`) 보여줌
        2. 클라이언트에서 page를 query로 보내면 서버에서 **그에 맞는 데이터 보내주기**
            1. DB에서 가져오는 총 데이터의 개수를 알아야 페이지네이션에 마지막 페이지 숫자를 설정
            2. 한 페이지에 몇개의 데이터를 보여줄지 알아야 함
            3. 현재 몇 페이지인지 알아야 함
    - Pagination의 장점과 단점에 대해 정리해주세요.
        - 특정 항목 검색 쉬움
        - 페이지 북마크
        - 사용자의 추가적인 액션이 필요함
- Infinite Scroll 🍠
    - Intersection Observer는 무엇인가요?
        - 브라우저 뷰포트(Viewport)와 원하는 요소(Element)의 교차점을 관찰하며, 요소가 뷰포트에 포함되는지 아닌지 구별하는 기능을 제공
            - 특정 요소가 사용자 화면에 보이는지 안보이는지 판단
        - 비동기적으로 실행되기 때문에, 메인 스레드에 영향을 주지 않으면서 요소들의 변경사항들을 관찰할 수 있음
        
    - Infinite Scroll은 무엇일까요?
        
        사용자가 페이지 가장 아래에 도달할 때 데이터나 콘텐츠가 계속 로드가 되게 하는 방식
        
        ```jsx
        npm i react-infinite-scroller
        ```
        
        ```jsx
        import InfiniteScroll from 'react-infinite-scroller';
        ```
        
    - Inifinite Scroll은 어떻게 구현할까요?
        
        ```jsx
        const observer = new IntersectionObserver(callback, options);
        ```
        
        - callback
            - 관찰할 대상(target)이 등록되거나 threshold 만큼 observer가 뷰포트(root)에 교차할 때 콜백이 실행
            
            ```jsx
            const io = new IntersectionObserver((entries, observer) => {}, options)
            
            io.observe(element) // 관찰할 target 등록
            ```
            
            - `IntersectionObserverEntry`인터페이스는 특정 전환 순간에 대상 요소와 루트 컨테이너 간의 교차를 설명
                - `boundingClientRect`: target의 경계를 사각형으로 반환
                - `intersectionRatio`: `intersectionRect` 와 `boundingClientRect`가 교차한 비율 (target이 root에 교차한 비율)
                - `intersectionRect`: target과 교차한 부분의 영역 정보
                - `isIntersecting`: target의 교차 여부(Boolean)
                - `rootBounds`: root(options에 지정한 뷰포트) 정보
                - `target`: 관찰 대상 요소
                - `time`: 언제 교차가 발생했는지
                
                ```jsx
                const io = new IntersectionObserver((entries, observer) => {
                  entries.forEach(entry => {
                    console.log(entry) // IntersectionObserverEntry
                  })
                }, options)
                
                io.observe(element)
                ```
                
        - options
            
            ```jsx
            let options = {
              root: document.querySelector('#scrollArea'),
              rootMargin: '0px',
              threshold: 1.0
            }
            ```
            
            - root
                - 대상 객체의 가시성을 확인할 때 사용되는 뷰포트 요소(대상 객체의 조상 요소)
                - 기본값은 `null` (null일 경우 브라우저의 뷰포트가 기본 사용)
            - rootMargin
                - 바깥 여백(Margin)을 이용해 Root 범위를 확장하거나 축소할 수 있음
                - 사용 방법은 CSS와 동일 (단위 입력 필수 `px` `%`)
            - threshold
                - observer의 콜백이 실행될 대상 요소의 가시성 퍼센티지를 나타내는 단일 숫자 혹은 숫자 배열
                - `0 ~ 1.0` 사이의 값을 가진다
                    - `0` : 요소가 1픽셀이라도 보이자 마자 콜백이 실행
                    - `0.5` : 50% 만큼 요소가 보여졌을 때를 콜백이 실행
                    - `[0, 0.25, 0.5, 0.75, 1]` : 배열의 요소만큼 보여졌을 때마다 콜백이 실행
    - Infinite Scroll의 장점과 단점에 대해 정리해주세요.
        - 사용자 참여 증가
        - 사용자 추가 액션 불필요
        - 모바일 기기 적합
        - but,  페이지 성능 느려짐
        - 특정 위치로 이동하기 어려움
        - 컨텐츠 수량이 얼마나 되는지 알 수 없음