# soobook

> A Vue.js project
구글 api를 이용한 개인책장 서비스.  

백엔드 스쿨, ios스쿨과의 협업으로 진행하였고 서버가 종료되어 영상으로 확인할 수 있습니다.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

##### 2017-04-01
- 기획

##### 2017-04-02
- 로그인, 회원가입 시도  
- 구글 api를 적용 책 검색 가능  

##### 2017-04-03
- 로그인, 회원가입 시도    
- sessionstorage에 id 저장
- 메인 페이지 뷰 구성  

##### 2017-04-04  
- 책 저장된 페이지 리스트뷰 변경가능하도록 구현  

##### 2017-04-05  
- 저장된 책을 여러 페이지에 나눠 나오게 구현 하고 싶음.  
- 참고 사이트
  - http://codepen.io/jnav/pen/VKZKLA  
  - https://www.youtube.com/watch?v=p_KAaE3Y0xA  

##### 2017-04-06  
- pagination 구현 중.  

##### 2017-04-07  
- pagination 구현. 하지만 서버 쪽에서 해준다고 하여 통신 쪽으로 봐야할 것 같음.

##### 2017-04-09  
- 디자인 수정  
  - 개인페이지에 3가지 버전의 리스트뷰 디자인 적용.  
- 제목과 리뷰 내용이 일정 글자 이상이면 "..."으로 바뀌게 수정함.  
- 반응형 시도.  

##### 2017-04-10  
- [team1](https://github.com/lldldudalsll/team1) 연결
- vue-cli 적용  

##### 2017-04-11  
- 도서 검색 api와 연결.  
- jQuery로 연결.  

##### 2017-04-12  
- vue cli로 옮기면서 작동하지 않던 글자 생략기능 추가.
  - 개인페이지의 경우 mounted에 함수를 넣어서 해결했지만 검색했을 경우는 적용되지 않음.  
  - 선생님과 트러블 슈팅으로 vue에서 filter를 이용하여 고침.  
  - 책 커버이미지와, 제목, 저자를 불러오는 방식도 vue에 맞게 변경  

##### 2017-04-13  
- Drag and Drop이 vue로 옮기면서 작동 x  
- html5 에서 지원하는 Drag and Drop적용.(같은 조원이 구현했던 코드도 참고)  
- 하지만 vue에서 Drag and Drop 함수를 찾지 못 함  

##### 2017-04-14  
- Drag and Drop 구현중.  
- plugin으로 해결하려 했으나 이동은 되는데 책을 검색하면 선택했던 책들이 바뀌는 현상.  

##### 2017-04-16   
- Drag and Drop 구현.  

##### 2017-04-17  
- 책 검색페이지
  - 토글 메뉴 모바일 버전 구현.  
  - 토글 메뉴 피씨 버전 구현.  
- 모바일을 생각해서 Drag and Drop 삭제.
- 책을 클릭했을 때 선택된 목록에 들어가게끔 구현하기로 함

##### 2017-04-18  
- 책 검색페이지에서 클릭시 선택된 목록에 추가 완료.   
- 선택된 목록에서 저장 버튼을 눌렀을 때 서버 통신 완료.  
- 선택된 목록에서 클릭 시에 대상을 제거하는 게 불가능.  

##### 2017-04-19  
- 책검색페이지에서 선택된 목록 중 클릭시 대상이 제거됨.  
  - addEventListener를 이용
- 책 검색영역에서 10개씩 잘라 여러페이지에 오지만 작동하지 않음.  

##### 2017-04-20  
- 책 검색페이지에 url 부분을 next로 설정해서 다음 목록을 불러와야하는데 불러오질 못 함.  
  - preflight 오류로 뜨는 데 아마도 http문제 인 듯 함.  
- 검색페이지에서는 검색결과가 10개씩 나뉘어 오는데 책이 저장된 페이지에서는 저장된 모든 책이 나옴.  
  - GET을 해오는 과정에 for문이 문제인 것 같음.  

##### 2017-04-21  
- 책 검색페이지 디자인 다시 조정  
- 검색페이지에서 페이지네이션이 안 된것이 혹시나 API에서 받은 url주소가 http와 https로 다르게 와서 문의후 서버에서 고쳐줬음. 페이지 네이션 성공(개인페이지에서 저장된 모든 책을 불러오는 부분도 서버측에 요청후 제대로 작동함.)  
- 개인페이지에서 책마다 잠금 버튼을 만들어 클릭시 삭제버튼이 나오게 구현  
- 삭제버튼을 클릭시 서버에 지워지는 DELETE통신 완료  
  - 바로 GET을 안 해와서 지워도 새로고침하지 않는 이상 페이지에 남아있음

##### 2017-04-24  
- 페이지네이션이 2페이지에서 안 넘어감.
  - 페이지 url을 변수에 저장하는 쪽이 문제가 있는듯 함

##### 2017-04-25  
- 페이지네이션 다음 페이지로 넘어가게 수정  
  - success에 data값을 다시 설정해줌으로써 주소를 바꿔줌.  
  - 같은 코드로 previous를 시도했지만 작동하지 않음.  
- 페이지네이션이 전체(My book)에 있어서 통신이 두번 부름.  
  - 갤러리뷰와 리스트뷰 컴포넌트 두 개를 v-if로 다시 합쳐야 할 것 같음.  

##### 2017-04-26  
- 부모와 통신으로 My book에서 버튼을 클릭시 리스트뷰에 알려주도록 연결
- 리스트뷰에 갤러리뷰를 합쳐서 v-if로 두가지 화면이 변하도록 설정
