- border vs outline의 차이점 🍠
    
    **outline**
    
    - width, height 속성에 영향을 주지 않고 현재 위치에서 테두리만 생기기 때문에 레이아웃에 영향을 주지 않음
    - 테두리 영역을 지정하여 선을 줄 수 없음
    
    **border**
    
    - width, height가 늘어나 레이아웃에 영향을 줌
    - 위, 아래, 왼쪽, 오른쪽 각각에 선을 줄 수 있음
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/45ddb429-cef9-4fff-8ffd-b0bd8d9a7d8a/image.png)

    ![스크린샷 2024-07-18 오후 6.57.43.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/fd7e2bc8-0597-4eff-a26b-0ffbffe17e43/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-07-18_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.57.43.png)
    ```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .box {
      width: 100px;
      height: 100px;
      background-color: purple;
      color: white;
      box-sizing: border-box;
      position: relative;
      top: 107px;
      left: 50px;
      right: 50px;
    }
    .text {
      position: relative;
      left:50px;
      bottom: 50px;
    }
  </style>
</head>

<body>
  <div class="box">BOX</div>
  <h1 class="text">고구마 상자</h1>
</body>

</html>
```

- **`position: absolute`**를 활용하여 본인의 힘으로, 아래와 같은 이미지로 BOX2를 이동시켜보세요! 🍠
    
    ![스크린샷 2024-07-18 오후 7.13.52.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/5a810066-8c42-4e8a-a2ac-fe8757085432/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-07-18_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_7.13.52.png)
    
    ### 코드는 아래에 첨부해주세요!
    
    ```html
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
        /** 전체 선택자 기본적으로 설정된 마진을 없앰. */
        * {
          margin: 0;
          box-sizing: border-box;
        }
    
        .box1 {
          width: 500px;
          height: 500px;
          background-color: purple;
          color: white;
          position: relative;
        }
    
        .box2 {
          width: 200px;
          height: 200px;
          background-color: yellow;
          position: absolute;
          bottom: 480px;
        }
      </style>
    </head>
    
    <body>
      <div class="box1">BOX1</div>
      <h1 class="box2">BOX2</h1>
    </body>
    
    </html>
    ```

    ### 키워드 정리 🍠

- text-align
    
    텍스트의 정렬 방향을 의미
    
    - `left` , `right` , `center` , `justly` → 양쪽 정렬
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/f6ab4b1d-4c8b-409e-af91-7acaf418cc08/image.png)
    
- margin
    
    요소의 외부 여백을 지정
    
    - `auto` : 브라우저가 여백을 계산 → 요소의 가운데 정렬
    - `margin-top`
    - `margin-bottom`
    - `margin-left`
    - `margint-right`
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/a7b14475-a67b-4faa-9021-11667ec136ad/image.png)
    
- flex
    - 부모 클래스에 flex 속성을 줘야 나머지 flex 속성 사용 가능
    - flex 속성 안에 또 flex 속성 사용 가능
    - `display: flex`로 설정
    - `flex-direction` 정렬의 방향을 결정
    - `flex-wrap` 공간이 좁아질때 줄바뀜여부
- translate
    - 부모요소에 `position : relative`
    - 가운데 정렬하고 싶은 요소에 `position: absolute` 속성 → left, top 50%씩 이동
    - `transform: translate(-50%, -50%)`  position 이동시 요소의 width, height 값 포함해서 이동
    
    ```css
    position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    ```
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/08f814ab-692b-4fa2-833c-2767a06a101c/image.png)
    
- grid
    - 웹페이지를 위한 이차원 레이아웃 시스템
    - 복잡한 에이아웃을 직관적으로 구축할 수 있음
    - `display: grid;` 로 시작
    - 그리드 컨테이너 → 그리드의 전체 영역
    - 그리드 아이템 → 그리드 컨테이너의 자식 요소
    - 그리드 셀 →  그리드의 한 칸을 나타냄
    - fr 단위를 사용하여 그리드 행과 열을 가변적으로 조정할 수 있음
        - 전체 공간이 아닌 이용 가능한 공간을 분배
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/32cfb54c-279c-4676-a0e6-a8c5d6826091/image.png)
    

### 위의 키워드를 각각 활용해서 가운데 정렬을 해주세요! 🍠

<aside>
💡 html 요소는 여러분들이 직접 만드셔서, 가운데 정렬을 한 영상과 코드만 남겨주시면 됩니다.
향후 학습에 있어서, 매우 중요한 부분이니, 많은 실습 부탁드립니다!

</aside>

- text-align
    
    ```html
    <!DOCTYPE html>
    <head>
        <style>
            .text {
                text: center; 
            }
            .box {
                padding: 30px;
                display: inline-block;
                background-color: #ee7437;
                color: white;
            }
        </style>
    </head>
    <body>
        <div class="text">
            <div class="box">A</div>
        </div>
    </body>
    </html>
    
    ```
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/b3858c35-085b-4d21-acfa-3b66cee98cd7/image.png)
    
