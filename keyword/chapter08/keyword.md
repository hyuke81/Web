- useMutation 🍠
    - useMutation이 무엇인가요?
        - React-Query를 이용해 서버에 변경(insert, update, delete) 작업 요청 시 사용
        
        ```jsx
        const deleteData = useMutation({
          mutationFn: (id) => axios.delete(`api/delete/${id}`)
        })
        
        //axios를 이용해 서버에 API를 요청
        ```
        
        - Mutate
            - useMutation을 이용해 작성한 내용들이 실제로 실행될 수 있도록 돕는 trigger 역할
            - useMutation을 정의해준 후, 이벤트 발생 시 사용
            
            ```jsx
            const { mutate } = () => deleteData()
            
            const deleteFn = () => {
            	deleteData.mutate(id)
            }
            ```
            
        
    - onMutate
        - useMutation 훅에서 설정할 수 있는 옵션
        - API 호출 전에 실행되는 함수
        - 최적화된 업데이트를 위해 현재 데이터 캐시를 업데이트
        - UI를 변경하는 등의 작업을 수행
        - 업데이트가 성공적으로 이루어지지 않았을 때 사용할 수 있는 rollback 메커니즘도 제공
    - onSuccess
        - 요청이 성공되었을 때 실행됨
        
        ```jsx
        onSuccess: (data: TData, variables: TVariables, context?: TContext) => Promise<unknown> | void
        ```
        
    - onError
        - 에러가 발생될 때 실행됨
        
        ```jsx
        onError: (err: TError, variables: TVariables, context?: TContext) => Promise<unknown> | void
        ```
        
    - onSettled
        - finally 구문처럼 요청이 성공하든 에러가 발생되든 상관없이 마지막에 실행
        
        ```jsx
        onSettled: (data: TData, error: TError, variables: TVariables, context?: TContext) => Promise<unknown> | void
        ```
        
    - invalidateQueries
        - useQuery에서 사용되는 queryKey의 유효성을 제거해주는 목적
            - 왜 유효성을 제거?
                - 서버로부터 다시 데이터를 조회해오기 위해서
                - 왜 사용?
                    - useQuery에는 staleTime과 cacheTime이라는 개념이 존재하는데, 정해진 시간이 도달하지 않으면 새로운 데이터가 적재되었더라도 useQuery는 변동 없이 동일한 데이터를 화면에 보여줌
                    - 사용자 입장에서는 데이터 생성이 제대로 되었는지에 대한 파악이 힘들기 때문에 혼란을 겪을 수 있음
        - 데이터를 저장할 때 invalidateQueries를 이용해 useQuery가 가지고 있던 queryKey의 유효성을 제거해주면 캐싱되어있는 데이터를 화면에 보여주지 않고 서버에 새롭게 데이터를 요청
            - 데이터가 새롭게 추가되었을 때 다시 서버에서 데이터를 가져오게 되면서 추가한 데이터까지 화면에서 확인할 수 있음
- 낙관적 업데이트 (Optimistic Update) 🍠
    - 낙관적 업데이트란?
        - 서버로 요청을 보내기 전에 UI를 업데이트하는 것
            - 데이터를 변경하려 할 때, **응답을 기다리기 전 미리 UI를 업데이트 시키는 것**
        - 사용자 경험을 개선하고, 서버에서 응답을 받을 때까지 기다리지 않고 사용자에게 빠른 피드백을 제공
    - 낙관적 업데이트를 `useMutation`을 활용하여 구현할 수 있는 방법?
        - 쿼리 객체의 `onMutate`옵션을 활용!
        
        ```jsx
        const queryClient = useQueryClient()
         
        useMutation({
          mutationFn: updateTodo,
          // When mutate is called:
          onMutate: async (newTodo) => {
            // Cancel any outgoing refetches
            // (so they don't overwrite our optimistic update)
            await queryClient.cancelQueries({ queryKey: ['todos'] })
         
            // Snapshot the previous value
            const previousTodos = queryClient.getQueryData(['todos'])
         
            // Optimistically update to the new value
            queryClient.setQueryData(['todos'], (old) => [...old, newTodo])
         
            // Return a context object with the snapshotted value
            return { previousTodos }
          },
          // If the mutation fails,
          // use the context returned from onMutate to roll back
          onError: (err, newTodo, context) => {
            queryClient.setQueryData(['todos'], context.previousTodos)
          },
          // Always refetch after error or success:
          onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] })
          },
        })
        ```
        
        1. onMutate 콜백 함수에서 UI를 업데이트
        2. setQueryData 함수를 사용하여 이전 데이터에서 업데이트
        3. onError 콜백 함수에서는 에러가 발생했을 때 이전 데이터로 롤백