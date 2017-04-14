var token = 'Token ' + getCookie('SoobookToken');
$.ajax({
  url: 'https://soobook.devlim.net/api/user/logout/',
  type: 'POST',
  headers: {
    Authorization: token,
  }
})
.done(function(response) {
  console.log(response);
})
.fail(function(response) {
  console.log(response);
});

// name	            value                       type
// Authorization	Token <발급받은 토큰 key>	     string

// Response (응답)

// Success Response

// Code: 200
// Content :
// {
//   "detail": "Successfully logged out."
// }
// Error Response

// Code: 401
// Reason: 헤더에 Authorization: Token이 없는 경우
// Content:
// {
//   "detail": "Authentication credentials were not provided."
// }

// Code: 401
// Reason: 유효하지 않은 토큰 키를 입력하는 경우
// Content:
// {
//   "detail": "Invalid token."
// }