- margin
    
    ```html
    <!DOCTYPE html>
    <head>
        <style>
            .margin {
                width: 10px;
                background-color: #111111;
                color: white;
                padding: 10px;
                margin: auto; 
            }
        </style>
    </head>
    <body>
        <div class="margin">A</div>
    </body>
    </html>
    
    ```
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/a7caba76-6cc7-4b20-9104-bd5bb6f3a79c/image.png)
    
- flex
    
    ```
    <!DOCTYPE html>
    <head>
        <style>
            .flex {
                background-color: antiquewhite;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100PX;
            }
    
            .box {
                background-color: #111111;
                color: white;
                padding: 20px;
            }
        </style>
    </head>
    <body>
        <div class="flex">
            <div class="box">A</div>
        </div>
    </body>
    </html>
    
    ```
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/ba6cc8b9-6578-4c1c-9bc1-7f08389d7598/image.png)
    
- translate
    
    ```
    <!DOCTYPE html>
    <head>
        <style>
            body {
                height: 200px;
                background-color: antiquewhite;
            }
            .translate {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%); 
                background-color: #111111;
                color: white;
                padding: 20px;
            }
    
            
        </style>
    </head>
    <body>
        <div class="translate">A</div>
    </body>
    </html>
    
    ```
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/0561b3f9-d748-49b7-a80f-27a04f8593aa/image.png)
    
- grid
    
    ```
    <!DOCTYPE html>
    <head>
        <style>
            .grid{
                display: grid;
                place-items: center;
                height: 400px;
                background-color: #f0c1c1;
            }
    
            .box {
                background-color: #111111;
                color: white;
                padding: 20px;
            }
        </style>
    </head>
    <body>
        <div class="grid">
            <div class="box">A</div>
            <div class="box">B</div>
            <div class="box">C</div>
        </div>
    </body>
    </html>
    
    ```
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/5699f06b-312f-4e93-b07c-b5fb34cdbeab/image.png)
    
- 반응형 background 🍠
    - background-image
        - 배경 이미지를 설정하며, 이미지 경호 지정 방식으로 사용
        - `background-image: url("이미지 경로")`
        - 삽입된 이미지의 크기는 컨테이너에 맞춰 늘어나거나 줄어들지 않고 그대로 표시됨
            - 만약, 이미지보다 컨테이너가 더 크다면 이미지는 반복되어 표시되게 됨
        
    - background-repeat
        - `background-image` 컨테이너보다 작은 이미지를 적용하며 이미지 반복되는데 이때, 반복 여부를 지정할 수 있음
    - background-position
        - 이미지의 좌표를 수정할 수 있음
            - 일반적으로 왼쪽 위부터 이미지를 출력함
        - margin과 padding 속성에서 지정했던 것과 비슷하게 x, y 좌표 지정
            - left, top, center, bottom, right등의 상수 사용 가능
    - background-size
        - 배경이미지 크기 조절
            - `auto` - 원래의 기본값
            - `contain` - 지정 요소에 배경 이미지 다 들어오도록 이미지 확대/축소
            - `cover` - 지정한 요소를 다 덮도록 배경이미지 확대/축소
    - 축약형
        - 백그라운드 배경색 + 이미지 경로 url + 백그라운드 위치(가로, 세로) +  / + 사이즈 + 반복여부 + 스크롤 효과
            - 백그라운드 사이즈는 꼭 ‘/’ 을 써주고 %, px, cover, contain 중 하나 이용
        
        ```css
        .wrap {background:#ffffff url("image/photo.jpg") center/20% no-repeat fixed}
        ```

        - translate
    - 엘리먼트를 현재 위치에서 지정된 값만큼 이동시키는 역할을 함
    - x,y 좌표 공간에서 왼쪽 위가 (0,0)
    
    ```html
    <!DOCTYPE html>
    <head>
        <style>
            .box {
                width: 50px;
                height: 50px;
                background-color: blue;
                margin: 50px;
            }
    
            .translate {
                transform: translate(50px, 50px);
                background-color: green;
            }
        </style>
    </head>
    <body>
        <div class="box">A</div>
        <div class="box translate">A`</div>
    </body>
    </html>
    ```
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/4ee9ca6f-52a0-40fc-9339-e7bb1a3f5b24/image.png)
    
- scale
    - x축으로 x 만큼, y축으로 y만큼, 요소를 축소 혹은 확대
    
    ```html
    <!DOCTYPE html>
    <head>
        <style>
            .box {
                width: 50px;
                height: 50px;
                background-color: blue;
                margin: 50px;
            }
    
            .scale {
                transform: scale(0.5, 1); 
                background-color: green;
            }
        </style>
    </head>
    <body>
        <div class="box">A</div>
        <div class="box scale">A`</div>
    </body>
    </html>
    
    ```
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/52ecc220-a800-40f4-99d0-b51e0643f2b2/image.png)
    
