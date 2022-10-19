# 원티드 프리온보딩 프론트엔드 코스 선발과제

[배포링크](https://preonboarding-seungyeon.netlify.app/)


## Tech
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/React Router-CA4245?style=flat-square&logo=React Router&logoColor=white"/> <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=flat-square&logo=Bootstrap&logoColor=white"/> <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white"/> <img src="https://img.shields.io/badge/styled components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>

## 구현사항
### 로그인/회원가입
* 이메일과 비밀번호의 유효성 검사기능
* 로그인 API를 호출하고, 올바른 응답을 받았을 때 /todo 경로로 이동
* 응답받은 JWT는 로컬 스토리지에 저장
* 로그인 여부에 따른 리다이렉트 처리
* 로그아웃 기능

### 투두리스트
* 투두 리스트의 내용과 완료 여부가 표시
* 추가 버튼을 누르면 입력창의 내용이 새로운 투두 리스트로 추가
* 투두 리스트의 수정, 삭제 기능
