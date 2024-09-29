- div 태그로만 페이지를 구조화 하는 것이 좋은가? 🍠
    - 단순히 스타일링하기 위해 div태그를 사용한다고 가정하면, 검색 엔진에서 해당 웹 페이지의 내용을 이해하기 어려움
    - 시각 장애인을 포함한 장애인들에게 화면 낭독기를 통한 웹페이지의 내용(목록)을 이해하기 어려움

- 기타 태그 추가 정리해보기 🍠
    
    <aside>
    💡 `figure` : 그림, 도표, 사진, 코드 목록과 같은 태그를 지정 자체에 포함된 내용을 담당
    `figcaption` : `figure` 요소에 대한 작은 부수설명  담당
    `main` : 문서의 주요 콘텐츠 영역 
    `mark` : 중요 단어에 형광펜으로 긋는 것 처럼 표현되며 중요한 내용을 강조
    
    </aside>

- 그러면, **`inline-block`**은 어떠한 방식으로 동작할까요? 🍠
    - 요소가 블록 요소 박스를 생성하지만, 마치 하나의 인라인 박스처럼 주변 콘텐츠와 함께 플로 레이아웃의 흐름에 참여함.
    - 앞과 뒤의 개행이 새로 생기지 않음

- **`block`**, **`inline`**, **`inline-block`** 직접 html과 css를 활용해서 무엇이 다른지, **`VS Code Live Server Extension을 활용`**하여, 실습 한 이미지를 첨부하여 설명해주세요. 🍠
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/f5eee9f7-6998-4849-8ea8-9bc30458a8e6/image.png)
    
    최대한 긴 가로 길이를 차지
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/f53848ba-fa10-4f0a-a0b8-521bf9b23b10/image.png)
    
    필요한 만큼의 가로 길이만 차지
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/8b01a09a-f5e1-4d01-beac-8529d0a3e8bc/image.png)
    
    block 속성과 같이 가로 세로 길이를 가질 수 있음
    
    inline 속성과 같이 같은 줄에 있으려고 함