- rotate
    - 요소를 n만큼 회전시킴
    - 양수 - 시계방향, 음수 - 반시계 방향
    
    ```html
    <!DOCTYPE html>
    <head>
        <style>
            .box {
                width: 50px;
                height: 50px;
                background-color: blue;
                margin: 50px;
            }
    
            .rotate {
                transform: rotate(45deg); 
                background-color: green;
            }
        </style>
    </head>
    <body>
        <div class="box">A</div>
        <div class="box rotate">A`</div>
    </body>
    </html>
    
    ```
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/a2c39509-ef8f-4c59-b458-ed331663bd75/image.png)
    
- skew
    - x축으로 x 만큼, y축으로 y만큼, 요소를 기울임
    - 중첩 적용 가능
        - `transform: skew(30deg, 10deg) rotate(45deg);`
    
    ```html
    <!DOCTYPE html>
    <head>
        <style>
            .box {
                width: 50px;
                height: 50px;
                background-color: blue;
                margin: 50px;
            }
    
            .skew {
                transform: skew(15deg, 1deg); 
                background-color: green;
            }
        </style>
    </head>
    <body>
        <div class="box">A</div>
        <div class="box skew">A`</div>
    </body>
    </html>
    ```
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/0f91deea-7b53-448e-902f-33dcc2ce59eb/image.png)
    
