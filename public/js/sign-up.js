// input value값을 user_data 객체로 저장
$('.sign-up-btn').click(function(){
    var new_id = document.querySelector('.box__input-id').value;
    var new_pw = document.querySelector('.box__input-pw').value;
    var new_nickname = document.querySelector('.box__input-nickname').value;
    var user_data = {
        username: new_id,
        password: new_pw,
				nickname: new_nickname,
    };
    // console.log(user_input);
    requestServer(user_data);
});

// 저장된 객체값 받아오기
function requestServer(user_data){
	// jQuery ajax를 이용하여 SOOBOOK API 가져오기
	$.ajax({
	  url: 'https://soobook.devlim.net/api/user/signup/',
	  type: 'POST',
	  dataType: 'json',
	  data: user_data
	})
	.done(function(response) {
	  console.log(response);
	})
	.fail(function(response) {
	  console.log(response);
	});

};