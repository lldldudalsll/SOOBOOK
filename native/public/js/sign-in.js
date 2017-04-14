 $('#signup-api').click(function(){
    signup('front@test.com', '12345asdf', 'front-lim');
  })


// API 요청결과를 가져와서 출력하는 기능
  function signup(username, password, nickname) {
    $.ajax({
      url: 'https://soobook.devlim.net/api/user/signup/',
      type: 'POST',
      dataType: 'json',
      data: {
        username: username,
        password: password,
        nickname: nickname,
      }
    })
    .done(function(response) {
      console.log(response);
      var nickname = response.nickname
      $('.signup-api-result').append(' :' + nickname);
      console.log(nickname)
    })
    .fail(function(response) {
      console.log(response)
      var response = response.status
      $('.signup-api-result').append(' :' + response);
    });
  }