- matrix
    - `transform: matrix(1, 0, 0, 1, 0, 0)` or 행렬로 표현
    - transform 함수들보다 간결하게 사용 가능함
    1. js를 이용하여 item에 transform 요소를 적용하기 편리
    2. 적용된 transform 값 추출하기 좋음
    3. transform matrix 이용한 3d 구현 편리 
    
    ```
    <!DOCTYPE html>
    <head>
        <style>
            .box {
                width: 50px;
                height: 50px;
                background-color: blue;
                margin: 50px;
            }
    
            .matrix {
                transform: matrix(3, 0, 0.5, 1, 20, 0.5);
                background-color: green;
            }
        </style>
    </head>
    <body>
        <div class="box">A</div>
        <div class="box matrix">A`</div>
    </body>
    </html>
    
    ```
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/61156e6b-ea1d-40c3-b859-5a6e17cf599a/image.png)

    - transition-property
    - 트랜지션 이벤트를 적용할 css 속성을 지정함
    - `none`, `all`, `margin`, `width`, `initial`,`inherit`
    
    ```
    <!DOCTYPE html>
    <head>
        <style>
            .box {
                width: 50px;
                height: 50px;
                transition-property: background-color;
                background-color: black;
                color: white;
            }
    
            .box:hover {
                background-color: green;
            }
        </style>
    </head>
    <body>
        <div class="box">A</div>
    </body>
    </html>
    ```
    
    [● test.html - e비즈니스 - Visual Studio Code 2024-09-24 16-34-50.mp4](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/59da7df1-a1e8-4450-ae3c-98683f95507d/_test.html_-_e%EB%B9%84%EC%A6%88%EB%8B%88%EC%8A%A4_-_Visual_Studio_Code_2024-09-24_16-34-50.mp4)
    
- transition-duration
    - 트랜지션 이벤트 실행할 시간 지정
    - 기본값은 0초
    
    ```
    <!DOCTYPE html>
    <head>
        <style>
            .box {
                width: 200px;
                height: 200px;
                transition-duration: 2s;
                background-color: black;
                color: white;
            }
    
            .box:hover {
                background-color: green;
            }
        </style>
    </head>
    <body>
        <div class="box">A</div>
    </body>
    </html>
    ```
    
    [test.html - e비즈니스 - Visual Studio Code 2024-09-24 16-49-41.mp4](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/1212b4ec-1b87-4d8c-8475-88a09d33aa63/test.html_-_e%EB%B9%84%EC%A6%88%EB%8B%88%EC%8A%A4_-_Visual_Studio_Code_2024-09-24_16-49-41.mp4)
    
- transition-timingfunction
    - 트랜지션 이벤트의 진행 속도를 지정
    
    ```
    <!DOCTYPE html>
    <head>
        <style>
            .box {
                width: 200px;
                height: 200px;
                transition: background-color 5s;
                transition-timing-function: ease-out;
                background-color: black;
                color: white;
            }
    
            .box:hover {
                background-color: green;
            }
        </style>
    </head>
    <body>
        <div class="box">A</div>
    </body>
    </html>
    ```
    
    [test.html - e비즈니스 - Visual Studio Code 2024-09-24 17-05-15.mp4](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/1e2f037a-7c18-4183-b180-00f6aa1e5235/test.html_-_e%EB%B9%84%EC%A6%88%EB%8B%88%EC%8A%A4_-_Visual_Studio_Code_2024-09-24_17-05-15.mp4)
    
- transition-delay
    - 트랜지션 이벤트를 바로 실행시키지 않고 지연시키고자 하는 경우
    - `transition-duration`과 동일한 값
    
    ```
    <!DOCTYPE html>
    <head>
        <style>
            .box {
                width: 200px;
                height: 200px;
                transition: background-color 1s;
                transition-delay: 2s;
                background-color: black;
                color: white;
            }
    
            .box:hover {
                background-color: green;
            }
        </style>
    </head>
    <body>
        <div class="box">A</div>
    </body>
    </html>
    ```
    
    [● test.html - e비즈니스 - Visual Studio Code 2024-09-24 17-09-08.mp4](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/de85dca1-3291-4999-9356-f853a1f36786/_test.html_-_e%EB%B9%84%EC%A6%88%EB%8B%88%EC%8A%A4_-_Visual_Studio_Code_2024-09-24_17-09-08.mp4)
    
- transition-behavior
    - 애니메이션 동작이 개별적인 속성에 대한 전환을 시작할지 여부를 지정함
    - `allow-discrete` : 개별 속성의 요소에서 전환이 발생함

    - 코드 첨부 🍠
    
    ```html
    <!DOCTYPE html>
    <head>
        <style>
            .box {
                width: 100px;
                height: 100px;
                transition: background-color 1s ease-in-out;
                background-color: pink;
                transform: rotate(45deg);
                margin: 100px auto;
            }
    
            .box:hover {
                background-color: purple;
            }
        </style>
    </head>
    <body>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
    </body>
    </html>
    
    ```

    - 실행 영상 첨부 🍠
    
    [test.html - e비즈니스 - Visual Studio Code 2024-09-24 22-09-29.mp4](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/0e917105-6f93-41a0-841a-09a1e1534de1/test.html_-_e%EB%B9%84%EC%A6%88%EB%8B%88%EC%8A%A4_-_Visual_Studio_Code_2024-09-24_22-09-29.mp4)

    - animation-name
    
    애니메이션의 중간 상태를 지정하기 위한 이름을 정의
    
- animation-duration
    
    한 싸이클의 애니메이션이 얼마에 걸쳐 일어날지 지정
    
- animation-delay
    
    요소가 로드되고 언제 애니메이션이 시작될지 지정
    
- animation-direction
    
    애니메이션이 종료되고 다시 처음부터 시작할지 역방향으로 진행할지 지정
    
- animation-iteration-count
    
    애니메이션이 몇번 반복될지 지정
    
- animation-play-state
    
    애니메이션을 멈추거나 다시 시작할 수 있음 
    
- animation-timing-function
    
    중간 상태들의 전환을 어떤 시간간격으로 진행할지 지정
    
- animation-fill-mode
    
    애니메이션이 시작되기 전이나 끝나고 난 후 어떤 값이 적용될지 지정 
    
- @keyframes
    
    애니메이션을 재생할 각 프레임의 스타일을 정의 
    
    from - to , 0% - 100% 속성에 설정한 스타일로 점차 바뀌면서 애니메이션 재생 
    
- 축약형
    
    `animation: animation-name animation-duration animation-delay animation-iteration-count animation-timing-function animation-direction fill-mode play-state;`
    
     이름 -> 실행속도 -> 지연시간 -> 반복횟수 -> 애니메이션 속도 조절/그래프 ->  반복방향설정 -> 끝난후위치 -> 실행or정지

     - 코드 첨부 🍠
    
    ```html
    <!DOCTYPE html>
    <head>
        <style>
            @keyframes ball {
                from {
                    top:0px;
                }
                80% {
                    width: 100px;
                }
                to {
                    top:500px;
                    width:100px;
                    height:100px
                } 
                }
    
                .circle{
                position:relative;
                width:100px;
                height:100px;
                border-radius:50%;
                background: purple;
                animation:ball 1.5s ease-in Infinite Alternate;
                }
        </style>
    </head>
    <body>
        <div class="circle"></div>
    </body>
    </html>
    
    ```
    
- 실행 영상 첨부 🍠
    
    [● test.html - e비즈니스 - Visual Studio Code 2024-09-24 22-32-12.mp4](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/c47ea4e3-f7e6-4ec4-a693-2b603c7f9bd7/_test.html_-_e%EB%B9%84%EC%A6%88%EB%8B%88%EC%8A%A4_-_Visual_Studio_Code_2024-09-24_22-32-12.mp4)